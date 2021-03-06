import { prisma } from "../../../generated/prisma-client";

export default {
  Query: {
    getAuthor: async (_, args) => {
      const { id } = args;
      console.log(id);
      return await prisma.author({ id });
    }
  }
};
