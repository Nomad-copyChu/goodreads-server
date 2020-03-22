import { prisma } from "../../../generated/prisma-client";

export default {
  Mutation: {
    editAuthor: async (_, args, { user }) => {
      const { authorId, editAuthorArgs } = args;
      //만들어야할 장르들
      let createGernes = [];
      //연결해야할 장르들
      let connectGernes = [];
      await Promise.all(
        editAuthorArgs.gernes.map(async gerne => {
          const existAuthor = await prisma.$exists.gerne({ term: gerne });
          if (existAuthor) {
            connectGernes.push(gerne);
          } else {
            createGernes.push(gerne);
          }
        })
      );
      console.log(createGernes, connectGernes);
      return await prisma.updateAuthor({
        where: { id: authorId },
        data: {
          ...editAuthorArgs,
          gernes: {
            connect: connectGernes.map(gerne => ({ term: gerne })),
            create: createGernes.map(gerne => ({ term: gerne }))
          }
        }
      });
    }
  }
};
