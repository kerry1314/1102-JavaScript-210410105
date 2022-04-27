let bills=[125,100,250,555,44,350];
console.log('bills',bills);


let tips=bills.map(a=>{
    if(a>=50 && a<=300){
        return a*0.15;
    }else {
        return a*0.2;
}
});
console.log('tips',tips);

let total=[];

for(let i=0;i<bills.length;i++){

    total[i]=bills[i]+tips[i];

}

console.log('total',total);