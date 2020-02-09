export const typeDefs = ["type Book {\n  id: ID!\n  title: String!\n  author: Author!\n  gernes: [Gerne!]\n  covorImage: String!\n  description: String!\n  comments: [Comment!]\n  ISBN: String!\n  wantCount: Int!\n  readingCount: Int!\n  readCount: Int!\n  avgRating: Float!\n  pages: Int\n  avgRatings: Int\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype Author {\n  id: ID!\n  name: String!\n  Born: String\n  Died: String\n  gernes: [Gerne!]\n  description: String\n  photos: [String]\n  books: [Book!]\n  Quotes: [Quote!]\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype Gerne {\n  id: ID!\n  term: String!\n  books: [Book!]\n  authors: [Author!]\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype Quote {\n  id: ID!\n  term: String\n  author: Author\n  tags: [Tag!]\n  likesCount: Int\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype User {\n  id: ID!\n  email: String!\n  password: String!\n  username: String!\n  profile: Profile\n  isAdmin: Boolean\n  RatingBooks: [Book]\n  bookAvgRating: Float\n  bookComments: [Comment]\n  shelves: [Shelf]\n  likeQuotes: [Quote]\n  displays: [Display]\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype Display {\n  id: ID!\n  user: User\n  book: Book\n  shelves: [Shelf]\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype Shelf {\n  id: ID!\n  user: User\n  name: String!\n  displays: [Display]\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype Profile {\n  id: ID!\n  username: String!\n  age: Int\n  gender: Gender\n  bio: String\n  interests: String\n  favoriteBook: String\n  createdAt: String!\n  updatedAt: String!\n}\n\nenum Gender {\n  Male\n  Female\n}\n\ntype Tag {\n  id: ID!\n  quotes: [Quote]\n  term: String!\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype Comment {\n  id: ID!\n  Book: Book\n  text: String!\n  createdAt: String!\n  updatedAt: String!\n}\n\nscalar Upload\n\ntype Query {\n  uploads: [File]\n}\n\ntype File {\n  filename: String\n  mimetype: String\n  encoding: String\n}\n\ntype Mutation {\n  addToShelf(shelfId: ID!, shelfName: String!, bookId: ID!): Display!\n  multipleUpload(files: [Upload!]!): [File!]!\n  singleUpload(file: Upload!): String!\n  addQuote(term: String!, tags: [String], authorId: ID!): Quote!\n  createUser(email: String!, password: String!, username: String!): User!\n  deleteUser: User!\n}\n"];
/* tslint:disable */

export interface Query {
  uploads: Array<File> | null;
}

export interface File {
  filename: string | null;
  mimetype: string | null;
  encoding: string | null;
}

export interface Mutation {
  addToShelf: Display;
  multipleUpload: Array<File>;
  singleUpload: string;
  addQuote: Quote;
  createUser: User;
  deleteUser: User;
}

export interface AddToShelfMutationArgs {
  shelfId: string;
  shelfName: string;
  bookId: string;
}

export interface MultipleUploadMutationArgs {
  files: Array<Upload>;
}

export interface SingleUploadMutationArgs {
  file: Upload;
}

export interface AddQuoteMutationArgs {
  term: string;
  tags: Array<string> | null;
  authorId: string;
}

export interface CreateUserMutationArgs {
  email: string;
  password: string;
  username: string;
}

export interface Display {
  id: string;
  user: User | null;
  book: Book | null;
  shelves: Array<Shelf> | null;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  email: string;
  password: string;
  username: string;
  profile: Profile | null;
  isAdmin: boolean | null;
  RatingBooks: Array<Book> | null;
  bookAvgRating: number | null;
  bookComments: Array<Comment> | null;
  shelves: Array<Shelf> | null;
  likeQuotes: Array<Quote> | null;
  displays: Array<Display> | null;
  createdAt: string;
  updatedAt: string;
}

export interface Profile {
  id: string;
  username: string;
  age: number | null;
  gender: Gender | null;
  bio: string | null;
  interests: string | null;
  favoriteBook: string | null;
  createdAt: string;
  updatedAt: string;
}

export type Gender = "Male" | "Female";

export interface Book {
  id: string;
  title: string;
  author: Author;
  gernes: Array<Gerne>;
  covorImage: string;
  description: string;
  comments: Array<Comment>;
  ISBN: string;
  wantCount: number;
  readingCount: number;
  readCount: number;
  avgRating: number;
  pages: number | null;
  avgRatings: number | null;
  createdAt: string;
  updatedAt: string;
}

export interface Author {
  id: string;
  name: string;
  Born: string | null;
  Died: string | null;
  gernes: Array<Gerne>;
  description: string | null;
  photos: Array<string> | null;
  books: Array<Book>;
  Quotes: Array<Quote>;
  createdAt: string;
  updatedAt: string;
}

export interface Gerne {
  id: string;
  term: string;
  books: Array<Book>;
  authors: Array<Author>;
  createdAt: string;
  updatedAt: string;
}

export interface Quote {
  id: string;
  term: string | null;
  author: Author | null;
  tags: Array<Tag>;
  likesCount: number | null;
  createdAt: string;
  updatedAt: string;
}

export interface Tag {
  id: string;
  quotes: Array<Quote> | null;
  term: string;
  createdAt: string;
  updatedAt: string;
}

export interface Comment {
  id: string;
  Book: Book | null;
  text: string;
  createdAt: string;
  updatedAt: string;
}

export interface Shelf {
  id: string;
  user: User | null;
  name: string;
  displays: Array<Display> | null;
  createdAt: string;
  updatedAt: string;
}

export type Upload = any;
