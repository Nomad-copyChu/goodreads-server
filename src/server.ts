import { ApolloServer } from "apollo-server";
import schema from "./schema";
import jwt from "jsonwebtoken";
import middlewares from "./middlewares";
import { prisma } from "./generated/prisma-client";

require("dotenv").config();

const server = new ApolloServer({
  schema,
  cors: {
    origin: "*",
    methods: "GET,HEAD,POST"
  },
  formatError: (error): any => {
    console.log(error);
    return error;
  },
  formatResponse: (response): any => {
    return response;
  },
  context: async context => {
    //프리스마 에서 유저를 찾아 request 넣는다
    const token = context.req.headers.authorization;
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
  },
  playground: true
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(
    "NODE_ENV is",
    process.env.NODE_ENV,
    `🚀  Server ready at ${url}`
  );
});
