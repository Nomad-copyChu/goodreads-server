import { prisma } from "../../generated/prisma-client";

export default {
  Book: {
    authors: ({ id }) => prisma.book({ id }).authors(),
    comments: ({ id }) => prisma.book({ id }).comments(),
    gernes: ({ id }) => prisma.book({ id }).gernes(),
    addUser: ({ id }) => prisma.book({ id }).addUser()
  }
};
