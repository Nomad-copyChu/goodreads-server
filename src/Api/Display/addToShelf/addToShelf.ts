import { addBookCount } from "../../../utils/bookCount";
import { prisma } from "../../../generated/prisma-client";

export default {
  Mutation: {
    addToShelf: async (_, args, context) => {
      const { user } = context.user;
      const { shelfId, shelfName, bookId } = args;
      //진열 검색
      const shelf = await prisma.$exists.shelf({ id: shelfId });
      if (shelf) {
        throw Error("이미 진열된 책입니다.");
      }
      //진열 되어있지 않다면
      const book = await prisma.book({ id: bookId });

      await prisma.createDisplay({
        user: { connect: { id: user.id } },
        book: { connect: { id: bookId } },
        shelves: { connect: { id: shelfId } }
      });
      addBookCount(book, shelfName);
    }
  }
};
