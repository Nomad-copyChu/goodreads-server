import { ApolloServer } from "apollo-server";
import schema from "./schema";
import jwt from "jsonwebtoken";
import middlewares from "./middlewares";
import { prisma } from "./generated/prisma-client";

import { GraphQLServer } from "graphql-yoga";

require("dotenv").config();

const server = new GraphQLServer({
  schema,

  context: async context => {
    //프리스마 에서 유저를 찾아 request 넣는다

    const token = context.request.headers.authorization;
    if (token === "undefined" || !token) {
      return { ...context };
    } else {
      const id = jwt.verify(token as string, process.env.JWT_SECRET);
      const user = await prisma.user({ id: id as string });
      if (user) {
        if (user.isAdmin) {
          return { ...context, user, isAdmin: true };
        }
        return { ...context, user };
      }
      return { ...context };
    }
  }
});
console.log(process.env.NODE_ENV);
server.start(() => console.log(`🚀  Server ready at `));
