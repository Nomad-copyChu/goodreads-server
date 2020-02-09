import { prisma } from "../../../generated/prisma-client";

export default {
  Query: {
    getAuthors: async (_, args) => {
      const { gerne } = args;

      if (gerne) {
        return await prisma.authors({
          where: { gernes_every: { term: gerne } }
        });
      }
      return await prisma.authors({ first: 2 });
    }
  }
};
