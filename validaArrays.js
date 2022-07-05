function validaArray(arr, num) {
    
    try{
        if(!arr && !num) throw new ReferenceError("Envie os parâmetros.");

        if(typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object.");

        if(typeof num !== 'number') throw new TypeError("Num precisa ser do tipo number.");

        if(arr.length !== num) throw new RangeError("Tamanho inválido.");

        return arr;
    }
    catch(e){
        if(e instanceof ReferenceError) {
            console.log("Esse erro é um ReferenceError.");
            console.log(e.message);
        } else if (e instanceof TypeError) {
            console.log("Esse erro é um TypeError.");
            console.log(e.message);
        } else if (e instanceof RangeError) {
            console.log("Esse erro é um RangeError.");
            console.log(e.message);
        } else {
            console.log('Tipo de erro não esperado:' + e);
        }
    }
}

console.log(validaArray()); // retorna: Esse erro é um ReferenceError; Envie os parâmetros; e, undefined.
console.log(validaArray(5, 10)); // retorna: Esse erro é um TypeError; Array precisa ser do tipo object; e, undefined.
console.log(validaArray([], 'string')); // retorna: Esse erro é um TypeError; Num precisa ser do tipo number; e, undefined.
console.log(validaArray([], 5)); // retorna: Esse erro é um RangeError; Tamanho inválido; e, undefined.
console.log(validaArray([1, 4, 10, 53, 102], 5)); // retorna: [1, 4, 10, 53, 102] - sem nenhum erro.
