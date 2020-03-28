import { prisma } from "../../../generated/prisma-client";

export default {
  Mutation: {
    createShelf: async (_, args, context) => {
      const { user } = context;
      const { name } = args;

      //중복 이름 확인
      const existShelf = await prisma.$exists.shelf({
        user: {
          id: user.id
        },
        name: name
      });
      if (existShelf) {
        throw Error("이미 존재하는 선반 이름입니다");
      }

      return await prisma.createShelf({
        name,
        user: {
          connect: {
            id: user.id
          }
        }
      });
    }
  }
};
