import { prisma } from "../../../generated/prisma-client";

export default {
  Query: {
    getQuotes: async () => {
      const quotes = await prisma.quotes();
      return quotes;
    }
  }
};
