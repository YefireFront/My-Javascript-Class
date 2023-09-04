class Person {
  constructor(id, name) {
    (this.id = id), (this.name = name);
  }
}

class Programer extends Person{
    constructor(id, name,skills, profile){
        super(id, name);
        this.skills = skills;
        this.profile = profile
    }
}


const Danilo = new Person(5,'Carlos')
const Yeffer = new Programer(9,'Yeffer',['React','Native','AWS'],'FronEnd')


console.log(Danilo);
console.log(Yeffer);