import { prisma } from "../../../generated/prisma-client";

export default {
  Query: {
    getGernes: async () => {
      return await prisma.gernes({ first: 10 });
    }
  }
};
