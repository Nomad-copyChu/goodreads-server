import { prisma } from "../../../generated/prisma-client";

export default {
  Query: {
    getQuotes: async () => {
      await prisma.quotes({ first: 10 });
    }
  }
};
