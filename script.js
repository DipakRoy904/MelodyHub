// 1. Initialize Variables
let songIndex = 0;
let audioElement = new Audio();
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItemContainer = document.querySelector('.songItemContainer');

// Timer and Volume Selectors
let currentTimeDisplay = document.getElementById('currentTimeDisplay');
let totalTimeDisplay = document.getElementById('totalTimeDisplay');
let volumeSlider = document.getElementById('volumeSlider');
let volumeIcon = document.getElementById('volumeIcon');

// 2. Song Playlist Data (NEW: Added Titles and Friend Names)
let songs = [
    { filePath: "Tere Naam Alka Yagnik.mp3", coverPath: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=50&q=80", songTitle: "Tere Naam", friendName: "Puja" },
    { filePath: "puja_songs/Humein_Tumse_Pyar_Kitna.mp3", coverPath: "https://images.unsplash.com/photo-1458560871784-56d23406c091?w=50&q=80", songTitle: "Hume Tumse Pyar Kitna", friendName: "Puja" },
    { filePath: "puja_songs/Agar Tum Saath Ho Tamasha.mp3", coverPath: "https://images.unsplash.com/photo-1485030056468-3820ff9e6e90?w=50&q=80", songTitle: "Agar Tum Saath Ho", friendName: "Puja" },
    { filePath: "puja_songs/Andekhi Anjaani Mujhse Dosti Karoge.mp3", coverPath: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=50&q=80", songTitle: "Jane Wo Kaisa Hoga Re", friendName: "Puja" },
    { filePath: "puja_songs/Mone_Pore_Ruby_Roy.mp3", coverPath: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=50&q=80", songTitle: "Mone_Pore_Ruby_Roy", friendName: "Puja" },

    // ✨ __'s Personal Premium Favorites
    { filePath: "5.mp3", coverPath: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=50&q=80", songTitle: "Maya Matho Maya", friendName: "__" },
    { filePath: "6.mp3", coverPath: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=50&q=80", songTitle: "Kumol Kuwoli", friendName: "__" },

    // ✨ Apurbo's Personal Premium Favorites
    { filePath: "apurbo_songs/Teri_Deewani.mp3", coverPath: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=50&q=80", songTitle: "Teri Deewani", friendName: "Apurbo" },
    { filePath: "apurbo_songs/Aaj Bhi Vishal Mishra.mp3", coverPath: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=50&q=80", songTitle: "Aaj Bhi", friendName: "Apurbo" },
    { filePath: "apurbo_songs/Ishq Mubarak.mp3", coverPath: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=50&q=80", songTitle: "Ishq Mubarak", friendName: "Apurbo" },
    { filePath: "apurbo_songs/Kabhi Jo Baadal Barse Jackpot.mp3", coverPath: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=50&q=80", songTitle: "Kabhi Jo Baadal Barse", friendName: "Apurbo" },
    { filePath: "apurbo_songs/Chahun Main Ya Naa Aashiqui 2.mp3", coverPath: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=50&q=80", songTitle: "Chahun Main Ya Naa", friendName: "Apurbo" },

    // ✨ Sudipta's Personal Premium Favorites
    { filePath: "sudipta_songs/Salamat.mp3", coverPath: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=50&q=80", songTitle: "Salamat", friendName: "Sudipta" },
    { filePath: "sudipta_songs/Sohniye Heeriye.mp3", coverPath: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=50&q=80", songTitle: "Soniye Hiriye", friendName: "Sudipta" },
    { filePath: "sudipta_songs/Tera Zikr.mp3", coverPath: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=50&q=80", songTitle: "Tera Zikr", friendName: "Sudipta" },

    // ✨ Sanjita's Personal Premium Favorites
    { filePath: "sanjita_songs/Raataan Lambiyan Shershaah.mp3", coverPath: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=50&q=80", songTitle: "Raataan Lambiyan", friendName: "Sanjita" },
    { filePath: "sanjita_songs/Tera Ban Jaunga.mp3", coverPath: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=50&q=80", songTitle: "Tera Ban Jaunga", friendName: "Sanjita" },
    { filePath: "sanjita_songs/O Saathi Shab.mp3", coverPath: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=50&q=80", songTitle: "O Saathi", friendName: "Sanjita" },
    { filePath: "sanjita_songs/Tera Hone Laga Hoon.mp3", coverPath: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=50&q=80", songTitle: "Tera Hone Laga Hoon", friendName: "Sanjita" },
    { filePath: "sanjita_songs/Tum Se Teri Baaton.mp3", coverPath: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=50&q=80", songTitle: "Tum Se", friendName: "Sanjita" },
    { filePath: "sanjita_songs/Humnava Mere.mp3", coverPath: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=50&q=80", songTitle: "Humnava Mere", friendName: "Sanjita" },

    // ✨ Dipak's Personal Premium Favorites
    { filePath: "dipak_songs/Moh Moh Ke Dhaage Male Dum Laga Ke Haisha.mp3", coverPath: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=50&q=80", songTitle: "Moh Moh Ke Dhaage", friendName: "Dipak" },
    { filePath: "dipak_songs/Tum Hi Ho Aashiqui 2.mp3", coverPath: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=50&q=80", songTitle: "Tum Hi Ho", friendName: "Dipak" },
    { filePath: "dipak_songs/Kaun Mera Special 26.mp3", coverPath: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=50&q=80", songTitle: "Kaun Mera", friendName: "Dipak" },
    { filePath: "dipak_songs/Hawayein.mp3", coverPath: "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=50&q=80", songTitle: "Hawayein", friendName: "Dipak" },
    { filePath: "dipak_songs/Zaalima.mp3", coverPath: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=50&q=80", songTitle: "Zaalima", friendName: "Dipak" }
];

// NEW: We need a variable to track which list is currently showing
let currentSongs = [...songs];

// 3. Render Playlist Layout (NEW: Wrapped in a function so we can refresh it)
function loadPlaylist() {
    if (songItemContainer) {
        songItemContainer.innerHTML = ""; // Clear old songs
        currentSongs.forEach((element, i) => {
            let songHTML = `
                <div class="songItem" onclick="playSpecificSong(${i})">
                    <img src="${element.coverPath}" alt="cover">
                    <span class="songName" style="font-weight: 500; font-size: 14px;">
                        ${element.songTitle} <br><small style="color:gray;">(${element.friendName})</small>
                    </span>
                    <span class="timestamp">
                        <i id="mini-${i}" class="fa-solid fa-circle-play songItemPlay"></i>
                    </span>
                </div>
            `;
            songItemContainer.innerHTML += songHTML;
        });
    }
}

// NEW: Function to filter the songs when a button is clicked
function showFavorites(friend) {
    if (friend === 'All') {
        currentSongs = [...songs]; // Show everything
    } else {
        currentSongs = songs.filter(song => song.friendName === friend); // Filter by friend
    }
    loadPlaylist(); // Refresh the screen
}

// Run this once when the page loads
loadPlaylist();


function formatTime(seconds) {
    if (isNaN(seconds) || seconds === Infinity) return "0:00";
    let mins = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);
    if (secs < 10) secs = "0" + secs;
    return `${mins}:${secs}`;
}

// 4. Handle Master Main Playback Switch Action Input Click 
if (masterPlay) {
    masterPlay.addEventListener('click', () => {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            if (!audioElement.src) {
                playSpecificSong(0);
            } else {
                audioElement.play().catch(err => console.log(err));
                masterPlay.classList.replace('fa-circle-play', 'fa-circle-pause');
                if (gif) gif.style.opacity = 1;
                updateMiniButtons();
            }
        } else {
            audioElement.pause();
            masterPlay.classList.replace('fa-circle-pause', 'fa-circle-play');
            if (gif) gif.style.opacity = 0;
            resetAllMiniIcons();
        }
    });
}

audioElement.addEventListener('loadedmetadata', () => {
    if (totalTimeDisplay) {
        totalTimeDisplay.innerText = formatTime(audioElement.duration);
    }
});

// 5. Update Time Tracking Visual Elements on tick
audioElement.addEventListener('timeupdate', () => {
    if (audioElement.duration) {
        let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
        if (myProgressBar) myProgressBar.value = progress;
        if (currentTimeDisplay) currentTimeDisplay.innerText = formatTime(audioElement.currentTime);
    }
});

if (myProgressBar) {
    myProgressBar.addEventListener('input', () => {
        if (audioElement.duration) {
            audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
        }
    });
}

// 6. Interactive Volume Handling Code Configurations
if (volumeSlider) {
    volumeSlider.addEventListener('input', () => {
        let val = volumeSlider.value;
        audioElement.volume = val / 100;
        if (val == 0) {
            volumeIcon.className = "fa-solid fa-volume-xmark";
        } else if (val < 50) {
            volumeIcon.className = "fa-solid fa-volume-low";
        } else {
            volumeIcon.className = "fa-solid fa-volume-high";
        }
    });
}

// 7. Icon Toggles
function resetAllMiniIcons() {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
}

function updateMiniButtons() {
    resetAllMiniIcons();
    let currentIcon = document.getElementById(`mini-${songIndex}`);
    if (currentIcon) {
        currentIcon.classList.remove('fa-circle-play');
        currentIcon.classList.add('fa-circle-pause');
    }
}

// 8. Track Main Audio Dispatch Trigger Engine
function playSpecificSong(index) {
    songIndex = index;
    audioElement.src = currentSongs[index].filePath; // NEW: changed 'songs' to 'currentSongs'

    // NEW: Show the actual song name and friend at the bottom
    if (masterSongName) masterSongName.innerText = currentSongs[index].songTitle;

    audioElement.currentTime = 0;
    if (totalTimeDisplay) totalTimeDisplay.innerText = "0:00";

    audioElement.play()
        .then(() => {
            if (gif) gif.style.opacity = 1;
            if (masterPlay) masterPlay.classList.replace('fa-circle-play', 'fa-circle-pause');
            updateMiniButtons();
        })
        .catch(error => {
            console.error("Playback execution block notice: ", error);
        });
}

// 9. Playback List Navigations
let nextBtn = document.getElementById('next');
if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        songIndex = (songIndex >= currentSongs.length - 1) ? 0 : songIndex + 1; // NEW: changed to currentSongs
        playSpecificSong(songIndex);
    });
}

let prevBtn = document.getElementById('previous');
if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        songIndex = (songIndex <= 0) ? currentSongs.length - 1 : songIndex - 1; // NEW: changed to currentSongs
        playSpecificSong(songIndex);
    });
}

audioElement.addEventListener('ended', () => {
    if (nextBtn) nextBtn.click();
});

// 10. NEW: Search Bar Logic Engine
function searchSongs() {
    let query = document.getElementById('searchInput').value.toLowerCase();

    // Filter the master list by either Song Title OR Friend's Name
    currentSongs = songs.filter(song =>
        song.songTitle.toLowerCase().includes(query) ||
        song.friendName.toLowerCase().includes(query)
    );

    // Reload the screen with the filtered results
    loadPlaylist();
}
