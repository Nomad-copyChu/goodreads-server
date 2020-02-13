import { prisma } from "../../../generated/prisma-client";
import { AddBookMutationArgs } from "../../../../types/types";

export default {
  Mutation: {
    addBook: async (_, args: AddBookMutationArgs, context) => {
      //책 추가는 인증된 유저만 가능하게
      const { user } = context;
      const { authors, gernes } = args;
      //만들어야할 작가들
      let createAuthors = [];
      //연결해야할 작가들
      let connectAuthors = [];
      //만들어야할 장르들
      let createGernes = [];
      //연결해야할 장르들
      let connectGernes = [];

      await Promise.all([
        await Promise.all(
          gernes.map(async gerne => {
            const existGerne = await prisma.$exists.gerne({ term: gerne });
            if (existGerne) {
              connectGernes.push(gerne);
            } else {
              createGernes.push(gerne);
            }
          })
        ),
        await Promise.all(
          authors.map(async author => {
            const existAuthor = await prisma.$exists.author({ name: author });
            if (existAuthor) {
              connectAuthors.push(author);
            } else {
              createAuthors.push(author);
            }
          })
        )
      ]);
      console.log(createAuthors, connectAuthors, createGernes, connectGernes);
      return await prisma.createBook({
        ...args,
        authors: {
          create: createAuthors.map(author => ({
            name: author
          })),
          connect: connectAuthors.map(author => ({
            name: author
          }))
        },
        gernes: {
          create: createGernes.map(gerne => ({
            term: gerne
          })),
          connect: connectGernes.map(gerne => ({
            term: gerne
          }))
        },
        addUser: { connect: { id: user.id } },
        wantCount: 0,
        readCount: 0,
        readingCount: 0,
        totalRating: 0,
        ratedUserNum: 0
      });
    }
  }
};
