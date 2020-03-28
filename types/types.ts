export const typeDefs = [
  "type Book {\n  id: ID!\n  title: String!\n  authors: [Author!]!\n  thumbnail: String!\n  contents: String\n  datetime: String\n  isbn: String!\n  price: Int\n  publisher: String\n  saleStatus: String\n  wantCount: Int!\n  readingCount: Int!\n  readCount: Int!\n  comments: [Comment!]\n  gernes: [Gerne!]\n  totalRating: Float!\n  ratedUserNum: Int!\n  avgRating: Float!\n  addUser: User\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype Author {\n  id: ID!\n  name: String!\n  born: String\n  died: String\n  gernes: [Gerne!]\n  description: String\n  photo: String\n  books: [Book!]\n  quotes: [Quote!]\n  comments: [AuthorComment!]\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype Gerne {\n  id: ID!\n  term: String!\n  books: [Book!]\n  authors: [Author!]\n  booksCount: Int!\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype Quote {\n  id: ID!\n  term: String\n  author: Author\n  tags: [Tag!]\n  likesCount: Int\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype User {\n  id: ID!\n  email: String!\n  password: String!\n  username: String!\n  profilePhoto: String!\n  profile: Profile\n  isAdmin: Boolean\n  ratings: [Rating!]\n  ratingBooks: [Book]\n  bookAvgRating: String\n  bookComments: [Comment]\n  shelves: [Shelf]\n  likeQuotes: [Quote]\n  displays: [Display]\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype Rating {\n  id: ID!\n  user: User!\n  book: Book!\n  count: Float!\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype Display {\n  id: ID!\n  user: User\n  book: Book\n  shelves: [Shelf]\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype Shelf {\n  id: ID!\n  user: User\n  name: String!\n  displays: [Display]\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype Profile {\n  id: ID!\n  user: User!\n  age: Int\n  gender: Gender\n  bio: String\n  interests: String\n  favoriteBook: String\n  createdAt: String!\n  updatedAt: String!\n}\n\nenum Gender {\n  MALE\n  FEMALE\n}\n\ntype Tag {\n  id: ID!\n  quotes: [Quote]\n  term: String!\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype Comment {\n  id: ID!\n  user: User\n  book: Book\n  text: String!\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype AuthorComment {\n  id: ID!\n  author: Author\n  user: User\n  text: String!\n  createdAt: String!\n  updatedAt: String!\n}\n\nscalar Upload\n\ntype Query {\n  uploads: [File]\n  search(keyword: String!): [SearchResult]\n  getAuthor(id: ID!): Author\n  getAuthorTwo: [Author]\n  getAuthors(gerne: String): [Author]!\n  getAuthorsWithName(authors: [String!]!): [getAuthorsWithNameResponse]\n  getBook(id: ID!): Book!\n  getBooks(gerne: String, random: Boolean): [Book!]!\n  getDisplays: [Display]!\n  getGernes: [Gerne]\n  getQuotes: [Quote]\n  checkRating(bookId: ID!): Rating\n  getShelves: [Shelf]!\n  getUser: User\n}\n\ntype File {\n  filename: String\n  mimetype: String\n  encoding: String\n}\n\nunion SearchResult = User | Book | Author\n\ntype Mutation {\n  editProfile(age: Int, gender: Gender, bio: String, interests: String, favoriteBook: String): Profile!\n  addAuthor(name: String!, born: String, died: String, gernes: [String], description: String, photo: String): Author!\n  editAuthor(authorId: ID!, editAuthorArgs: EditAuthorArgs): Author\n  addBook(bookInfos: AddBookInfos, authors: [addBookAuthorInfos]): Book!\n  deleteBook(bookId: ID!): Book!\n  commentAuthor(authorId: ID!, text: String!): AuthorComment\n  commentBook(bookId: ID!, text: String!): Comment!\n  deleteComment(commentId: ID!): Boolean\n  addToShelf(shelfName: String!, bookId: ID!): Display!\n  subFromShelf(shelfName: String!, bookId: ID!): Display!\n  multipleUpload(files: [Upload!]!): [File!]!\n  singleUpload(file: Upload!): String!\n  addQuote(term: String!, tags: [String], authorName: String!): Quote!\n  deleteQuote(quoteId: ID!): Quote!\n  rateBook(bookId: ID!, count: Float!): Rating!\n  createShelf(name: String!): Shelf!\n  deleteShelf(shelfId: ID!): Shelf!\n  editShelf(shelfId: ID!, name: String!): Shelf!\n  createUser(email: String!, password: String!, username: String!): String!\n  deleteUser: User!\n  githubLogin(code: String): GithubLoginResponse!\n  login(email: String!, password: String!): String!\n}\n\ninput EditAuthorArgs {\n  name: String\n  born: String\n  died: String\n  gernes: [String!]\n  description: String\n}\n\ntype getAuthorsWithNameResponse {\n  name: String!\n  description: String\n  photo: String\n}\n\ninput AddBookInfos {\n  title: String!\n  gernes: [String]\n  thumbnail: String!\n  contents: String!\n  datetime: String\n  isbn: String!\n  price: Int\n  publisher: String\n  saleStatus: String\n}\n\ninput addBookAuthorInfos {\n  name: String!\n  description: String\n  photo: String\n}\n\ntype GithubLoginResponse {\n  token: String!\n  isFirst: Boolean!\n}\n"
];
/* tslint:disable */

