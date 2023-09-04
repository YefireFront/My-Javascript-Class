function WhatYouWin(win) {
  return new Promise((resolve, reject) => {
    if (win) {
      console.log(`You won this championship`);
      for (let i = 0; i < win.champions.length; i++) {
        console.log(win.champions[i]);
      }
    } else {
      reject(`You Dont Wint`);
    }
  });
}

function miProm() {
  return new Promise((resolve, reject) => {
    let championship = true;

    if (championship) {
      let phone = {
        Brand: "Iphone",
        Model: "14",
        champions: ["Super Liga", "Champiosn", "Libertadores"],
      };
      resolve(phone);
    } else {
      reject("No obtuviste un Phone");
    }
  });
}

miProm()
  .then((m) => {
    return WhatYouWin(m);
  })
  .then((m) => {
    console.log(m);
  }).catch((m)=>{
    console.log(m);
  })
