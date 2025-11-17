import {
  formatValue,
  getLength,
  Person,
  filterByRating,
  filterActiveUsers,
  printBookDetails,
  getUniqueValues,
  calculateTotalPrice,
  Item,
  User,
  Book,
  Product
} from "./solution";


// ===============================
// Problem 1 Test
// ===============================
console.log(formatValue("hello"));
console.log(formatValue(5));
console.log(formatValue(true));


// ===============================
// Problem 2 Test
// ===============================
console.log(getLength("typescript"));
console.log(getLength([10, 20, 30, 40]));


// ===============================
// Problem 3 Test
// ===============================
const person1 = new Person("John Doe", 30);
console.log(person1.getDetails());

const person2 = new Person("Alice", 25);
console.log(person2.getDetails());


// ===============================
// Problem 4 Test
// ===============================
const books: Item[] = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

console.log(filterByRating(books));


// ===============================
// Problem 5 Test
// ===============================
const users: User[] = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

console.log(filterActiveUsers(users));


// ===============================
// Problem 6 Test
// ===============================
const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true,
};

console.log(printBookDetails(myBook));


// ===============================
// Problem 7 Test
// ===============================
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

console.log(getUniqueValues(array1, array2));


// ===============================
// Problem 8 Test
// ===============================
const products: Product[] = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));
