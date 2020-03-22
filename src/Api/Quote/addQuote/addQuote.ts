import { prisma } from "../../../generated/prisma-client";
import { AddQuoteMutationArgs } from "../../../../types/types";

export default {
  Mutation: {
    addQuote: async (_, args: AddQuoteMutationArgs, context) => {
      const { user } = context;
      const { term, tags, authorName } = args;
      const existQuote = await prisma.$exists.quote({
        term
      });
      if (existQuote) {
        throw Error("이미 존재하는 명언입니다.");
      }
      const author = await prisma.author({ name: authorName });
      console.log(author);
      if (!author) {
        await prisma.createAuthor({
          name: authorName
        });
      }

      const quote = await prisma.createQuote({
        term: term,
        author: { connect: { id: author.id } }
      });

      //
      if (!!tags) {
        tags.map(async term => {
          //태그유무 확인
          const tag = await prisma.tag({ term });
          if (tag) {
            //기존에 있던 태그라면 connection
            await prisma.updateQuote({
              data: {
                tags: {
                  connect: {
                    id: tag.id
                  }
                }
              },
              where: {
                id: quote.id
              }
            });
          } else {
            //없던 태그라면 새로 태그를 만든후  connection
            const newTag = await prisma.createTag({ term });
            await prisma.updateQuote({
              data: {
                tags: {
                  connect: {
                    id: newTag.id
                  }
                }
              },
              where: {
                id: quote.id
              }
            });
          }
        });
      }
      return await prisma.quote({ id: quote.id });
    }
  }
};
