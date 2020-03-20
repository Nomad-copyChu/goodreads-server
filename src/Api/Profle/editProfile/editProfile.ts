import { prisma } from "../../../generated/prisma-client";

export default {
  Mutation: {
    editProfile: async (_, args, context) => {
      const { user } = context;
      const { userId, age, gender, bio, interests } = args;
      //프로필조회
      const profile = await prisma.user({ id: user.id }).profile();
      //프로필이 있다면
      if (profile) {
        return await prisma.updateProfile({
          where: { id: profile.id },
          data: {
            ...args
          }
        });
      }
      //프로필이 없다면
      await prisma.createProfile({
        ...args,
        user: { connect: { id: user.id } }
      });
    }
  }
};
