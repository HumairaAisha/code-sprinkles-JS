const textarea = document.getElementById('user-input');

textarea.addEventListener('input', function () {

   const currentWord = textarea.value;
   if (currentWord == '') {
      textarea.value = "";
      return; 
   }
   const words = currentWord.split(/\s+/)
   for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
   }
   const capitalizeWord = words.join(" ")
    textarea.value = capitalizeWord;
    
})

