const { taskOne, taskTwo } = require("./tasks");

async function main() {
  try {
    console.time("Measuring time");
    const valueOne = await taskOne();
    console.log("one", valueOne);
    const valueTwo = await taskTwo();
    console.log("two", valueTwo);
    console.timeEnd("Measuring time");
  } catch (err) {
    console.log(err);
  }
}

main()
//% PARALLE

async function main2() {
  try {
    [valueOne, valueTwo] = await Promise.all([taskOne(), taskTwo()]);

    console.time("Measuring time");
    console.log("one", valueOne);
    console.log("two", valueTwo);
    console.timeEnd("Measuring time");

  } catch (err) {
    console.log(err);
  }
}

main2()