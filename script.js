document.getElementById('book-form').addEventListener('submit', addBook);

function addBook(e) {
    e.preventDefault();
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let isbn = document.getElementById('isbn').value;

    if (title === '' || author === '' || isbn === '') {
        alert('Please fill in all fields');
        return;
    }

    let bookList = document.getElementById('book-list');
    let row = document.createElement('tr');
    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><a class="delete" href="#">Clear</a></td>
    `;
    bookList.appendChild(row);

    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';

    let deleteLinks = document.getElementsByClassName('delete');
    for (let i = 0; i < deleteLinks.length; i++) {
        deleteLinks[i].addEventListener('click', deleteBook);
    }
}

function deleteBook(e) {
    e.preventDefault();
    if (confirm('Are you sure you want to delete this book?')) {
        e.target.parentNode.parentNode.remove();
    }
}
