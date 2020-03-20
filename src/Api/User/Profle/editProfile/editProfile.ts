import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    editProfile: async (_, args, context) => {
      const { user } = context;
      const { profileId, username, age, gender, bio, interests } = args;

      await prisma.updateProfile({
        where: { id: profileId },
        data: { username, age, gender, bio, interests }
      });
    }
  }
};
