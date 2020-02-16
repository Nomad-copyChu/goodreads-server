import { prisma } from "../../generated/prisma-client";

export default {
  SearchResult: {
    __resolveType(obj, context, info) {
      if (obj.name) {
        return "Author";
      }

      if (obj.title) {
        return "Book";
      }
      if (obj.username) {
        return "User";
      }

      return null;
    }
  },
  Query: {
    search: async (_, args) => {
      const { keyword }: { keyword: string } = args;
      const [users, authors, books] = await Promise.all([
        await prisma.users({ where: { username_contains: keyword } }),
        await prisma.authors({ where: { name_contains: keyword } }),
        await prisma.books({ where: { title_contains: keyword } })
      ]);
      return users.concat(authors as any, books as any);
    }
  }
};
