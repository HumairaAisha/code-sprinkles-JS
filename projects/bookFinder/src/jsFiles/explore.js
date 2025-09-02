const results = document.getElementById("booksResult")
const message =  document.getElementById("error")

function displayBooks() {
   const resultContainer = results

const bookList = localStorage.getItem("searchResults")

if (!bookList) {
   message.textContent = "No books found Please search first";
   message.classList.remove('hidden')
   return
}

const books = JSON.parse(bookList)

books.forEach(book => {
   const bookCard = document.createElement('div')

   bookCard.className = "bg-white rounded shadow-md overflow-hidden px-4 flex flex-col hover:shadow-lg transition"
   const bookLink = book.previewLink ? book.previewLink : `https://www.google.com/search?tbm=bks&q=${encodeURIComponent(book.title)}`
   const authorLink = `https://www.google.com/search?tbm=bks&q=${encodeURIComponent(book.authors.join(", "))}`

   bookCard.innerHTML = `<a href = "${bookLink}" target ="_blank"><h2 class ="font-bold md:text-xl mt-2 hover:text-blue-600 hover:underline hover:cursor-pointer">${book.title}</h2></a>
   <a href = "${authorLink}" target="_blank"><p class = "mt-2 text-sm">${book.authors.join(", ")}</p></a>
   <a href = "${bookLink}" target="_blank"><img src="${book.thumbnail || "No Preview"}" alt="${book.title} " class="w-32 h-40 object-cover mb-5 mt-3 rounded">
   </a>
   <p>Published: ${book.publishedDate}</p>
   <p>Publisher: ${book.publisher || "Unknown Publisher"}</p>
   <p>Category: ${book.categories.join(", ")}</p>
   <p>${book.pageCount} pages</p>
   <button class = "bg-slate-700 text-white rounded-md m-3 cursor-pointer" id="fav-btn">Add to Favorite</button>
   `
   const favBooks = bookCard.querySelector("#fav-btn")
   favBooks.addEventListener('click', () => {
      addToFavorite(book)
   })

   resultContainer.appendChild(bookCard)
});
}

function addToFavorite(book) {
   let favorites = JSON.parse(localStorage.getItem("favorite")) || []
    const exists = favorites.some(fav => fav.title === book.title);
   if (!exists) {
      favorites.push(book)
      localStorage.setItem("favorites", JSON.stringify(favorites))
      alert(`${book.title} added to Favorites`)
   } else {
      alert(`${book.title} Book is already in Favorite`)
   }
}
window.onload = displayBooks