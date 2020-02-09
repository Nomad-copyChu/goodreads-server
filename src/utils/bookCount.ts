import { prisma } from "../generated/prisma-client";

export const addBookCount = (book, shelfName) => {
  if (shelfName === "want") {
    prisma.updateBook({
      where: { id: book.id },
      data: { wantCount: book.wantCount + 1 }
    });
  }
  if (shelfName === "reading") {
    prisma.updateBook({
      where: { id: book.id },
      data: { wantCount: book.readingCount + 1 }
    });
  }
  if (shelfName === "read") {
    prisma.updateBook({
      where: { id: book.id },
      data: { wantCount: book.readCount + 1 }
    });
  }
};
export const subBookCount = (book, shelfName) => {
  if (shelfName === "want") {
    prisma.updateBook({
      where: { id: book.id },
      data: { wantCount: book.wantCount - 1 }
    });
  }
  if (shelfName === "reading") {
    prisma.updateBook({
      where: { id: book.id },
      data: { wantCount: book.readingCount - 1 }
    });
  }
  if (shelfName === "read") {
    prisma.updateBook({
      where: { id: book.id },
      data: { wantCount: book.readCount - 1 }
    });
  }
};
