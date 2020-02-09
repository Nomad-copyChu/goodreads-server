import { prisma } from "../../../generated/prisma-client";

export default {
  Mutation: {
    deleteShelf: async (_, args, context) => {
      const { user } = context;
      const { shelfId } = args;

      const existShelf = await prisma.$exists.shelf({ id: shelfId });
      if (existShelf) {
        return await prisma.deleteShelf({ id: shelfId });
      }
      throw Error("존재하지 않느 선반입니다");
    }
  }
};
