import { prisma } from "../../../generated/prisma-client";
import { AddBookMutationArgs } from "../../../../types/graph.d";
export default {
  Mutation: {
    addBook: async (_, args: AddBookMutationArgs, context) => {
      //책 추가는 인증된 유저만 가능하게
      const { user } = context;
      const { authors } = args;
      //만들어야할 작가들
      let createAuthors = [];
      //연결해야할 작가들
      let connectAuthors = [];
      await Promise.all(
        authors.map(async author => {
          const existAuthor = await prisma.$exists.author({ name: author });
          if (existAuthor) {
            connectAuthors.push(author);
          } else {
            createAuthors.push(author);
          }
        })
      );
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
        addUser: { connect: { id: user.id } }
      });
    }
  }
};
