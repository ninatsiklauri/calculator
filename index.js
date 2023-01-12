(function () {
    let screen=document.querySelector('.screen');
    let btns=document.querySelectorAll('.btn');
    let clear=document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');


    btns.forEach((button) => {
        button.addEventListener("click", (e) => {
            let value = e.target.dataset.num;
            if (value != "equal") {
                screen.value += value;
            }
            
        })
    });

    equal.addEventListener("click", (e) => {
        if(screen.value === ''){
            screen.value = "";
        }else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })
    
    clear.addEventListener("click", () => {
        screen.value = ""
    })

})();
