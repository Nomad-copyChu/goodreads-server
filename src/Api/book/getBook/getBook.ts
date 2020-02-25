import { prisma } from "../../../generated/prisma-client";

export default {
  Query: {
    getBook: async (_, args) => {
      const { id } = args;
      console.log(id, "getbook");
      return await prisma.book({ id });
    }
  }
};
