import { prisma } from "../../../generated/prisma-client";

export default {
  Query: {
    getQuotes: async (_, args) => {
      const { limit } = args;
      const quotes = await prisma.quotes({ first: limit || 10 });
      return quotes;
    }
  }
};
