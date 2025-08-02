//your JS code here. If required.

let bookForm = document.getElementById('book-form');
let bookList = document.getElementById('book-list');

bookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let isbn = document.getElementById('isbn').value;

    if (title && author && isbn) {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${title}</td>
            <td>${author}</td>
            <td>${isbn}</td>
            <td><span class="delete">Clear</span></td>
        `;
        bookList.appendChild(row);

        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';

        let deleteSpans = document.getElementsByClassName('delete');
        for (let i = 0; i < deleteSpans.length; i++) {
            deleteSpans[i].addEventListener('click', () => {
                deleteSpans[i].parentNode.parentNode.remove();
            });
        }
    }
});