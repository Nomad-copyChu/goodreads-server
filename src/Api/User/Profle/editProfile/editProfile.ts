import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    editProfile: async (_, args, context) => {
      const { user } = context;
      const { userId, age, gender, bio, interests } = args;

      await prisma.updateProfile({
        where: { id: userId },
        data: { age, gender, bio, interests }
      });
    }
  }
};
