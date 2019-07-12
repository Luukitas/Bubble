let item = [7, 2, 5, 1, 2, 3];
let tamanho = item.length;

function bubble() {
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
}

bubble();
console.log(item);