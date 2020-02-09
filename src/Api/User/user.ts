import { prisma } from "../../generated/prisma-client";

export default {
  User: {
    ratings: ({ id }) => prisma.user({ id }).ratings(),
    bookComments: ({ id }) => prisma.user({ id }).bookComments(),
    shelves: ({ id }) => prisma.user({ id }).shelves(),
    likeQuotes: ({ id }) => prisma.user({ id }).likeQuotes(),
    displays: ({ id }) => prisma.user({ id }).displays(),
    bookAvgRating: async ({ id }) => {
      const one = await prisma
        .ratingsConnection({ where: { user: { id }, count: 1 } })
        .aggregate()
        .count();
      const two = await prisma
        .ratingsConnection({ where: { user: { id }, count: 2 } })
        .aggregate()
        .count();
      const three = await prisma
        .ratingsConnection({ where: { user: { id }, count: 3 } })
        .aggregate()
        .count();
      const four = await prisma
        .ratingsConnection({ where: { user: { id }, count: 4 } })
        .aggregate()
        .count();
      const five = await prisma
        .ratingsConnection({ where: { user: { id }, count: 5 } })
        .aggregate()
        .count();
      return (
        (one + two * 2 + three * 3 + four * 4 + five * 5) /
        (one + two + three + four + five)
      );
    }
  }
};
