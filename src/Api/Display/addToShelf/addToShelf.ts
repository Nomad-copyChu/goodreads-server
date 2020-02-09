import { addBookCount } from "../../../utils/bookCount";
import { prisma } from "../../../generated/prisma-client";
import { AddToShelfMutationArgs } from "../../../../types/types";

export default {
  Mutation: {
    addToShelf: async (_, args: AddToShelfMutationArgs, context) => {
      const { user } = context;
      const { shelfName, bookId } = args;
      //진열 검색
      const display = await prisma.$exists.display({
        user: { id: user.id },
        book: { id: bookId },
        shelves_some: { name: shelfName }
      });
      if (display) {
        throw Error("이미 진열된 책입니다.");
      }
      //진열 되어있지 않다면
      const shelf = await prisma
        .user({ id: user.id })
        .shelves({ where: { name: shelfName } });
      const book = await prisma.book({ id: bookId });
      const madeDisplay = await prisma.createDisplay({
        user: { connect: { id: user.id } },
        book: { connect: { id: bookId } },
        shelves: { connect: { id: shelf[0].id } }
      });
      addBookCount(book, shelfName);
      return madeDisplay;
    }
  }
};
