import { prisma } from "../../../generated/prisma-client";
import { RateBookMutationArgs } from "../../../../types/types";

export default {
  Mutation: {
    rateBook: async (_, args: RateBookMutationArgs, context) => {
      const { user } = context;
      const { bookId, count } = args;
      if (count < 0 || count > 5) {
        throw Error("잘못된 별 개수 입니다.");
      }

      const Rating = await prisma
        .user({ id: user.id })
        .ratings({ where: { book: { id: bookId } } });
      //이미 rating 했다면 count 변경
      const book = await prisma.book({ id: bookId });
      if (Rating.length > 0) {
        const rating = await prisma.updateRating({
          where: { id: Rating[0].id },
          data: { count }
        });
        await prisma.updateBook({
          where: { id: bookId },
          data: {
            totalRating: book.totalRating - Rating[0].count + count
          }
        });
        return rating;
      }
      //한적이 없다면 rating 생성
      const rating = await prisma.createRating({
        user: { connect: { id: user.id } },
        book: { connect: { id: bookId } },
        count
      });
      await prisma.updateBook({
        where: { id: bookId },
        data: {
          totalRating: book.totalRating + count,
          ratedUserNum: book.ratedUserNum + 1
        }
      });
      return rating;
    }
  }
};
