document.getElementById('fetchButton').addEventListener('click', function() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://randomuser.me/api/', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(this.responseText);
            const pictureLarge = data.results[0].picture.large;
            const imgElement = document.getElementById('picture');
            imgElement.src = pictureLarge;
            imgElement.style.display = 'block';
        }
    };
    xhr.send();
});
