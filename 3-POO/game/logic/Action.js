
let lanzador =      ''
let selectedSkill = ''
let objetivo =      ''

let card = document.querySelector("body")


card.addEventListener("click", function(event) {

    let target = event.target

    if (target.parentNode.parentNode.parentNode.classList[1] == 'Warrior' ) {

        if (target.classList[2] =='skill1') {
            lanzador =  target.parentNode.parentNode.parentNode.classList[2]
            selectedSkill = 'Atacar'

        }
        if (target.classList[2] == 'skill2') {
            lanzador =  target.parentNode.parentNode.parentNode.classList[2]
            selectedSkill = 'Blindar'
        }
        if (target.classList[2]=='skill3') {
            lanzador =  target.parentNode.parentNode.parentNode.classList[2]
            selectedSkill = 'Ira yopuka'
        }
       
    }
    if (target.parentNode.parentNode.parentNode.classList[1] == 'Witcher' ) {

        if (target.classList[3] =='skill1') {
            lanzador =  target.parentNode.parentNode.parentNode.classList[2]
            selectedSkill = 'Atacar'
        }
        if (target.classList[2] == 'skill2') {
            lanzador =  target.parentNode.parentNode.parentNode.classList[2]
            selectedSkill = 'Peste'
        }
        if (target.classList[2]=='skill3') {
            lanzador =  target.parentNode.parentNode.parentNode.classList[2]
            selectedSkill = 'Potencia'
        }
       
    }
    if (target.parentNode.parentNode.parentNode.classList[1] == 'Healer' ) {

        if (target.classList[3] =='skill1') {
            lanzador =  target.parentNode.parentNode.parentNode.classList[2]
            selectedSkill = 'Atacar'
        
        }
        if (target.classList[2] == 'skill2') {
            lanzador =  target.parentNode.parentNode.parentNode.classList[2]
            selectedSkill = 'curar'
        }
        if (target.classList[3]=='skill3') {
            lanzador =  target.parentNode.parentNode.parentNode.classList[2]
            selectedSkill = 'Sacrificio'
        }
       
    }
    
  });
  
  
  
  card.addEventListener("click", function(event) {

    let target = event.target
    let op1 = document.querySelector("div.card__img") 
    let op2 = document.querySelector("div.card__img > img")

    objetivo = target.parentNode.parentNode.classList[2]
    console.log(objetivo);



    if ((op2.alt=='game' && target.alt=='game') || (op1.classList[0]=='card__img'  && target.classList[0]=='card__img')) {
        console.log(`Mira loq ue tenemos quien pega ${lanzador} que pega ${selectedSkill} a quien pega ${objetivo} `);

        
        PersonajeGame.forEach(PersonajeGame=>{

            if(PersonajeGame.name == objetivo){
                objetivo = PersonajeGame               

            }

        })
        

        PersonajeGame.forEach(PersonajeGame=>{

            if(PersonajeGame.name == lanzador){

                if (selectedSkill == 'Atacar') {
                    
                    PersonajeGame.Atacar(objetivo)
                    

                }


            }

        })


    }
 



  })
  
  

//   const personajes = [
//     new Warrior({ name: "Yeffer", atk: 70, def: 60 }),
//     new Warrior({ name: "Yefire", atk: 60, def: 60 }),
//     new Witcher({ name: "Arley", atk: 50, def: 20 }),
//     new Healer({ name: "Walter", atk: 80, def: 40 }),
//   ];

//   function ejecutarMetodosDePersonaje(personaje) {
//     console.log(`Ejecutando métodos de ${personaje.name}`);
//     personaje.Atacar(personaje); // Ejemplo de llamada a un método común a todos los personajes
  
//     if (personaje instanceof Warrior) {
//       personaje.blindar(); // Llama al método específico de Warrior
//       personaje.iraYopuka(personaje); // Llama al método específico de Warrior
//     } else if (personaje instanceof Healer) {
//       personaje.curar(personaje); // Llama al método específico de Healer
//       personaje.sacrificio(personaje); // Llama al método específico de Healer
//       personaje.revivir(personaje); // Llama al método específico de Healer
//     } else if (personaje instanceof Witcher) {
//       personaje.Mejora(personaje); // Llama al método específico de Witcher
//     }
  
//     console.log("-------------");
//   }
  
//   personajes.forEach(ejecutarMetodosDePersonaje);

  
  