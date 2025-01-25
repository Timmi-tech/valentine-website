// Unmute and play background music once the page loads
window.addEventListener('load', () => {
  const music = document.getElementById('backgroundMusic');
  music.muted = false; // Unmute the audio
});

const hearts = [];
const pinks = ["#ff748c", "#ff8da1", "#ffa7b6"];

class Heart {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.theta = Math.random() * Math.PI * 2;
    const heartEl = document.createElement("div");
    heartEl.classList.add("heart");
    document.body.append(heartEl);
    const color = pinks[parseInt(Math.random() * pinks.length)];
    heartEl.style.background = color;
    
    const heartLeftEl = document.createElement("div");
    heartLeftEl.classList.add('left');
    heartLeftEl.style.background = color;
    heartEl.appendChild(heartLeftEl);
    
    const heartRightEl = document.createElement("div");
    heartRightEl.classList.add('right');
    heartRightEl.style.background = color;
    heartEl.appendChild(heartRightEl);
    
    this.el = heartEl;
    
    setTimeout(() => {
      this.el.remove();
      this.hearts.splice(this.hearts.indexOf(this));
    }, 10000)
  }

  update() {
    this.x += Math.cos(this.theta) * 1;
    this.y += 1;
    this.theta += 0.01;
    this.el.style.left = `${this.x}px`;
    this.el.style.top = `${this.y}px`;
  }
}

setInterval(() => {
  const heart = new Heart(Math.random() * window.innerWidth, -100);
  hearts.push(heart);
}, 200);

setInterval(() => {
  hearts.forEach((heart) => heart.update());
}, 10);

const music = document.getElementById('background-music');
music.volume = 0.5; // Adjust volume as needed
music.play();

// Show Popup
function showPopup() {
  const popup = document.getElementById('popup');
  popup.classList.add('active');
  createCelebrationEffect();
}

// Close Popup
function closePopup() {
  const popup = document.getElementById('popup');
  popup.classList.remove('active');
}
