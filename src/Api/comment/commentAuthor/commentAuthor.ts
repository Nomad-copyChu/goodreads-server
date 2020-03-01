import { prisma } from "../../../generated/prisma-client";

export default {
  Mutation: {
    commentAuthor: async (_, args, { user }) => {
      const { authorId, text } = args;

      return await prisma.createAuthorComment({
        user: { connect: { id: user.id } },
        author: { connect: { id: authorId } },
        text
      });
    }
  }
};
