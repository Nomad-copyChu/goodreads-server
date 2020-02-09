import { prisma } from "../../../generated/prisma-client";

export default {
  Query: {
    getBooks: async (_, args) => {
      const { gerne, random } = args;
      if (gerne) {
        return await prisma.books({ where: { gernes_every: { term: gerne } } });
      }
      return await prisma.books();
    }
  }
};
