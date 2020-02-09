import { prisma } from "../../generated/prisma-client";

export default {
  User: {
    ratings: ({ id }) => prisma.user({ id }).ratings(),
    bookComments: ({ id }) => prisma.user({ id }).bookComments(),
    shelves: ({ id }) => prisma.user({ id }).shelves(),
    likeQuotes: ({ id }) => prisma.user({ id }).likeQuotes(),
    displays: ({ id }) => prisma.user({ id }).displays()
  }
};
