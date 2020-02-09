import { prisma } from "../../generated/prisma-client";

export default {
  Shelf: {
    user: ({ id }) => prisma.shelf({ id }).user,
    displays: ({ id }) => prisma.shelf({ id }).displays
  }
};
