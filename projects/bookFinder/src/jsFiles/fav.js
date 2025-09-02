const favoriteList = document.getElementById('favoriteList')

function displayFavorite() {
   favoriteList.textContent = ""
   let favorite = JSON.parse(localStorage.getItem("favorites")) || []

   if (favorite.length === 0) {
      favorite.innerHTML = `<p class ='p-4'>No Favorite Books yet</p>`
      return
   }
   favorite.forEach(book => {
      const item = document.createElement('div')
      item.className = 'p-4'
      const bookLink = book.previewLink ? book.previewLink : `https://www.google.com/search?tbm=bks&q=${encodeURIComponent(book.title)}`
      const authorLink = `https://www.google.com/search?tbm=bks&q=${encodeURIComponent(book.authors.join(", "))}`
      const bookInfo = `
      <div>
     <a href = "${bookLink}" target ="_blank"><h2 class ="font-bold md:text-xl mt-2 hover:text-blue-600 hover:underline hover:cursor-pointer">${book.title}</h2></a>
     <a href = "${authorLink}" target="_blank"><p class = "mt-2 text-sm">${book.authors.join(", ")}</p></a>
     <a href = "${bookLink}" target="_blank"><img src="${book.thumbnail || "No Preview"}" alt="${book.title} " class="w-32 h-40 object-cover mb-5 mt-3 rounded">
   </a>
      </div>`
      item.innerHTML = bookInfo

      favoriteList.appendChild(item)
   });
   
}

window.addEventListener('load', displayFavorite)