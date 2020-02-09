import { prisma } from "../../../generated/prisma-client";

export default {
  Query: {
    getUser: async (_, args) => {
      const { userId } = args;
      return await prisma.user({ id: userId });
    }
  }
};
