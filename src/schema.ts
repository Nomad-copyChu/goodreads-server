import * as path from "path";
import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";
import permissions from "./middlewares";
import { applyMiddleware } from "graphql-middleware";

const allTypes = fileLoader(path.join(__dirname, "./Api/**/*.graphql"));
const allResolvers = fileLoader(
  path.join(
    __dirname,
    process.env.NODE_ENV === "production" ? "./Api/**/*.js" : "./Api/**/*.ts"
  )
);
const schema = applyMiddleware(
  makeExecutableSchema({
    typeDefs: mergeTypes(allTypes),
    resolvers: mergeResolvers(allResolvers),
    resolverValidationOptions: {
      requireResolversForResolveType: false
    }
  }),

  permissions
);
export default schema;
