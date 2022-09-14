// 1. Show me how to calculate the average price of all items. Please `console.log` the average.
// ``` ///.map then .reduce// can chain these together if I want.
// The average price is $23.63
// ```

const itemAvg = (arr, str) => arr.map(str==='price'? val=>val[str]:val=>0).reduce((sum,val)=>sum+val,0)/arr.length;
//               looking for arr.. if str is price, else val's str will return/else arr w/ sum,val returns sum + value(0)first item,
console.log(itemAvg(items,'price'));            // the first item(0).//                  divided by length (amount of 'price'(s))

// 2. Show me how to get an array of items that cost between $14.00 and $18.00 USD. Please `console.log` the answer.
// ```
const glasses = (arr, str) => arr.map(str==='price'? val=>val[str]:val=>0).filter(function(num) {
    return (num >= 14.00 && num <= 18.00) 
        console.log(glasses(items,'price'));
    });
//instead of string price, return titles. want map array to just save the title and the price.
//then filter by the price.
const itemName = (arr, words) => arr.map(words==='title'? val=>val[words]:val=>0).filter(function(num){
    return (price >= 14.00 && price <= 18.00);
});
(function(item){
    console.log((item.title));
});

// .filter
// filter out what is below 14.00 and above 18.00.
// "Items that cost between $14.00 USD and $18.00 USD:"
//   [
//    {
//       title: "1970s Coors Banquet Glass Beer Pitcher",
//       ...
//    },
//    {
//       title: "The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug",
//       ...
//    },
//    {
//       title: "Hand Painted Colorful Feather Glass",
//       ...
//    },
//    {
//       title: "Groomsman Gifts - Bottle Opener Credit Card Sized PERSONALIZED - FREE SHIPPING",
//       ...
//    }
//   ]  


// 3. Show me how find the item with a "GBP" currency code and print its name and price. Please `console.log` the one you find. 
// .filter /// .forEach
// ```
// 1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18

const currencyType = items.filter(function (item) {
    return item.currency_code === "GBP";
  });
  
  currencyType.forEach(function (item) {
    console.log(item.title, "costs £", item.price);
  });

//   4. Show me how to find which items are made of wood. Please `console.log` the ones you find.
// ```
// SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.
// Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.
// Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.
// Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.
// Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood.

const materialType = items.filter(function (item) {
    return item.materials.includes("wood");
  });
  
  materialType.forEach(function (item) {
    console.log(item.title, "is made of wood");
  });

//   5. Show me how to find which items are made of eight or more materials. Please `console.log` the ones you find.
// ```
// Qty of 2 Groomsmen Gift - Stainless Steel Personalized Bottle Opener - NO Capcatcher has 9 materials:

// wall mount bottle opener
// wedding
// man cave
// christmas gift
// guy gift
// fathers day
// home bar
// beer
// bar

// The Three Broomsticks Customizable Beer Stein Mug, Harry Potter  Inspired, hogsmeade village, harry potter gift, three broomsticks mug  has 13 materials:

// glass
// sandblast cabinet
// vinyl
// beer glass
// pint glass
// etched pint glass
// etched glass
// etched beer glass
// 16 oz pint
// beer gift
// etched harry potter glass
// the three broomsticks glass
// personalized harry potter glass  
// ```

const matAmount = items.filter(function (item) {
    return item.materials.length >= 8;
  });
  
  matAmount.forEach(function (item) {
    console.log(
      item.title,
      "has",
      item.materials.length,
      "materials",
      item.materials
    );
  });

//   6. Show me how to calculate how many items were made by their sellers. Please `console.log` your answer.
// ```
// 18 were made by their sellers

// const selfMade = (arr, str) => arr.map(str==='who_made'? val=>val[str]:val=>'i_did').filter(function(item){
//     console.log(selfMade(items, 'who_made'));
// });


//const itemAvg = (arr, str) => arr.map(str==='price'? val=>val[str]:val=>0).reduce((sum,val)=>sum+val,0)/arr.length;


const madeBy = items.filter(function (item) {
    return item.who_made === "i_did";
  });
  
  console.log(`${madeBy.length} were made by their sellers`);