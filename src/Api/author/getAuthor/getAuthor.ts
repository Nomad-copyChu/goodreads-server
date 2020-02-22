import { prisma } from "../../../generated/prisma-client";

export default {
  Query: {
    getAuthor: async (_, args) => {
      const { name } = args;

      prisma.author;
      return await prisma.author({ name });
    }
  }
};
