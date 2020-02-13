export const typeDefs = ["type Book {\n  id: ID!\n  title: String!\n  authors: [Author!]!\n  thumbnail: String!\n  contents: String\n  datetime: String\n  isbn: String!\n  price: Int\n  publisher: String\n  saleStatus: String!\n  wantCount: Int!\n  readingCount: Int!\n  readCount: Int!\n  comments: [Comment!]\n  gernes: [Gerne!]\n  totalRating: Int!\n  ratedUserNum: Int!\n  addUser: User\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype Author {\n  id: ID!\n  name: String!\n  born: String\n  died: String\n  gernes: [Gerne!]\n  description: String\n  photo: String\n  books: [Book!]\n  quotes: [Quote!]\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype Gerne {\n  id: ID!\n  term: String!\n  books: [Book!]\n  authors: [Author!]\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype Quote {\n  id: ID!\n  term: String\n  author: Author\n  tags: [Tag!]\n  likesCount: Int\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype User {\n  id: ID!\n  email: String!\n  password: String!\n  username: String!\n  profilePhoto: String!\n  profile: Profile\n  isAdmin: Boolean\n  ratings: [Rating!]\n  ratingBooks: [Book]\n  bookAvgRating: Float\n  bookComments: [Comment]\n  shelves: [Shelf]\n  likeQuotes: [Quote]\n  displays: [Display]\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype Rating {\n  id: ID!\n  user: User!\n  book: Book!\n  count: Int!\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype Display {\n  id: ID!\n  user: User\n  book: Book\n  shelves: [Shelf]\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype Shelf {\n  id: ID!\n  user: User\n  name: String!\n  displays: [Display]\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype Profile {\n  id: ID!\n  username: String!\n  age: Int\n  gender: Gender\n  bio: String\n  interests: String\n  favoriteBook: String\n  createdAt: String!\n  updatedAt: String!\n}\n\nenum Gender {\n  Male\n  Female\n}\n\ntype Tag {\n  id: ID!\n  quotes: [Quote]\n  term: String!\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype Comment {\n  id: ID!\n  book: Book\n  text: String!\n  createdAt: String!\n  updatedAt: String!\n}\n\nscalar Upload\n\ntype Query {\n  uploads: [File]\n  search(keyword: String!): [SearchResult]\n  getAuthors(gerne: String): [Author]!\n  getBooks(gerne: String, random: Boolean): [Book!]!\n  getDisplays: [Display]!\n  getShelves: [Shelf]!\n  getUser(userId: ID!): User!\n}\n\ntype File {\n  filename: String\n  mimetype: String\n  encoding: String\n}\n\nunion SearchResult = User | Book | Author\n\ntype Mutation {\n  addAuthor(name: String!, born: String, died: String, gernes: [String], description: String, photo: String): Author!\n  addBook(title: String!, authors: [String!]!, gernes: [String], thumbnail: String!, contents: String!, datetime: String, isbn: String!, price: Int, publisher: String, saleStatus: String): Book!\n  rateBook(bookId: ID!, count: Int!): Rating!\n  commentBook(bookId: ID!, text: String!): Comment!\n  deleteComment(commentId: ID!): Boolean\n  addToShelf(shelfName: String!, bookId: ID!): Display!\n  subFromShelf(shelfName: String!, bookId: ID!): Display!\n  multipleUpload(files: [Upload!]!): [File!]!\n  singleUpload(file: Upload!): String!\n  addQuote(term: String!, tags: [String], authorId: ID!): Quote!\n  deleteQuote(quoteId: ID!): Quote!\n  createShelf(name: String!): Shelf!\n  deleteShelf(shelfId: ID!): Shelf!\n  editShelf(shelfId: ID!, name: String!): Shelf!\n  createUser(email: String!, password: String!, username: String!): User!\n  deleteUser: User!\n  login(email: String!, password: String!): String!\n}\n"];
/* tslint:disable */

export interface Query {
  uploads: Array<File> | null;
  search: Array<SearchResult> | null;
  getAuthors: Array<Author>;
  getBooks: Array<Book>;
  getDisplays: Array<Display>;
  getShelves: Array<Shelf>;
  getUser: User;
}

export interface SearchQueryArgs {
  keyword: string;
}

export interface GetAuthorsQueryArgs {
  gerne: string | null;
}

export interface GetBooksQueryArgs {
  gerne: string | null;
  random: boolean | null;
}

export interface GetUserQueryArgs {
  userId: string;
}

export interface File {
  filename: string | null;
  mimetype: string | null;
  encoding: string | null;
}

export type SearchResult = User | Book | Author;

export interface User {
  id: string;
  email: string;
  password: string;
  username: string;
  profilePhoto: string;
  profile: Profile | null;
  isAdmin: boolean | null;
  ratings: Array<Rating>;
  ratingBooks: Array<Book> | null;
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
  totalRating: number;
  ratedUserNum: number;
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
  photo: string | null;
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

export interface Display {
  id: string;
  user: User | null;
  book: Book | null;
  shelves: Array<Shelf> | null;
  createdAt: string;
  updatedAt: string;
}

export interface Mutation {
  addAuthor: Author;
  addBook: Book;
  rateBook: Rating;
  commentBook: Comment;
  deleteComment: boolean | null;
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

export interface AddAuthorMutationArgs {
  name: string;
  born: string | null;
  died: string | null;
  gernes: Array<string> | null;
  description: string | null;
  photo: string | null;
}

export interface AddBookMutationArgs {
  title: string;
  authors: Array<string>;
  gernes: Array<string> | null;
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
  count: number;
}

export interface CommentBookMutationArgs {
  bookId: string;
  text: string;
}

export interface DeleteCommentMutationArgs {
  commentId: string;
}

export interface AddToShelfMutationArgs {
  shelfName: string;
  bookId: string;
}

export interface SubFromShelfMutationArgs {
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
