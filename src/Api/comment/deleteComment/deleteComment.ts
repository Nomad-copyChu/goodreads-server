import { prisma } from "../../../generated/prisma-client";

export default {
  Mutation: {
    deleteComment: async (_, args, context) => {
      const { user } = context;
      const { commetId } = args;

      const isown = await prisma.$exists.comment({
        id: commetId,
        user: { id: user.id }
      });
      if (isown) {
        await prisma.deleteComment({ id: commetId });
      } else {
        throw Error("댓글의 주인이 아닙니다.");
      }
    }
  }
};
