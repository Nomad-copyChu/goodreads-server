import { rule, shield } from "graphql-shield";
import addAuthor from "./api/author/addAuthor/addAuthor";
import likeQuote from "./api/user/likeQuote/likeQuote";

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
  Query: {
    getShelves: isLoggedIn,
    getDisplays: isLoggedIn,
    checkRating: isLoggedIn
  },
  Mutation: {
    deleteUser: isLoggedIn,
    addAuthor: isLoggedIn,
    addBook: isLoggedIn,
    rateBook: isLoggedIn,
    commentBook: isLoggedIn,
    deleteComment: isLoggedIn,
    addToShelf: isLoggedIn,
    subFromShelf: isLoggedIn,
    addQuote: isLoggedIn,
    createShelf: isLoggedIn,
    deleteShelf: isLoggedIn,
    editShelf: isLoggedIn,
    likeQuote: isLoggedIn
  }
});

export default permissions;
