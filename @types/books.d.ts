interface LanguageEnum {
  SPANISH: "ES";
  ENGLISH: "EN";
  FRENCH: "FR";
  GERMAN: "DE";
}

interface Book {
  id: string;
  authorId: string;
  title: string;
  description: string;
  price: number;
  language: LanguageEnum;
}

type CreateBook = Book;

type UpdateBook = MyPartialTypeForEdit<Book>;
