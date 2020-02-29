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
      //pg 연결에서 raw query를 날리면 훨씬 좋을듯
      const [one, two, three, four, five] = await Promise.all([
        await prisma
          .ratingsConnection({ where: { user: { id }, count: 1 } })
          .aggregate()
          .count(),
        await prisma
          .ratingsConnection({ where: { user: { id }, count: 2 } })
          .aggregate()
          .count(),
        await prisma
          .ratingsConnection({ where: { user: { id }, count: 3 } })
          .aggregate()
          .count(),
        await prisma
          .ratingsConnection({ where: { user: { id }, count: 4 } })
          .aggregate()
          .count(),
        prisma
          .ratingsConnection({ where: { user: { id }, count: 5 } })
          .aggregate()
          .count()
      ]);

      return (
        (one + two * 2 + three * 3 + four * 4 + five * 5) /
        (one + two + three + four + five)
      ).toFixed(2);
    }
  }
};
