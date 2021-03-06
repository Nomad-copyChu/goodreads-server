import { prisma } from "../../../generated/prisma-client";

export default {
  Mutation: {
    addAuthor: async (_, args, context) => {
      const { user } = context;
      const { name, born, died, gernes, description, photo } = args;
      //만들어야할 장르들
      let createGernes = [];
      //연결해야할 장르들
      let connectGernes = [];
      await Promise.all(
        gernes.map(async gerne => {
          const existAuthor = await prisma.$exists.gerne({ term: gerne });
          if (existAuthor) {
            connectGernes.push(gerne);
          } else {
            createGernes.push(gerne);
          }
        })
      );
      return await prisma.createAuthor({
        name,
        born,
        died,
        description,
        photo,
        gernes: {
          create: createGernes.map((gerne: string) => ({
            term: gerne
          })),
          connect: connectGernes.map((gerne: string) => ({
            term: gerne
          }))
        }
      });
    }
  }
};
