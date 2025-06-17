const textarea = document.getElementById('text-input');
const count = document.getElementById('word-count');
const maxwordLimit = 10

textarea.addEventListener('input', function () {
   const textInput = textarea.value.trim();
   const words = textInput.split(/\s+/).filter(Boolean)
   const wordCount =  maxwordLimit - words.length;
   count.textContent = `Word Left: ${wordCount} /${maxwordLimit}`;

   if (wordCount < 0){
      count.style.color = "red"
      alert('Word Limit Exceeded')
   } else {
      count.style.color = ""
   }
})