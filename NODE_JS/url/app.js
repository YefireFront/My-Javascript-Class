const miURL = new URL('http://www.ejemplo.com:8080/path/nombrePagina.html?id=255&status=activo#comentario');


console.log( "name ====> ", miURL.hostname);
console.log( "pathname ====> ", miURL.pathname);
console.log( "search ====> ", miURL.search);
console.log( "hash ====> ", miURL.hash);    
console.log( "searchParams ====> ", miURL.searchParams);
console.log( "searchParams id ====> ", miURL.searchParams.get('id'));
console.log( "searchParams status ====> ", miURL.searchParams.get('status'));