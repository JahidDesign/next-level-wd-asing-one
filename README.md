# 🌟 TypeScript Assignment — Problem Solving & Technical Blog (Bangla)

আমি এই প্রজেক্টে TypeScript-এর **৮টি সমস্যা সমাধান করেছি**,  
সাথে লিখেছি **দুটি ইন্টারভিউ-স্ট্যান্ডার্ড TypeScript ব্লগ (বাংলায়)**।

সমস্ত কোড clean, readable এবং exact output formatting অনুসরণ করে লেখা।

---

## 📁 Project Structure (One File Version)

এই এক ফাইলেই সব কিছু দেওয়া হলো:

✔ README  
✔ Blog  
✔ solution.ts  
✔ test.ts  
✔ index.ts  

---

# 🧩 Problem Overview (My Summary)

### ✔ Problem 1  
string → uppercase  
number → *10  
boolean → !value  

### ✔ Problem 2  
string বা array → length return

### ✔ Problem 3  
Person ক্লাস → getDetails(): `"Name: X, Age: Y"`

### ✔ Problem 4  
rating ≥ 4 filter

### ✔ Problem 5  
isActive === true user list return

### ✔ Problem 6  
Book interface + formatted return

### ✔ Problem 7  
unique merge without built-in methods

### ✔ Problem 8  
price × quantity + discount total

---

# ✍️ Technical Blog (বাংলায়)

## ⭐ ১) interface vs type (আমার ব্যাখ্যা)

interface ও type — দুটোই object shape define করে, তবে কিছু গুরুত্বপূর্ণ পার্থক্য আছে।

### 🔹 Inheritance

```ts
interface User { name: string; age: number; }
interface Admin extends User { role: string; }
```

```ts
type UserT = { name: string; age: number };
type AdminT = UserT & { role: string };
```

### 🔹 Declaration Merging (interface only)

```ts
interface A { name: string }
interface A { age: number }
```

type এ error.

### 🔹 type বেশি flexible

```ts
type ID = string | number;
```

### 🔥 সারসংক্ষেপ

| বিষয় | interface | type |
|------|-----------|------|
| extends | ✔ | ✔ (& দিয়ে) |
| merge | ✔ | ✖ |
| union | ✖ | ✔ |
| flexibility | কম | বেশি |

---

## ⭐ ২) any, unknown, never (আমার ব্যাখ্যা)

### 🔹 any — unsafe  
TypeScript check বন্ধ।

### 🔹 unknown — safer any  
ব্যবহার করতে type-check লাগে।

### 🔹 never — return করে না  

```ts
function boom(): never { throw new Error(); }
```

---

# 🧾 FULL CODE — solution.ts

```ts
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
```

---

# 🧪 FULL CODE — test.ts

```ts
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
```

---

# ▶ FULL CODE — index.ts

```ts
export * from "./solution";
```



