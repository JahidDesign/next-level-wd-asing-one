type Formattable = string | number | boolean;

function formatValue(value: Formattable): Formattable {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
}

function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;
  }

  if (Array.isArray(value)) {
    return value.length;
  }

  return 0;
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

type RatedItem = {
  title: string;
  rating: number;
};

function filterByRating(items: RatedItem[]): RatedItem[] {
  const result: RatedItem[] = [];

  for (let i = 0; i < items.length; i++) {
    if (items[i].rating >= 4) {
      result.push(items[i]);
    }
  }

  return result;
}

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: User[]): User[] {
  const activeUsers: User[] = [];

  for (let i = 0; i < users.length; i++) {
    if (users[i].isActive) {
      activeUsers.push(users[i]);
    }
  }

  return activeUsers;
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): string {
  const availabilityText = book.isAvailable ? "Yes" : "No";
  return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availabilityText}`;
}

function getUniqueValues<T extends string | number>(
  firstArray: T[],
  secondArray: T[]
): T[] {
  const uniqueValues: T[] = [];

  const addIfNotExists = (value: T): void => {
    let found = false;

    for (let i = 0; i < uniqueValues.length; i++) {
      if (uniqueValues[i] === value) {
        found = true;
        break;
      }
    }

    if (!found) {
      uniqueValues[uniqueValues.length] = value;
    }
  };

  for (let i = 0; i < firstArray.length; i++) {
    addIfNotExists(firstArray[i]);
  }

  for (let i = 0; i < secondArray.length; i++) {
    addIfNotExists(secondArray[i]);
  }

  return uniqueValues;
}

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

function calculateTotalPrice(products: Product[]): number {
  return products.reduce((total, product) => {
    const basePrice = product.price * product.quantity;
    const discountValue =
      product.discount !== undefined ? (basePrice * product.discount) / 100 : 0;
    const finalPrice = basePrice - discountValue;
    return total + finalPrice;
  }, 0);
}

/* ------------------------------
   Console Log Test Section
--------------------------------*/

console.log(formatValue("hello"));
console.log(formatValue(5));
console.log(formatValue(true));

console.log(getLength("typescript"));
console.log(getLength([10, 20, 30, 40]));

const p1 = new Person("John Doe", 30);
console.log(p1.getDetails());

const p2 = new Person("Alice", 25);
console.log(p2.getDetails());

const items = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];
console.log(filterByRating(items));

const users = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];
console.log(filterActiveUsers(users));

const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true,
};
console.log(printBookDetails(myBook));

console.log(getUniqueValues([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

const products = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];
console.log(calculateTotalPrice(products));
