
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
  
   const url = apiBaseUrl + "?maxResults=20&q=" + encodeURIComponent(searchTerm);
   try {
      const response = await fetch(url)
      const bookData = await response.json()
      if (!bookData.items) {
         errorMsg.textContent = "No books found for this search"
         errorMsg.classList.remove('hidden')
         return
      }

      
     const bookList =  bookData.items.map((item) => ({
         
             title:item.volumeInfo.title  || "Unknown Title",
             authors:item.volumeInfo.authors || ["Unknown Author"],
             thumbnail:item.volumeInfo.imageLinks?.thumbnail.replace('http://', 'https://') || 'path/to/fallback-image.jpg',
             publishedDate:item.volumeInfo.publishedDate || "Unknown",
             publisher:item.volumeInfo.publisher || "Unknown",
             categories:item.volumeInfo.categories || ["Unknown"],
             description:item.volumeInfo.description || "Unknown",
             pageCount:item.volumeInfo.pageCount || "Unknown",
             language:item.volumeInfo.language || "unknown",
             

         
        
         
      }));
         localStorage.setItem("searchResults", JSON.stringify(bookList))
         window.location.href = "src/nextChapter/explore.html"

   } catch (error) {
      errorMsg.textContent = "No Books Found. Please try again."
      errorMsg.classList.remove('hidden')
   }
}
