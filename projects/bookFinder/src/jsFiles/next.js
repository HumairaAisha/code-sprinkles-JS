//navbar mobile view
const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');

    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });


const search = document.getElementById('search')
const searchBtn = document.getElementById('btnSearch')
const errorMsg =  document.getElementById('error')

const apiBaseUrl = "https://www.googleapis.com/books/v1/volumes"


function searchButtonClick(event) {
   event.preventDefault()
    const searchTerm = search.value.trim()
   if (searchTerm === '') {
      //alert("Please enter a book title or keyword")
      errorMsg.textContent = "Please enter a book title"
      errorMsg.classList.remove('hidden')
      return
   }
   errorMsg.textContent = '';
   errorMsg.classList.add('hidden')
   fetchBooks(searchTerm)
}

searchBtn.addEventListener('click', searchButtonClick) 

search.addEventListener('keydown', function handleKeyEnter(event) {
   if (event.key === "Enter") {
      event.preventDefault()
     searchBtn.click()
     
   }

})


//fetch books 
async function fetchBooks(searchTerm) {
   const url = apiBaseUrl + "?maxResults=10&q=" + searchTerm;
   try {
      const response = await fetch(url)
      const bookData = await response.json()
      if (!bookData.items) {
         errorMsg.textContent = "No books found for this search"
         errorMsg.classList.remove('hidden')
         return
      }

      let bookList = []
      bookData.items.forEach((item) => {
         const bookObject = {
             title:item.volumeInfo.title  || "Unknown Title",
             authors:item.volumeInfo.authors || ["Unknown Author"],
             thumbnail:item.volumeInfo.imageLinks?.thumbnail || "",
         }
         bookList.push(bookObject)
         
      });
         localStorage.setItem("searchResults", JSON.stringify(bookList))
         window.location.href = "src/nextChapter/explore.html"

   } catch (error) {
      errorMsg.textContent = "No Books Found. Please try again."
      errorMsg.classList.remove('hidden')
   }
}
