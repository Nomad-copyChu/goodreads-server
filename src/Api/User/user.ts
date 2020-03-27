import { prisma } from "../../generated/prisma-client";

export default {
  User: {
    ratings: ({ id }) => prisma.user({ id }).ratings(),
    bookComments: ({ id }) => prisma.user({ id }).bookComments(),
    shelves: ({ id }) => prisma.user({ id }).shelves(),
    likeQuotes: ({ id }) => prisma.user({ id }).likeQuotes(),
    displays: ({ id }) => prisma.user({ id }).displays(),
    profile: ({ id }) => prisma.user({ id }).profile(),
    bookAvgRating: async ({ id }) => {
      const userRatings = await prisma.user({ id }).ratings();
      let totalRating = 0;
      userRatings.map(rating => {
        totalRating += rating.count;
      });
      return (totalRating / userRatings.length).toFixed(2);
    }
  }
};
