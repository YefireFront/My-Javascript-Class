const API = 'https://api.thecatapi.com/v1/images/search?limit=5';

async function reload() {
  const res = await fetch(API);
  const data = await res.json();
  console.log(data);
  

  const img1 = document.querySelector("#img1");
  const img2 = document.querySelector("#img2");
  const img3 = document.querySelector("#img3");

  

  img1.src = data[0].url;
  img1.style.width = "400px";
  img1.style.height = "400px";

  img2.src = data[1].url;
  img2.style.width = "400px";
  img2.style.height = "400px";

  img3.src = data[2].url;
  img3.style.width = "400px";
  img3.style.height = "400px";
}

reload();

const btn = document.querySelector("#btn");
btn.style.display = "block";
// console.log(btn);
