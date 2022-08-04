//random arr
let randomArray=Array.from({length: 10}, () => Math.floor(Math.random() * 1000));
console.log(randomArray) 
//random str
function str(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {    
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

console.log(str(10));

// random obj


function randomName() {
   let name ='';
   alphabet = 'abcdefghijklmnopqrstuvwxyz';
       for (let x = 0; x < ((Math.random() * (7)+3)); x++){
           name = name + (alphabet.charAt(Math.floor(Math.random() * alphabet.length)));
                   
     }; 
      name = name.charAt(0).toUpperCase()+name.slice(1);           
     return name;

}
function randomAge(max) {
   return (Math.floor(Math.random() * max));     

}
function randomHight() {
   return (((Math.random() * 1)+1).toFixed(2)); 
}

function listPerson (amount, keys = []) {
   let output = [];
   
   for( x = 0; x < amount ; x++ ){

       let obj = {}

       keys.forEach(k => {
           obj[k.key] = k.fun()
       })

       output.push(obj);
   }
   return output;
}

const mapped =  [
   {
   key: 'name',
   fun: () => randomName(10)
   },
   {
       key: 'age',
       fun:() =>  randomAge(50)
   },
   {
       key: 'height',
       fun:() =>  randomHight()
   },
]

console.log(listPerson(10,mapped));
