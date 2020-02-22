import { prisma } from "../../../generated/prisma-client";
import isEmpty from "lodash/isEmpty";

export default {
  Query: {
    getAuthorsWithName: async (_, args) => {
      const { authors } = args;

      return await Promise.all(
        authors.map(async (author: string) => {
          const result = await prisma.authors({ where: { name: author } });
          return isEmpty(result) ? { name: author } : result[0];
        })
      );
    }
  }
};
