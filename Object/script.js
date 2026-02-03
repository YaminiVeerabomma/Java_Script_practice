let title = "javascript_book";
let price = 200;
let noOfpages = 250;
let author = "suresh Tech";

let title1 = "python_book";
let price1 = 100;
let noOfpages1 = 200;
let author1 = "suresh Tech";
console.log(title);
//in above we descalre every tym so using class it is easy to handle bcoz no need to write every tym

// class BooK {
//   constructor(title, price, noOfpages, author) {
//     this.title = title;
//     this.price = price;
//     this.noOfpages = noOfpages;
//     this.author = author;
//   }
// }
// let jsBook = new BooK("javascript_book", 200, 250, "suresh Tech");
// console.log(jsBook);
// //we can create n number of book we no need to declare num of tymes using class this is the benfit
// let pythonBook = new BooK("python_book", 200, 250, "suresh Tech");
// console.log(pythonBook);
// //we can access the specific book detail are any other related book details
// console.log(jsBook.author);
// console.log(pythonBook.title);
//in above details author should not be changed so we can make it static only for author
class BooK {
  static author = "suresh Tech";
  constructor(title, price, noOfpages) {
    this.title = title;
    this.price = price;
    this.noOfpages = noOfpages;
  }
  //in case update price
  Updateprice(newPrice) {
    this.price = newPrice;
  }
}
let jsBook = new BooK("javascript_book", 200, 250);
console.log(jsBook);
//we can create n number of book we no need to declare num of tymes using class this is the benfit
let pythonBook = new BooK("python_book", 200, 250);
console.log(pythonBook);
//we can access the specific book detail are any other related book details
console.log(jsBook.author);
console.log(pythonBook.title);
console.log(jsBook.price);
//print updates the price
jsBook.Updateprice(250);
console.log("updateted price", jsBook.price);
//how to access static vairble using class
console.log(BooK.author);
