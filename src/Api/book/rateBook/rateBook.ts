import { prisma } from "../../../generated/prisma-client";

export default {
  Mutation: {
    rateBook: async (_, args, context) => {
      const { user } = context;
      const { bookId, count } = args;

      const existRating = await prisma.$exists.rating({
        user: { id: user.id },
        book: { id: bookId }
      });
      //이미 rating 했다면 count 변경
      if (existRating) {
        await prisma.updateManyRatings({
          where: {
            user: { id: user.id },
            book: { id: bookId }
          },
          data: { count }
        });
      }
      //한적이 없다면 rating 생성
      await prisma.createRating({
        user: { connect: { id: user.id } },
        book: { connect: { id: bookId } },
        count
      });
    }
  }
};
