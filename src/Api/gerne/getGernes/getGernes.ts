import { prisma } from "../../../generated/prisma-client";

export default {
  Query: {
    getGernes: async () => {
      return await prisma.quotes({ first: 10 });
    }
  }
};
