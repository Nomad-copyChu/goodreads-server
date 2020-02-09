import { prisma } from "../../generated/prisma-client";

export default {
  Quote: {
    author: ({ id }) => prisma.quote({ id }).author,
    tags: ({ id }) => prisma.quote({ id }).tags
  }
};
