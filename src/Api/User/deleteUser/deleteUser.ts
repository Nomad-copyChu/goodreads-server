import { prisma } from "../../../generated/prisma-client";

export default {
  Mutation: {
    deleteUser: async (_, args, context) => {
      const { user } = context;
      const existUser = await prisma.user({ id: user.id });
      try {
        const deletedUser = prisma.deleteUser({ id: user.id });
        return deletedUser;
      } catch (e) {
        throw Error(e);
      }
    }
  }
};
