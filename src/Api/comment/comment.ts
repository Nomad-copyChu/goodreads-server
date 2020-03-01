import { prisma } from "../../generated/prisma-client";

export default {
  Comment: {
    user: ({ id }) => prisma.comment({ id }).user(),
    book: ({ id }) => prisma.comment({ id }).book()
  },
  AuthorComment: {
    user: ({ id }) => prisma.authorComment({ id }).user(),
    author: ({ id }) => prisma.authorComment({ id }).author()
  }
};
