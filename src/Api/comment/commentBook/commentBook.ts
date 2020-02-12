import { prisma } from "../../../generated/prisma-client";

export default {
  Mutation: {
    commentBook: async (_, args, context) => {
      const { user } = context;
      const { bookId, text } = args;

      return await prisma.createComment({
        user: { connect: { id: user.id } },
        book: { connect: { id: bookId } },
        text
      });
    }
  }
};
