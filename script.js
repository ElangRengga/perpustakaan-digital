const bookList = document.getElementById('book-list');
const genreSearch = document.getElementById('genre-search');

document.getElementById('book-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;
    const releaseDate = document.getElementById('release-date').value;
    const genre = document.getElementById('book-genre').value;

    const listItem = document.createElement('li');
    listItem.textContent = `${title} by ${author} | Released on: ${releaseDate} | Genre: ${genre}`;
    listItem.setAttribute('data-genre', genre); // Untuk fitur pencarian
    bookList.appendChild(listItem);

    // Membersihkan input setelah submit
    document.getElementById('book-form').reset();
});

// Fungsi pencarian genre
genreSearch.addEventListener('change', function() {
    const selectedGenre = genreSearch.value;
    const items = bookList.getElementsByTagName('li');

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const genre = item.getAttribute('data-genre');

        if (selectedGenre === "" || genre === selectedGenre) {
            item.style.display = ""; // Tampilkan item
        } else {
            item.style.display = "none"; // Sembunyikan item
        }
    }
});
