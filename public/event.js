const btn = document.querySelector('.logout');

if (btn) {
    btn.addEventListener('click', () => {
        fetch('http://localhost:3001/logout', {
            method: 'POST',
            credentials: 'include',
        }).then(window.location.href = '/signup');
    });
}
