import { prisma } from "../../../generated/prisma-client";

export default {
  Mutation: {
    commentAuthor: async (_, args, { user }) => {
      const { authorId, text } = args;

      const comment = await prisma.createAuthorComment({
        user: { connect: { id: user.id } },
        author: { connect: { id: authorId } },
        text
      });
      console.log(comment);
      return comment;
    }
  }
};
