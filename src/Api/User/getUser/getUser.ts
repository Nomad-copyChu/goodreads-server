import { prisma } from "../../../generated/prisma-client";

export default {
  Query: {
    getUser: async (_, __, context) => {
      const { user } = context;
      if (!user) {
        throw Error("로그인 되지 않았습니다.");
      }
      return await prisma.user({ id: user.id });
    }
  }
};
