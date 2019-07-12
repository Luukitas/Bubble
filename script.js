let item = [7, 2, 5, 1, 2, 3];
let tamanho = item.length;

//Exemplo o do/while
/*function bubble() {
    let val;
    do {
        val = false;
        for (let i = 0; i < tamanho; i++) {
            if (item[i] > item[i + 1]) {
                let a = item[i];
                item[i] = item[i + 1];
                item[i + 1] = a;
                val = true;
            }
        }
    }while(val)
}*/


function bubble(){
    let tam = item.length;
    for(let i = 0; i < tam; i++){
        for(let j = 0; j < tam; j++){
            if(item[j] > item[j + 1]){
                let aux;
                aux = item[j];
                item[j] = item[j+1];
                item[j+1] = aux;
            }
        }
    }
    return item
}

bubble();
console.log(item);