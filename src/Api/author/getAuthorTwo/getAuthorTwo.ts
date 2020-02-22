import { prisma } from "../../../generated/prisma-client";

export default {
  Query: {
    getAuthorTwo: async () => {
      return await prisma.authors({ first: 2 });
    }
  }
};
