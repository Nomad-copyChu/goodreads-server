import { prisma } from "../../generated/prisma-client";

export default {
  AuthorComment: {
    user: ({ id }) => prisma.authorComment({ id }).user(),
    author: ({ id }) => prisma.authorComment({ id }).author()
  }
};
