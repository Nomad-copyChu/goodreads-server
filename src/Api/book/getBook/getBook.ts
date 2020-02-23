import { prisma } from "../../../generated/prisma-client";

export default {
  Query: {
    getBook: async (_, args) => {
      const { id } = args;

      return await prisma.book({ id });
    }
  }
};
