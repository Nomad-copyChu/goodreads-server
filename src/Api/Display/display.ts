import { prisma } from "../../generated/prisma-client";

export default {
  Display: {
    user: ({ id }) => prisma.display({ id }).user(),
    book: ({ id }) => prisma.display({ id }).book(),
    shelves: ({ id }) => prisma.display({ id }).shelves()
  }
};
