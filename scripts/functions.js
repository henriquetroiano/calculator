const inputValue = document.querySelectorAll('#data');
const numberButtons = document.querySelectorAll('#numbers button');
const operationButtons = document.querySelectorAll('#operations button');
const actionButtons = document.querySelectorAll('#actions button');




numberButtons.forEach((btn) => {

    btn.addEventListener('click', function(){
        let valueButton = +btn.value;
        inputValue[0].value += valueButton;
    })
})

operationButtons.forEach((btn) => {

    btn.addEventListener('click', function(){
        let valueButton = btn.value;
        inputValue[0].value += valueButton;
    })
})

actionButtons.forEach((btn) => {

    btn.addEventListener('click', function() {
        if(btn.id="clear") {
            inputValue[0].value = 0;
        }
        if(btn.id="del") {
            inputValue[0].value.filter(inputValue[0].value.length);
        }
    })
})








// inputValue[0].value = inputValue[0].dataset.valueN + inputValue[0].dataset.valueA