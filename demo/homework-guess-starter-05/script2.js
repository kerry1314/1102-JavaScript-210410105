let bills=[125,100,250,555,44,350];
console.log('bills',bills);


bills.forEach(
    (item, index, arr) => {
        arr[index] = item*0.15;
    }
)

let tips = bills.slice(0);

console.log('tips',tips);

let total=[];
for(let i=0;i<bills.length;i++){
total[i]=bills[i]+tips[i];
}

console.log('total',total)

