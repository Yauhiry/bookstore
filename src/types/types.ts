export interface Book {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}

export interface BookDetails {
  error: string;
  title: string;
  subtitle: string;
  authors: string;
  publisher: string;
  language: string;
  isbn10: string;
  isbn13: string;
  pages: string;
  year: string;
  rating: string;
  desc: string;
  price: string;
  image: string;
  url: string;
  pdf: Pdf;
}

interface Pdf {
  [chapter: string]: string;
}

export interface ResponseBooks {
  books: Book[];
  error: string;
  total: string;
  page: string;
}

export interface FormValue {
  [name: string]: string;
}

export type Theme = "light" | "dark";
