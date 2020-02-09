import { prisma } from "../../../generated/prisma-client";

export default {
  Query: {
    getDisplays: async (_, args, context) => {
      const { user } = context.user;
      await prisma.displays({ where: { user: { id: user.id } } });
    }
  }
};
