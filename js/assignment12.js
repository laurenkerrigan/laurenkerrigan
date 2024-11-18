let myData = {};

function fetchData() {
    // Generate a random comic number between 1 and 3000
    const randomComicNumber = Math.floor(Math.random() * 3000) + 1;
    const url = `https://corsproxy.io/?https://xkcd.com/${randomComicNumber}/info.0.json`;

    fetch(url)
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error(`Error: ${res.status}`);
            }
        })
        .then(data => {
            myData = data;

            // Update the title
            document.getElementById("title").innerHTML = myData.title;

            // Update the comic image
            const comicImage = document.getElementById("comic");
            comicImage.src = myData.img;
            comicImage.alt = myData.alt;

            // Update the publication date
            document.getElementById("date").innerHTML = `Published on: ${myData.year}-${myData.month}-${myData.day}`;
        })
        .catch(err => {
            console.error(err);
        });
}

// Add event listener to the button
document.getElementById("fetchComicButton").addEventListener("click", fetchData);

// Fetch a comic initially
fetchData();