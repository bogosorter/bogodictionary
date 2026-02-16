document.querySelectorAll('li').forEach((item) => {
    item.addEventListener('click', () => {
        // Copy the link to the clipboard
        const id = item.firstElementChild.id;
        const url = window.location.href.split('#')[0] + '#' + id;
        navigator.clipboard.writeText(url);

        // Replace the bookmark icon with a check one
        item.style.setProperty('--list-marker', '"\\F71B"');
    });
});
