import { rule, shield } from "graphql-shield";

const isAdmin = rule()(async (parent, args, ctx, info) => {
  if (ctx.isAdmin) {
    return true;
  }
  return false;
});
const isLoggedIn = rule()(async (parent, args, ctx, info) => {
  if (ctx.user) {
    return true;
  }
  return false;
});

const permissions = shield({
  Query: {},
  Mutation: {
    deleteUser: isLoggedIn
  }
});

export default permissions;
