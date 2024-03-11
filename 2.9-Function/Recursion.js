 
 function recur(n) {
   
    if (n < 5) {
        return   (n + 1);
    }else{
        return n
    }
    
 }



 function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Ejemplo de uso:
console.log(factorial(5)); // Output: 120
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Ejemplo de uso:
console.log(fibonacci(7)); // Output: 13
// Definición de un nodo de un árbol
class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

// Función recursiva para recorrer un árbol
function traverseTree(node) {
    console.log(node.value);
    node.children.forEach(child => traverseTree(child));
}

// Ejemplo de uso:
const rootNode = new TreeNode(1);
const child1 = new TreeNode(2);
const child2 = new TreeNode(3);
const grandchild1 = new TreeNode(4);
const grandchild2 = new TreeNode(5);

rootNode.children.push(child1, child2);
child1.children.push(grandchild1);
child2.children.push(grandchild2);

traverseTree(rootNode);
