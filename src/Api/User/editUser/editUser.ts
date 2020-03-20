import { prisma } from "../../../generated/prisma-client";

export default {
  Mutation: {
    editUser: async (_, args, context) => {
      const { user } = context;
      const { userId, username, email, profilePhoto, profile } = args;

      const existUser = await prisma.$exists.user({ id: userId });
      await prisma.updateUser({
        where: { id: userId },
        data: { username, email, profilePhoto, profile }
      });
    }
  }
};