export interface Query {
  uploads: Array<File> | null;
  search: Array<SearchResult> | null;
  getAuthor: Author | null;
  getAuthorTwo: Array<Author> | null;
  getAuthors: Array<Author>;
  getAuthorsWithName: Array<getAuthorsWithNameResponse> | null;
  getBook: Book;
  getBooks: Array<Book>;
  getDisplays: Array<Display>;
  getGernes: Array<Gerne> | null;
  getQuotes: Array<Quote> | null;
  checkRating: Rating | null;
  getShelves: Array<Shelf>;
  getUser: User | null;
}

export interface SearchQueryArgs {
  keyword: string;
}

export interface GetAuthorQueryArgs {
  id: string;
}

export interface GetAuthorsQueryArgs {
  gerne: string | null;
}

export interface GetAuthorsWithNameQueryArgs {
  authors: Array<string>;
}

export interface GetBookQueryArgs {
  id: string;
}

export interface GetBooksQueryArgs {
  gerne: string | null;
  random: boolean | null;
}

export interface CheckRatingQueryArgs {
  bookId: string;
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
  bookAvgRating: string | null;
  bookComments: Array<Comment> | null;
  shelves: Array<Shelf> | null;
  likeQuotes: Array<Quote> | null;
  displays: Array<Display> | null;
  createdAt: string;
  updatedAt: string;
}

export interface Profile {
  id: string;
  user: User;
  age: number | null;
  gender: Gender | null;
  bio: string | null;
  interests: string | null;
  favoriteBook: string | null;
  createdAt: string;
  updatedAt: string;
}

export type Gender = "MALE" | "FEMALE";

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
  saleStatus: string | null;
  wantCount: number;
  readingCount: number;
  readCount: number;
  comments: Array<Comment>;
  gernes: Array<Gerne>;
  totalRating: number;
  ratedUserNum: number;
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
  photo: string | null;
  books: Array<Book>;
  quotes: Array<Quote>;
  comments: Array<AuthorComment>;
  createdAt: string;
  updatedAt: string;
}

export interface Gerne {
  id: string;
  term: string;
  books: Array<Book>;
  authors: Array<Author>;
  booksCount: number;
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

export interface AuthorComment {
  id: string;
  author: Author | null;
  user: User | null;
  text: string;
  createdAt: string;
  updatedAt: string;
}

export interface Comment {
  id: string;
  user: User | null;
  book: Book | null;
  text: string;
  createdAt: string;
  updatedAt: string;
}

export interface Shelf {
  id: string;
  user: User | null;
  name: string;
  displays: Display[] | null;
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

export interface getAuthorsWithNameResponse {
  name: string;
  description: string | null;
  photo: string | null;
}

export interface Mutation {
  editProfile: Profile;
  addAuthor: Author;
  editAuthor: Author | null;
  addBook: Book;
  deleteBook: Book;
  commentAuthor: AuthorComment | null;
  commentBook: Comment;
  deleteComment: boolean | null;
  addToShelf: Display;
  subFromShelf: Display;
  multipleUpload: Array<File>;
  singleUpload: string;
  addQuote: Quote;
  deleteQuote: Quote;
  rateBook: Rating;
  createShelf: Shelf;
  deleteShelf: Shelf;
  editShelf: Shelf;
  createUser: string;
  deleteUser: User;
  githubLogin: GithubLoginResponse;
  login: string;
}

export interface EditProfileMutationArgs {
  age: number | null;
  gender: Gender | null;
  bio: string | null;
  interests: string | null;
  favoriteBook: string | null;
}

export interface AddAuthorMutationArgs {
  name: string;
  born: string | null;
  died: string | null;
  gernes: Array<string> | null;
  description: string | null;
  photo: string | null;
}

export interface EditAuthorMutationArgs {
  authorId: string;
  editAuthorArgs: EditAuthorArgs | null;
}

export interface AddBookMutationArgs {
  bookInfos: AddBookInfos | null;
  authors: Array<addBookAuthorInfos> | null;
}

export interface DeleteBookMutationArgs {
  bookId: string;
}

export interface CommentAuthorMutationArgs {
  authorId: string;
  text: string;
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
  authorName: string;
}

export interface DeleteQuoteMutationArgs {
  quoteId: string;
}

export interface RateBookMutationArgs {
  bookId: string;
  count: number;
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

export interface GithubLoginMutationArgs {
  code: string | null;
}

export interface LoginMutationArgs {
  email: string;
  password: string;
}

export interface EditAuthorArgs {
  name: string | null;
  born: string | null;
  died: string | null;
  gernes: Array<string>;
  description: string | null;
}

export interface AddBookInfos {
  title: string;
  gernes: Array<string> | null;
  thumbnail: string;
  contents: string;
  datetime: string | null;
  isbn: string;
  price: number | null;
  publisher: string | null;
  saleStatus: string | null;
}

export interface addBookAuthorInfos {
  name: string;
  description: string | null;
  photo: string | null;
}

export type Upload = any;

export interface GithubLoginResponse {
  token: string;
  isFirst: boolean;
}
