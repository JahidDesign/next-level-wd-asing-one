# TypeScript Assignment – Problem Solving & Blog (Bangla)

আমি এই অ্যাসাইনমেন্টে TypeScript-এর ৮টি সমস্যা সমাধান করেছি এবং দুটি ইন্টারভিউ-স্ট্যান্ডার্ড ব্লগ লিখেছি বাংলায়। এখানে সবকিছু এক ফাইলে দেওয়া হলো—README, Blog, solution.ts, index.ts এবং test.ts সহ।

--------------------------------------------------------------------------------

আমি Problem 1–8 প্রতিটিকে TypeScript-এর সঠিক টাইপিং, union type, interface, narrowing এবং array method ব্যবহার করে সমাধান করেছি। প্রতিটি ফাংশনের রিটার্ন ভ্যালু sample output অনুযায়ী লেখা হয়েছে।

১) প্রথম সমস্যায় আমি formatValue লিখেছি যা string হলে uppercase রিটার্ন করে, number হলে ১০ গুণ রিটার্ন করে এবং boolean হলে true/false উল্টো করে রিটার্ন করে।

২) দ্বিতীয় সমস্যায় getLength ফাংশন string অথবা array যেটাই দেওয়া হোক length রিটার্ন করে।

৩) তৃতীয় সমস্যায় Person ক্লাস তৈরি করেছি যার getDetails() ফাংশন ঠিক "Name: X, Age: Y" এই ফরম্যাটে রিটার্ন করে।

৪) filterByRating ব্যবহার করে rating ≥ 4 এমন item গুলো ফিল্টার করা হয়েছে।

৫) filterActiveUsers শুধু active user গুলো নতুন অ্যারেতে রিটার্ন করে।

৬) Book interface এর সাহায্যে বইয়ের তথ্য সঠিক ফরম্যাটে রিটার্ন করা হয়েছে।

৭) getUniqueValues কোনো built-in method ছাড়া manually duplicate ছাড়া unique value merge করে।

৮) calculateTotalPrice প্রতিটি product-এর price × quantity হিসাব করে discount থাকলে তা বাদ দিয়ে মোট দাম বের করে।

--------------------------------------------------------------------------------

Blog: TypeScript Concepts Explained (Bangla)

১) interface এবং type এর মধ্যে পার্থক্য  
TypeScript-এ interface এবং type দুইটাই কাস্টম টাইপ বানাতে ব্যবহার হয়।  
interface object-এর কাঠামো বর্ণনা করতে বেশি উপযোগী এবং extends ব্যবহার করে বাড়ানো যায়। একই নামে আবার interface লিখলে declaration merging হয়।  
type এর flexibility বেশি, কারণ union type, primitive alias, tuple, template literal সবকিছু type দিয়ে করা যায়। তবে type declaration merge হয় না।

২) any, unknown এবং never এর পার্থক্য  
any সবচেয়ে কম নিরাপদ, কারণ এতে TypeScript টাইপ চেক করা বন্ধ করে দেয়। unknown হলো safer versión, এতে মান রাখা যায় কিন্তু ব্যবহার করার সময় টাইপ চেক করতে হয়। never ব্যবহার হয় এমন ফাংশনের ক্ষেত্রে যেটা কখনো return করে না, যেমন error throw করে বা infinite loop।

--------------------------------------------------------------------------------

solution.ts

function formatValue(value: string | number | boolean): string | number | boolean {
  if (typeof value === "string") return value.toUpperCase();
  if (typeof value === "number") return value * 10;
  if (typeof value === "boolean") return !value;
  throw new Error("Unsupported type");
}

function getLength(value: string | any[]): number {
  if (typeof value === "string") return value.length;
  if (Array.isArray(value)) return value.length;
  throw new Error("Invalid type");
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

type Item = { title: string; rating: number };

function filterByRating(items: Item[]): Item[] {
  return items.filter(item => item.rating >= 4);
}

type User = { id: number; name: string; email: string; isActive: boolean };

function filterActiveUsers(users: User[]): User[] {
  return users.filter(user => user.isActive);
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): string {
  const availability = book.isAvailable ? "Yes" : "No";
  return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`;
}

function exists(arr: (string | number)[], value: string | number): boolean {
  for (let i = 0; i < arr.length; i++) if (arr[i] === value) return true;
  return false;
}

function getUniqueValues(
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] {
  const result: (string | number)[] = [];
  for (let i = 0; i < arr1.length; i++) if (!exists(result, arr1[i])) result.push(arr1[i]);
  for (let i = 0; i < arr2.length; i++) if (!exists(result, arr2[i])) result.push(arr2[i]);
  return result;
}

type Product = { name: string; price: number; quantity: number; discount?: number };

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) return 0;

  return products
    .map(product => {
      const base = product.price * product.quantity;
      if (product.discount !== undefined) {
        return base - base * (product.discount / 100);
      }
      return base;
    })
    .reduce((sum, value) => sum + value, 0);
}

--------------------------------------------------------------------------------

test.ts

console.log(formatValue("hello"));
console.log(formatValue(5));
console.log(formatValue(true));

console.log(getLength("typescript"));
console.log(getLength([10, 20, 30]));

const p = new Person("John Doe", 30);
console.log(p.getDetails());

console.log(filterByRating([
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.0 }
]));

console.log(filterActiveUsers([
  { id: 1, name: "Rakib", email: "a@a.com", isActive: true },
  { id: 2, name: "Asha", email: "b@b.com", isActive: false }
]));

console.log(printBookDetails({
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true
}));

console.log(getUniqueValues([1, 2, 3], [3, 4, 5]));

console.log(calculateTotalPrice([
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 1, discount: 10 }
]));

--------------------------------------------------------------------------------

index.ts

export * from "./solution";

--------------------------------------------------------------------------------
