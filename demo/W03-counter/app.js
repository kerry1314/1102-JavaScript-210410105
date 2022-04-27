let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

console.log('value', value.textContent);
console.log('btns', btns);

btns.forEach((btn) => {
   btn.addEventListener('click', (e) => {
    //    console.log(e.currentTarget.classList);
    const styles = e.currentTarget.classList;
    if(styles.contains('decrease')){
       count--;
    }

    if(styles.contains('increase')){
        count++;
     }

     if(styles.contains('reset')){
        count = 0;
        value.style.color = '#222'
     }

     if(count ==0){
         value.style.color = '#222'
     }

    if(count < 0) {
        value.style.color = 'red'
    }

    if(count > 0) {
        value.style.color = 'green'
    }



    value.textContent = count;
    console.log('value', value.textContent, value.style.color);
   });
})