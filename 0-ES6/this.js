


let yeffer = {
    it : 'obj',
    name: 'yeg',
    it () {
        
        console.log(this.name);
    },
    obj:{
        name:'nivel2',
        nivel2 (){
            console.log(this.name);
        }
    }

}



console.log(this.Document);
yeffer.it()
yeffer.obj.nivel2()
