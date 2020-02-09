import { prisma } from "../../../generated/prisma-client";

export default {
  Mutation: {
    subFromShelf: async (_, args, context) => {
      const { user } = context;
      const { shelfId, bookId } = args;

      //진열 검색

      throw Error("존재하지 않는 진열 입니다.");
    }
  }
};
