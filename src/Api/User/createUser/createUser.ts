import { prisma } from "../../../generated/prisma-client";
import bcrypt from "bcryptjs";
import { CreateUserMutationArgs } from "../../../../types/types";
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
      const user = await prisma.createUser({
        email,
        username,
        password: hashedPassword
      });
      const wantShelf = await prisma.createShelf({
        user: { connect: { id: user.id } },
        name: "want"
      });
      await prisma.updateUser({
        where: { id: user.id },
        data: {
          shelves: {
            connect: {
              id: wantShelf.id
            }
          }
        }
      });
      const readingShelf = await prisma.createShelf({
        user: { connect: { id: user.id } },
        name: "reading"
      });
      await prisma.updateUser({
        where: { id: user.id },
        data: {
          shelves: {
            connect: {
              id: readingShelf.id
            }
          }
        }
      });
      const readShelf = await prisma.createShelf({
        user: { connect: { id: user.id } },
        name: "read"
      });
      await prisma.updateUser({
        where: { id: user.id },
        data: {
          shelves: {
            connect: {
              id: readShelf.id
            }
          }
        }
      });
      return await prisma.user({ id: user.id });
    }
  }
};
