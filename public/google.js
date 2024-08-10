
const btn = document.querySelector('.google');

if (btn) {
    btn.addEventListener('click', () => {
        fetch('http://localhost:3001/google/signin')
        .then(async (res) => {
            const { link } = await res.json();
            console.log(link);
            window.location.href = link;
        });
    });
}
