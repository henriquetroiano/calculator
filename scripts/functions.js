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








// inputValue[0].value = inputValue[0].dataset.valueN + inputValue[0].dataset.valueA