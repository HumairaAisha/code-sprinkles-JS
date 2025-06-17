const textarea = document.getElementById('text-input')
const count = document.getElementById('char-count')

const maxLimit = 100;

textarea.addEventListener('input', () => { 
   const currentCount = textarea.value.length;
   console.log(currentCount);
   const remainingChar = maxLimit - currentCount
   count.textContent = `Characters left: ${remainingChar} /${maxLimit}`
   //console.log(count);
   console.log(remainingChar);
   
   if (remainingChar < 0) {
     count.style.color = "red"
}
else {
   count.style.color = ""
}

});



