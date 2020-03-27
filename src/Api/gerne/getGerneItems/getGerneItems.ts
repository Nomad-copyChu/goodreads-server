import { prisma } from "../../../generated/prisma-client";

export default {
  Query: {
    getGerneItems: async (_, args) => {
      const { term } = args;

      return await prisma.gerne({ term });
    }
  }
};
