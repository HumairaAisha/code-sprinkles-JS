//navbar mobile view
const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');

    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });


const searchResult = document.querySelectorAll('#searchResult') 
const search = document.getElementById('search')
const errorMsg =  document.getElementById('error')


document.getElementById('btnSearch').addEventListener('click', function (event) {
  event.preventDefault();
  const result = searchResult;

  const searchTerm = search.value.trim()
  if ( searchTerm === '') {
    alert("Please Enter a search book Term")
    return
  } else{
    result.value = '';
    fetchBooks(searchBooks)
  }
})

async function fetchBooks(searchBooks) {
  let booksResult = []
  try {
    const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=search+terms")
    if (response.ok) {
      console.log('Books fecth successful');
      
    }
    const json = await response.json()
    booksResult = json
    displaybooks()
    
  } catch (error) {
    errorMsg.textContent = 'No Book Found, Try Again'
  }
} 

const url = `https://www.googleapis.com/books/v1/volumes?q=${query}`
`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=10`

async function fetchBooks() {

   try {
      const response = await fetch(url)
      if (response.ok) {
         console.log('Books Fetch successful');
         
      }
     const data =

     if (data.items && data.items.length > 0) { 
      storeResults = ("searchResults", data.items)
      window.location.href = 'explore.html'
     } else {
      errorMsg.textContent = "No books found try again"
     }
     

   } catch (error) {
      errorMsg.textContent = "Failed to Fetch books from the server"
      console.log('Error', error.message);
      
   }
}

function storeResults() {
   const data = JSON.stringify(data.items)
   localStorage.setItem(searchResults, JSON.stringify(data))
}