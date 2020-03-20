import { prisma } from "../../../../generated/prisma-client";
import { Connect } from "aws-sdk";

export default {
  Mutation: {
    createProfile: async (_, args, context) => {
      const { user } = context;
      const { age, gender, bio, interests, favoriteBook } = args;

      await prisma.createProfile({
        age,
        gender,
        bio,
        interests,
        favoriteBook,
        user: {
          connect: {
            id: user.id
          }
        }
      });
    }
  }
};
