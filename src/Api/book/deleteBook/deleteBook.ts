import { prisma } from "../../../generated/prisma-client";

export default {
  Mutation: {
    deleteBook: async (_, args, context) => {
      const { user } = context;
      const { bookId } = args;

      const existBook = await prisma.book({ id: bookId });
      if (existBook) {
        await prisma.deleteBook({ id: bookId });
      }
    }
  }
};
