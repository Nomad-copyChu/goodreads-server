import { prisma } from "../../../generated/prisma-client";
import { AddBookMutationArgs } from "../../../../types/types";

export default {
  Mutation: {
    addBook: async (_, args: AddBookMutationArgs, context) => {
      //책 추가는 인증된 유저만 가능하게
      const { user } = context;
      const { bookInfos, authors } = args;
      if (!bookInfos.title) {
        throw Error("제목은 필수 입니다.");
      }
      if (!bookInfos.thumbnail) {
        throw Error("책의 사진은 필수 입니다.");
      }
      if (!bookInfos.contents) {
        throw Error("책 소개는 필수 입니다.");
      }
      if (!bookInfos.isbn) {
        throw Error("isbn은 필수 입니다.");
      }

      const existBook = await prisma.$exists.book({ isbn: bookInfos.isbn });
      if (existBook) {
        throw Error("이미 등록된 책입니다.");
      }
      //만들어야할 작가들
      let createAuthors = [];
      //연결해야할 작가들
      let connectAuthors = [];
      //만들어야할 장르들
      let createGernes = [];
      //연결해야할 장르들
      let connectGernes = [];
      if (bookInfos.gernes) {
        await Promise.all([
          await Promise.all(
            bookInfos.gernes.map(async gerne => {
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
              const existAuthor = await prisma.$exists.author({
                name: author.name
              });
              if (existAuthor) {
                connectAuthors.push(author);
              } else {
                createAuthors.push(author);
              }
            })
          )
        ]);
      } else {
        await Promise.all(
          authors.map(async author => {
            const existAuthor = await prisma.$exists.author({
              name: author.name
            });
            if (existAuthor) {
              connectAuthors.push(author);
            } else {
              createAuthors.push(author);
            }
          })
        );
      }

      return await prisma.createBook({
        ...bookInfos,
        authors: {
          create: createAuthors.map(author => ({
            ...author
          })),
          connect: connectAuthors.map(author => ({
            name: author.name
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
