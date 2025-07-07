const quoteDisplay = document.getElementById('quoteDisplay')
const textDisplay  = document.getElementById('quote')
const authorName = document.getElementById('quoteAuthor')
const quoteCount = document.getElementById('quoteCount')
const btnPrevious = document.getElementById('btnPrevious')
const btnRandom = document.getElementById('btnRandom')
const btnNext = document.getElementById('btnNext')
const errorMsg = document.getElementById('errorMsg')


let quotesList = [];
let currentIndex = 0;
let quotesLimits = 50;

async function quotesGenerate() {
  const url = "https://zenquotes.io/api/quotes";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      
      errorMsg.textContent = `Faild to load quotes: HTTP ${response.status}`
      console.log(`Response status: ${response.status}`)
      return;
    }

   const json = await response.json();
   
   quotesList = json;
   errorMsg.textContent = "";
   if (quotesList.length > quotesLimits) {
      quotesList = quotesList.slice(0, quotesLimits)
   }
   console.log(quotesList);
   

  } catch (error) {
   quoteDisplay.textContent = "Failed to load quotes"
    console.log("Error",error.message);
  }
}



document.addEventListener('DOMContentLoaded', quotesGenerate);