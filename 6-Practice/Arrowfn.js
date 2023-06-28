const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
      firstName: 'John',
      lastName: 'Doe'
    }
  };
  
  function userId({id}) {
    return id;
  }
  
  function whois({displayName, fullName: {firstName: name}}) {
    return `${displayName} es ${name}`;
  }

  
  console.log(userId(user)); // 42
    
  console.log(whois(user));  // "jdoe es John"
  
  console.log(whois(user));  // "jdoe es John"
  console.clear();
 let yeffer = 'a';

(function Boca (){console.log('Qie paso con el fantasma del decesno, que paso con la gallina en sal lorenzo')})();