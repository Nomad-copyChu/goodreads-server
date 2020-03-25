import { prisma } from "../../../generated/prisma-client";

export default {
  Mutation: {
    likeQuote: async (_, args, { user }) => {
      const { quoteId } = args;
      const existLike = await prisma.$exists.user({
        id: user.id,
        likeQuotes_some: { id: quoteId }
      });
      if (existLike) {
        throw Error("이미 좋아하는 명언 입니다.");
      }

      await prisma.updateUser({
        where: { id: user.id },
        data: {
          likeQuotes: { connect: { id: quoteId } }
        }
      });
      const prevLikesCount = await prisma.quote({ id: quoteId }).likesCount();
      return await prisma.updateQuote({
        where: { id: quoteId },
        data: { likesCount: prevLikesCount + 1 }
      });
    }
  }
};
