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
