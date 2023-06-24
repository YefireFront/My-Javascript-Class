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


  