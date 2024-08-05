// Practice
// object property shorthand

const name = 'Vincenzo';
const userAge = 32;

const user =  {
  name,
  age: userAge,
  location: 'Charlotte',
}

console.log(user);

// object destructuring

const product = {
  label: 'Red Notebook',
  price: 3,
  rating: 4.2,
  stock: 201,
  salePrice: undefined,
}

// const { label: productLabel, stock, rating = 5 } = product;

// console.log(productLabel);
// console.log(stock);
// console.log(rating);


const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
}

transaction('order', product);