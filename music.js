// Simulate user authentication
const users = {
    admin: "password123"
};

document.getElementById("loginBtn").addEventListener("click", openLoginModal);
document.getElementById("logoutBtn").addEventListener("click", logout);

document.getElementById("submitLogin").addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (users[username] && users[username] === password) {
        alert("Login successful!");
        document.getElementById("loginBtn").style.display = "none";
        document.getElementById("logoutBtn").style.display = "block";
        closeLoginModal();
    } else {
        alert("Invalid credentials!");
    }
});

function openLoginModal() {
    document.getElementById("loginModal").style.display = "flex";
}

function closeLoginModal() {
    document.getElementById("loginModal").style.display = "none";
}

function logout() {
    document.getElementById("loginBtn").style.display = "block";
    document.getElementById("logoutBtn").style.display = "none";
    alert("Logged out successfully!");
}

// Fetch songs from a hypothetical music API
const songs = [
    { title: "Song 1", image: "https://via.placeholder.com/200x150?text=Song+1", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
    { title: "Song 2", image: "https://via.placeholder.com/200x150?text=Song+2", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
    { title: "Song 3", image: "https://via.placeholder.com/200x150?text=Song+3", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" }
];

const songsContainer = document.getElementById("songs-container");

songs.forEach(song => {
    const songCard = document.createElement("div");
    songCard.classList.add("song-card");

    songCard.innerHTML = `
        <img src="${song.image}" alt="${song.title}">
        <h3>${song.title}</h3>
        <button class="play-btn">Play</button>
    `;

    songCard.querySelector(".play-btn").addEventListener("click", function () {
        addToPlaylist(song);
    });

    songsContainer.appendChild(songCard);
});

function addToPlaylist(song) {
    const playlist = document.getElementById("playlist");

    const listItem = document.createElement("li");
    listItem.textContent = song.title;

    const audio = document.createElement("audio");
    audio.src = song.audio;
    audio.controls = true;

    listItem.appendChild(audio);
    playlist.appendChild(listItem);

    audio.play();
}
