// this is very helpfull for server rendering as we can fetch the data from the 
// server  and update the arrays and objects inside our program


const book ={
   title:'Ego is the Enemy',
   author :'Ryan Holiday',
   publisher:{
      name: 'Penguin'
   }
};
// this is called destruncturing of an object 
const {title} = book;
const {name:PublisherName='SelfPublisher'}= book.publisher;
console.log(`${title} is a book which is  publishd by ${PublisherName}`)

// this is for array destructuring
// array destrcturing allow us to pull items out of an array
const item =['Hot Coffee','3.0','4.0','5.0'];
const [Coffee,CostOfSmall,CostOfLarge,CostOfELarge] =item;
console.log(` The cost for a Large ${Coffee} is $${CostOfLarge} .`);
console.log(` The cost for a Small ${Coffee} is $${CostOfSmall}`);