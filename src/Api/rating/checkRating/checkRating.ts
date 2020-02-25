import { prisma } from "../../../generated/prisma-client";

export default {
  Query: {
    checkRating: async (_, args, { user }) => {
      const { bookId } = args;
      const ratings = await prisma.ratings({
        where: {
          book: { id: bookId },
          user: { id: user.id }
        }
      });
      return ratings[0];
    }
  }
};
