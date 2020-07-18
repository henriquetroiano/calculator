const inputValue = document.querySelectorAll('#data');
const numberButtons = document.querySelectorAll('#numbers button');
const operationButtons = document.querySelectorAll('#operations button');
const resultButtons = document.querySelectorAll('#result button');

inputValue[0].value = 0;



numberButtons.forEach((btn) => {
    
    btn.addEventListener('click', function(event){
        
        if(event.target.id == "del") {
            const inputDel = inputValue[0].value;
            inputValue[0].value =  inputDel.slice(0, inputDel.length - 1);
            if (inputValue[0].value.length == "") {
                inputValue[0].value = 0;
            }
            
        } else if(event.target.id == "clear") {
            inputValue[0].value = 0;
            console.log(event.target.id)
        } else {
            inputValue[0].value == 0 ? inputValue[0].value = '' : inputValue[0].value;
            let valueButton = +btn.value;
            inputValue[0].value += valueButton;
        } 
        
        
        
    })
})

operationButtons.forEach((btn) => {
    
    btn.addEventListener('click', function(){
        let valueButton = btn.value;
        inputValue[0].value += valueButton;
    })
})









resultButtons.forEach((btn) => {
    
    btn.addEventListener('click', function() {

        console.log(inputValue[0].value.split('X'))

      
        //  inputValue[0].value =  inputValue[0].value.split(' X ')
        
        
    })
})









// inputValue[0].value = inputValue[0].dataset.valueN + inputValue[0].dataset.valueA