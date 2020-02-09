export const typeDefs = ["type Book {\n  id: ID!\n  title: String!\n  authors: [Author!]!\n  thumbnail: String!\n  contents: String\n  datetime: String\n  isbn: String!\n  price: Int\n  publisher: String\n  saleStatus: String!\n  wantCount: Int!\n  readingCount: Int!\n  readCount: Int!\n  comments: [Comment!]\n  gernes: [Gerne!]\n  ratings: [Rating!]\n  avgRating: Float!\n  addUser: User\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype Author {\n  id: ID!\n  name: String!\n  born: String\n  died: String\n  gernes: [Gerne!]\n  description: String\n  photos: [String]\n  books: [Book!]\n  quotes: [Quote!]\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype Gerne {\n  id: ID!\n  term: String!\n  books: [Book!]\n  authors: [Author!]\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype Quote {\n  id: ID!\n  term: String\n  author: Author\n  tags: [Tag!]\n  likesCount: Int\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype User {\n  id: ID!\n  email: String!\n  password: String!\n  username: String!\n  profile: Profile\n  isAdmin: Boolean\n  ratings: [Rating!]!\n  ratingBooks: [Book]!\n  bookAvgRating: Float\n  bookComments: [Comment]\n  shelves: [Shelf]\n  likeQuotes: [Quote]\n  displays: [Display]\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype Rating {\n  id: ID!\n  user: User!\n  book: Book!\n  count: Int!\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype Display {\n  id: ID!\n  user: User\n  book: Book\n  shelves: [Shelf]\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype Shelf {\n  id: ID!\n  user: User\n  name: String!\n  displays: [Display]\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype Profile {\n  id: ID!\n  username: String!\n  age: Int\n  gender: Gender\n  bio: String\n  interests: String\n  favoriteBook: String\n  createdAt: String!\n  updatedAt: String!\n}\n\nenum Gender {\n  Male\n  Female\n}\n\ntype Tag {\n  id: ID!\n  quotes: [Quote]\n  term: String!\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype Comment {\n  id: ID!\n  book: Book\n  text: String!\n  createdAt: String!\n  updatedAt: String!\n}\n\nscalar Upload\n\ntype Query {\n  uploads: [File]\n  getDisplays: [Display]!\n  getShelves: [Shelf]!\n}\n\ntype File {\n  filename: String\n  mimetype: String\n  encoding: String\n}\n\ntype Mutation {\n  addBook(title: String!, authors: [String!]!, thumbnail: String!, contents: String!, datetime: String, isbn: String!, price: Int, publisher: String, saleStatus: String): Book!\n  rateBook(bookId: ID!): Rating!\n  addToShelf(shelfId: ID!, shelfName: String!, bookId: ID!): Display!\n  subFromShelf(shelfId: ID!, bookId: ID!): Display!\n  multipleUpload(files: [Upload!]!): [File!]!\n  singleUpload(file: Upload!): String!\n  addQuote(term: String!, tags: [String], authorId: ID!): Quote!\n  deleteQuote(quoteId: ID!): Quote!\n  createShelf(name: String!): Shelf!\n  deleteShelf(shelfId: ID!): Shelf!\n  editShelf(shelfId: ID!, name: String!): Shelf!\n  createUser(email: String!, password: String!, username: String!): User!\n  deleteUser: User!\n  login(email: String!, password: String!): String!\n}\n"];
/* tslint:disable */

export interface Query {
  uploads: Array<File> | null;
  getDisplays: Array<Display>;
  getShelves: Array<Shelf>;
}

export interface File {
  filename: string | null;
  mimetype: string | null;
  encoding: string | null;
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
  ratings: Array<Rating>;
  ratingBooks: Array<Book>;
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

export interface Rating {
  id: string;
  user: User;
  book: Book;
  count: number;
  createdAt: string;
  updatedAt: string;
}

export interface Book {
  id: string;
  title: string;
  authors: Array<Author>;
  thumbnail: string;
  contents: string | null;
  datetime: string | null;
  isbn: string;
  price: number | null;
  publisher: string | null;
  saleStatus: string;
  wantCount: number;
  readingCount: number;
  readCount: number;
  comments: Array<Comment>;
  gernes: Array<Gerne>;
  ratings: Array<Rating>;
  avgRating: number;
  addUser: User | null;
  createdAt: string;
  updatedAt: string;
}

export interface Author {
  id: string;
  name: string;
  born: string | null;
  died: string | null;
  gernes: Array<Gerne>;
  description: string | null;
  photos: Array<string> | null;
  books: Array<Book>;
  quotes: Array<Quote>;
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
  book: Book | null;
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

export interface Mutation {
  addBook: Book;
  rateBook: Rating;
  addToShelf: Display;
  subFromShelf: Display;
  multipleUpload: Array<File>;
  singleUpload: string;
  addQuote: Quote;
  deleteQuote: Quote;
  createShelf: Shelf;
  deleteShelf: Shelf;
  editShelf: Shelf;
  createUser: User;
  deleteUser: User;
  login: string;
}

export interface AddBookMutationArgs {
  title: string;
  authors: Array<string>;
  thumbnail: string;
  contents: string;
  datetime: string | null;
  isbn: string;
  price: number | null;
  publisher: string | null;
  saleStatus: string | null;
}

export interface RateBookMutationArgs {
  bookId: string;
}

export interface AddToShelfMutationArgs {
  shelfId: string;
  shelfName: string;
  bookId: string;
}

export interface SubFromShelfMutationArgs {
  shelfId: string;
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

export interface DeleteQuoteMutationArgs {
  quoteId: string;
}

export interface CreateShelfMutationArgs {
  name: string;
}

export interface DeleteShelfMutationArgs {
  shelfId: string;
}

export interface EditShelfMutationArgs {
  shelfId: string;
  name: string;
}

export interface CreateUserMutationArgs {
  email: string;
  password: string;
  username: string;
}

export interface LoginMutationArgs {
  email: string;
  password: string;
}

export type Upload = any;
