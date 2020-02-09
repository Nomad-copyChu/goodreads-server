import bcrypt from "bcryptjs";
import { prisma } from "../../../generated/prisma-client";
import { generateToken } from "../../../utils/generateToken";

export default {
  Mutation: {
    login: async (_, args) => {
      const { email, password } = args;
      const user = await prisma.user({ email });
      if (!user) {
        throw Error("존재 하지 않는 계정입니다.");
      }
      const secretCheck = bcrypt.compareSync(password, user.password);
      if (secretCheck) {
        return generateToken(user.id);
      } else {
        throw Error("비밀번호가 틀렸습니다.");
      }
    }
  }
};
