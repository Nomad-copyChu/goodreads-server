import { prisma } from "../../generated/prisma-client";

export default {
  Gerne: {
    authors: ({ id }) => prisma.gerne({ id }).authors,
    books: ({ id }) => prisma.gerne({ id }).books
  }
};
