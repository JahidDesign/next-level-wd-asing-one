

export function formatValue(value: string | number | boolean): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  if (typeof value === "number") {
    return value * 10;
  }
  if (typeof value === "boolean") {
    return !value;
  }

  throw new Error("Unsupported type");
}




export function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;
  }
  if (Array.isArray(value)) {
    return value.length;
  }

  throw new Error("Invalid type");
}




export class Person {
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




export type Item = {
  title: string;
  rating: number;
};

export function filterByRating(items: Item[]): Item[] {
  return items.filter(item => item.rating >= 4);
}




export type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

export function filterActiveUsers(users: User[]): User[] {
  return users.filter(user => user.isActive);
}




export interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

export function printBookDetails(book: Book): string {
  const availability = book.isAvailable ? "Yes" : "No";
  return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`;
}




function exists(arr: (string | number)[], value: string | number): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return true;
  }
  return false;
}

export function getUniqueValues(
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] {

  const result: (string | number)[] = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!exists(result, arr1[i])) {
      result.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!exists(result, arr2[i])) {
      result.push(arr2[i]);
    }
  }

  return result;
}




export type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

export function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) return 0;

  return products
    .map(product => {
      const base = product.price * product.quantity;

      if (product.discount) {
        const discountAmount = base * (product.discount / 100);
        return base - discountAmount;
      }

      return base;
    })
    .reduce((total, value) => total + value, 0);
}
