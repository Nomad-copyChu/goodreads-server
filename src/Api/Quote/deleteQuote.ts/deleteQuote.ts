import { prisma } from "../../../generated/prisma-client";

export default {
  Mutation: {
    deleteQuote: async (_, args, context) => {
      const { user } = context;
      const { quoteId } = args;

      const existQuote = await prisma.quote({ id: quoteId });
      if (existQuote) {
        await prisma.deleteQuote({ id: quoteId });
      }
    }
  }
};
