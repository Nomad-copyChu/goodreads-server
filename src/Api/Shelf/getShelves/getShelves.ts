import { prisma } from "../../../generated/prisma-client";

//선반 목록 리턴
export default {
  Query: {
    getShelves: async (_, args, context) => {
      const { user } = context.user;
      return await prisma.shelves({ where: { user: { id: user.id } } });
    }
  }
};
