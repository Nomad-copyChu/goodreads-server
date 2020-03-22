import { prisma } from "../../generated/prisma-client";

export default {
  Comment: {
    user: ({ id }) => prisma.comment({ id }).user(),
    book: ({ id }) => prisma.comment({ id }).book()
  }
};
