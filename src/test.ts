// ----- Testing formatValue -----
console.log(formatValue("hello"));
console.log(formatValue(5));
console.log(formatValue(true));

// ----- Testing getLength -----
console.log(getLength("typescript"));
console.log(getLength([10, 20, 30, 40]));

// ----- Testing Person Class -----
const p1 = new Person("John Doe", 30);
console.log(p1.getDetails());

const p2 = new Person("Alice", 25);
console.log(p2.getDetails());

// ----- Testing filterByRating -----
const items = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];
console.log(filterByRating(items));

// ----- Testing filterActiveUsers -----
const users = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];
console.log(filterActiveUsers(users));

// ----- Testing printBookDetails -----
const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true,
};
console.log(printBookDetails(myBook));

// ----- Testing getUniqueValues -----
console.log(getUniqueValues([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

// ----- Testing calculateTotalPrice -----
const products = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];
console.log(calculateTotalPrice(products));
