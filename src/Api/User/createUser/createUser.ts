import { prisma } from "../../../generated/prisma-client";
import bcrypt from "bcryptjs";
import { CreateUserMutationArgs } from "../../../../types/types";
import { generateToken } from "../../../utils/generateToken";
export default {
  Mutation: {
    createUser: async (_, args: CreateUserMutationArgs) => {
      const { email, password, username } = args;
      const existUser = await prisma.$exists.user({
        OR: [{ username }, { email }]
      });
      if (existUser) {
        throw Error("이미 가입된 email 혹은 id 입니다.");
      }
      const hashedPassword = await bcrypt.hashSync(
        password,
        parseInt(process.env.BYCRIPT_ROUNDS)
      );
      try {
        const user = await prisma.createUser({
          email,
          username,
          password: hashedPassword,
          shelves: {
            create: [{ name: "read" }, { name: "reading" }, { name: "read" }]
          }
        });
        return generateToken(user.id);
      } catch (e) {
        throw Error(e.message);
      }
    }
  }
};
