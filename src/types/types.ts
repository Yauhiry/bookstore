export interface Book {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}

export interface CartBook extends BookDetails {
  amount: number;
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

export interface SignUpFormValues {
  name: string;
  email: string;
  newPassword: string;
  confirmPassword: string;
}

export interface SignInFormValues {
  email: string;
  password: string;
}

export interface PasswordResetFormValue {
  email: string;
}

export interface NewPasswordFormValue {
  newPassword: string;
  confirmPassword: string;
}

export interface AccountFormValue {
  name: string;
  email: string;
  password: string;
  newPassword: string;
  confirmPassword: string;
}

export interface SubscribeValue {
  email: string;
}

export interface SearchValue {
  searchValue: string;
}

export type Theme = "light" | "dark";
