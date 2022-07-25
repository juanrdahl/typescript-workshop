interface LanguageEnum {
  SPANISH: "ES";
  ENGLISH: "EN";
  FRENCH: "FR";
  GERMAN: "DE";
}

interface Book {
  id: string;
  // autor: User;
  authorId: string;
  title: string;
  description: string;
  price: number;
  language: LanguageEnum;
}

type CreateBook = Book;

type UpdateBook = MyPartialTypeForEdit<Book>;

// interface UpdateBook extends Partial<Omit<Book, 'id'>> {
//     id: string;
// };
