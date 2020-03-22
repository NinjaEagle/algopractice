class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }

}

class BST {
    constructor(){
        this.root = null;
    }
   insert(val) {
     let newNode = new Node(val);
        // check if key is null
        if (this.root === null){
            this.root = newNode;
            return this;
        }
        else{
          let current = this.root;
          while(true){
            if (val < current.val){
              if( current.left === null){
                current.left = newNode;
                return this
              }
              else current = current.left;
            }
            else if (val > current.val) {
              if (this.right == null){
                 return current.right = newNode;
              }
            }
            else {return undefined}
           }
      }
   }
//    second function to build out if the value exists in the array
   exists (checkval){
    let current = this.root;
     if (current === null) return false;
     else{
       if(current.val === checkval){
         return true
       }
       else if(current.val > checkval){
         console.log(current.val)
         if(!current.left) return false;
         else{
          current = current.left
          exists(checkval)
         }
       }
       else if(current.val < checkval){
         if(!current.right) return false;
         else{
          current = current.right
          exists(checkval)
         }
       }
     }
   }
}

let tree= new BST()
// tree.root = new Node(10)
// tree.root.left = new Node(8)

tree.insert(10);
tree.insert(7);
// tree.insert(15);
// tree.insert(9);
console.log(tree.exists(7))


console.log(tree)