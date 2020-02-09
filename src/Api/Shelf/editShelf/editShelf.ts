import { prisma } from "../../../generated/prisma-client";

export default {
  Mutation: {
    editShelf: async (_, args, context) => {
      const { user } = context;
      const { shelfId, name } = args;

      const existShelf = await prisma.$exists.shelf({ id: shelfId });
      await prisma.updateShelf({
        where: { id: shelfId },
        data: { name: name }
      });
    }
  }
};
