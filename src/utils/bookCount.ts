import { prisma } from "../generated/prisma-client";

export const addBookCount = async (book, shelfName) => {
  if (shelfName === "want") {
    await prisma.updateBook({
      where: { id: book.id },
      data: { wantCount: book.wantCount + 1 }
    });
  }
  if (shelfName === "reading") {
    await prisma.updateBook({
      where: { id: book.id },
      data: { readingCount: book.readingCount + 1 }
    });
  }
  if (shelfName === "read") {
    await prisma.updateBook({
      where: { id: book.id },
      data: { readCount: book.readCount + 1 }
    });
  }
};
export const subBookCount = async (book, shelfName) => {
  if (shelfName === "want") {
    await prisma.updateBook({
      where: { id: book.id },
      data: { wantCount: book.wantCount - 1 }
    });
  }
  if (shelfName === "reading") {
    await prisma.updateBook({
      where: { id: book.id },
      data: { readingCount: book.readingCount - 1 }
    });
  }
  if (shelfName === "read") {
    await prisma.updateBook({
      where: { id: book.id },
      data: { readCount: book.readCount - 1 }
    });
  }
};
