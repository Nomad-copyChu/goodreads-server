import { prisma } from "../../generated/prisma-client";

export default {
  Author: {
    gernes: ({ id }) => prisma.author({ id }).gernes(),
    books: ({ id }) => prisma.author({ id }).books(),
    quotes: ({ id }) => prisma.author({ id }).quotes(),
    comments: ({ id }) => prisma.author({ id }).comments()
  }
};
