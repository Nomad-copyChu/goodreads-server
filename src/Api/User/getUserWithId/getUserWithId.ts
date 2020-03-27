import { prisma } from "../../../generated/prisma-client";

export default {
  Query: {
    getUserWithId: async (_, args) => {
      const { userId } = args;

      return await prisma.user({ id: userId });
    }
  }
};
