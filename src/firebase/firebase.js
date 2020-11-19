import * as firebase from 'firebase';
// the data can only be fetched once it is termied as true inside the rules in the firebase 
var Config = {
  apiKey: "AIzaSyBUC0qR1Vx-ou-Y4FHJ01wSnnu3-IDaLsc",
  authDomain: "budgetlogger-baeaa.firebaseapp.com",
  databaseURL: "https://budgetlogger-baeaa.firebaseio.com",
  projectId: "budgetlogger-baeaa",
  storageBucket: "budgetlogger-baeaa.appspot.com",
  messagingSenderId: "386122861792",
  appId: "1:386122861792:web:b87bf528ff9e063a1e9485",
  measurementId: "G-49SW6BP9QM"
};
// Initialize Firebase
firebase.initializeApp(Config);
const database = firebase.database()

export {firebase,database as default} ;











// database.ref('expense').push({
//   description:'Milk',
//   createdAt:'1234',
//   amount:990,
//   note:''

// })
//fetch the data,
// database.ref('expense')
// .once('value')
// .then((snapshot)=>{
// const expenses=[];
// snapshot.forEach((childSnapshot)=>{
// expenses.push({
//   id: childSnapshot.key,
//   ...childSnapshot.val()

// });
// });
// console.log(expenses)
// });
// })
// subscribe to the changes 
// database.ref().on('value',(snapshot)=>{

//   const expenses=[];
//   snapshot.forEach((childSnapshot)=>{
//   expenses.push({
//     id: childSnapshot.key,
//     ...childSnapshot.val()

//   });
//   });
//   console.log(expenses)
//   });

  // track the removal of any child nodes
//   database.ref().on('child_removed',(snapshot)=>{
//     console.log(snapshot.id,snapshot.val())
//   })

//   // track the change to the child nodes
//   database.ref().on('child_changed',(snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
//   })

// database.ref().on('child_added',(snapshot)=>{
//   console.log(snapshot.key, snapshot.val());
// })

// push the data into the database every time the data is to be new to push inside the db
// database.ref('book').push({
//   title:'Harry Potter Part 2',
//   author:'JK Rowling'
// }
// )
// database.ref('book/-MMRKDJge8OqkRha56b-').update({
//   author:'JK ROWLING'
// })









// this is the dataset for the firebase 
// database.ref().set({
//   name:'vipul',
//   age:10,
//   location:{
//     area:'delhi',
//     pin:10002
//   },
//   attributes:{
//   height:100,
//   weight:78}
// }).then(()=>{
//   console.log('saved adad')
// }).catch((e)=>{
// console.log('error',e)
// })

// this will override the name  and set it to a new value 
// database.ref('name').set('Vipul dev');

// //add a new attribute 
// database.ref('attributes/weight').set('120')
// database.ref('attributes/color').set('black')

// removing of new data
// database.ref('age').remove().then(()=>{
// console.log(' the data is removed')
// }).catch((e)=>{
//   console.log('the data is not removed',e)
// })



//update the data
// database.ref().update({
// Job:'Software Developer',
// License:'JKG123',
// age:20,
// 'attributes/height':184,
// 'location/city':'Banglore',
// 'location/pin':9923,
// 'location/area':'Town'

// })

// this will update to the console every time the data changes in the database 
// const valueOnChange=database.ref()
// .on('value',(snapshot)=>{
// console.log(snapshot.val());
// })

// this is the call ot fetch from the database ;
// database.ref()
// .once('value')
// .then((snapshot)=>{
// const val = snapshot.val();
// console.log(val);
// }).catch((e)=>{
//   console.log('Cannot fetch sorry', e);
// })

// this is to fetch the data from the database 
// database.ref()
// .once('value',(snapshot)=>{
// const valueOfUser= snapshot.val();
// console.log(`The Details are  ${valueOfUser.name} he lives in ${valueOfUser.location.area}`)
// }).then(()=>{

// }).catch((e)=>{
// console.log('cannot do the ', e)
// })

