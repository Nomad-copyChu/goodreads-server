import { prisma } from "../../../generated/prisma-client";

export default {
  Mutation: {
    editUser: async (_, args, context) => {
      const { user } = context;
      const { username, email, profilePhoto, profile } = args;

      const existUser = await prisma.$exists.user({ id: user.id });
      await prisma.updateUser({
        where: { id: user.id },
        data: { username, email, profilePhoto, profile }
      });
    }
  }
};
