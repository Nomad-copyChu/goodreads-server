import { prisma } from "../../../generated/prisma-client";

export default {
  Mutation: {
    deleteUser: async (_, args, context) => {
      const { user } = context;
      console.log(user);
      const existUser = await prisma.user({ id: user.id });
      await prisma.deleteUser({ id: user.id });
    }
  }
};
