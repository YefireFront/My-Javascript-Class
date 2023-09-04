function Boca(fn) {
  setTimeout(function () {
    console.log("Somo la 12, somo los xeneixes");
    fn()
    console.log("Somo la 12, somo los xeneixes");
    fn()
  }, 1000);
}

function riBer() {
  console.log("Me fui a la B por cagon");
}


Boca(riBer)
