let myData = {};

function fetchData() {
    const randomComicNumber = Math.floor(Math.random() * 3000) + 1;
    const url = `https://corsproxy.io/?https://xkcd.com/${randomComicNumber}/info.0.json`;

    fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        .then(data => {
            document.getElementById("title").innerText = data.title;
            const comicImage = document.getElementById("comic");
            comicImage.src = data.img;
            comicImage.alt = data.alt;
            document.getElementById("date").innerText = `Published on: ${data.year}-${data.month}-${data.day}`;
        })
        .catch(err => {
            console.error("Failed to fetch comic:", err);
            alert("Could not load the comic. Please try again.");
        });
}

// Add event listener to the button
document.getElementById("fetchComicButton").addEventListener("click", fetchData);

// Fetch a comic initially
fetchData();