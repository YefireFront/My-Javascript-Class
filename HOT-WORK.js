const dishData = [
    {
      name: "Italian pasta",
      price: 9.55
    },
   
    {
      name: "Chicken with potatoes",
      price: 15.55
    },
  
 
   
  ];
  const tax = 10.20;
 
  
  // Implement getPrices()
  function getPrices(taxBoolean) {
    for (let i = 0; i < dishData.length; i++) {
      let finalPrice;
      const dish = dishData[i];
  
      if (taxBoolean === true) {
        finalPrice = dish.price * tax;
      } else if (taxBoolean === false) {
        finalPrice = dish.price;
      } else {
        console.log("You need to pass a boolean to the getPrices call!");
        return;
      }
  
      console.log(`Dish: ${dish.name}, Price: $${finalPrice.toFixed(2)}`);
    }
  
    return "Function execution complete!";
  }
  
  // Implement getDiscount()
  function getDiscount(taxBoolean, guests) {
    getPrices(taxBoolean);
  
    if (typeof guests === 'number' && guests > 0 && guests < 30) {
      let discount = 0;
      if (guests < 5) {
        discount = 5;
      } else if (guests >= 5) {
        discount = 10;
      }
  
      console.log('Discount is: $' + discount);
    } else {
      console.log('The second argument must be a number between 0 and 30');
    }
  }



  console.log('JUN 1 i will win');
  console.log('JUN 1 it no over until a win');
  console.log('JUN 2 MY TIME');
  console.log('JUN 2 Lets GO');
  console.log('JUN 3 one more');
  console.log('JUN 4 two more');
  console.log('JUN 5 crack day');
  console.log('JUN 6 Pre Day');
  console.log('JUN 7 Mom Birth Day');
  console.log('JUN 8 dtart all');
  console.log('JUN 9 Day start');
  console.log('JUN 10 Day One');
  console.log('JUN 11 late 1');
  console.log('JUN 12 last moment');
  console.log('JUN 13 Organize my new');
  console.log('FOR ME');
  console.log(`Day 1. This is first day of the rest of my life, the day when everything changes` )
  console.log(`Day 2. One day at a time` )
  console.log(`Day 3. Big Decition` )
  console.log(`Day 4. New House, New Moment` )
  console.log(`Day 5. Start` )
  console.log(`Day 6. End` )
  console.log(`Day 7. is it today ?. yes it's` )
  console.log(`Day 8. how` )
  console.log(`Day 8. firts battle, today` )
  console.log(`Day 9. my number` )
  console.log(`Day 10.` )
  console.log(`Day 10. Dont Forget this day` )
  console.log(`FINAL DAY OF THE REST ` )

  

  