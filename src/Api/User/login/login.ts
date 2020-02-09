import bcrypt from "bcryptjs";
import { prisma } from "../../../generated/prisma-client";
import { generateToken } from "../../../utils/generateToken";

export default {
  Mutation: {
    login: async (_, args) => {
      const { email, password } = args;
      const user = await prisma.user({ email });

      const secretCheck = bcrypt.compareSync(password, user.password);
      if (secretCheck) {
        return generateToken(user.id);
      } else {
        throw Error("password Wrong");
      }
    }
  }
};
