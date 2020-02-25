import { prisma } from "../../../generated/prisma-client";

export default {
  Query: {
    checkRating: async (_, args, { user }) => {
      const { bookId } = args;
      return await prisma.ratings({
        where: {
          book: { id: bookId },
          user: { id: user.id }
        }
      })[0];
    }
  }
};
