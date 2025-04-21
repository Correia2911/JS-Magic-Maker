const listItems = document.querySelectorAll('li');

listItems.forEach(item => {
    item.addEventListener('click', () => {
        alert(`${item.textContent} belongs to the ${item.dataset.universe} universe.`);
    });
});
