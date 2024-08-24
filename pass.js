

function outer() {
    const name = 'Roadmap';
  
    function inner() {
      console.log(name);
    }
  
    return inner;
  }
  
  const closure = outer();
  closure(); // Roadmap


