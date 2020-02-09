import { prisma } from "../../../generated/prisma-client";
import { subBookCount } from "../../../utils/bookCount";

export default {
  Mutation: {
    subFromShelf: async (_, args, context) => {
      const { user } = context;
      const { shelfName, bookId } = args;

      //진열 검색
      const display = await prisma.$exists.display({
        user: { id: user.id },
        book: { id: bookId },
        shelves_some: { name: shelfName }
      });
      if (!display) {
        throw Error("존재하지 않는 진열 입니다.");
      }
      const shelves = await prisma.user({ id: user.id }).displays({
        where: { book: { id: bookId }, shelves_some: { name: shelfName } }
      });
      const book = await prisma.book({ id: bookId });

      subBookCount(book, shelfName);
      return await prisma.deleteDisplay({ id: shelves[0].id });
    }
  }
};
