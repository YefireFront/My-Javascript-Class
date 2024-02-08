arrnum = [1, 2, 3, 4, 5, 6, 7,  51];
  
  res = arrnum.reduce(
    (obj, item) => {
      if (item >= 1 && item <= 5) {
        obj["1-5"] += 1;
      }
      if (item >= 6 && item <= 8) {
        obj["6-8"] += 1;
      }
  
      if (item >= 9) {
        obj["rest"] += 1;
      }
      return obj;
    },
    {
      "1-5": 0,
      "6-8": 0,
      rest: 0,
    }
  );
  