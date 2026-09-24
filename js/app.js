/* =========================================================
   CONFIG — edit everything here without touching the rest
   ========================================================= */
const CONFIG = {
  musicPath: "assets/audio/music.mp3",
  videoPath: "assets/video/proposal.mp4",

  // Lines shown one by one before the video starts.
  videoIntroLines: [
    "Ладно...",
    "Теперь серьёзно.",
    "Я кое-что приготовил для тебя."
  ],

  // Memory photos (screenshots of chats, memes, funny pics) that pop
  // up and fade out around the edges of the screen while the video
  // plays. Just list the files — add or remove as many as you want.
videoPhotos: [
  "assets/images/memories/photo-01.jpg",
  "assets/images/memories/photo-02.jpg",
  "assets/images/memories/photo-03.jpg",
  "assets/images/memories/photo-04.jpg",
  "assets/images/memories/photo-05.jpg",
  "assets/images/memories/photo-06.jpg",
  "assets/images/memories/photo-07.jpg",
  "assets/images/memories/photo-08.jpg",
  "assets/images/memories/photo-09.jpg",
  "assets/images/memories/photo-10.jpg",
  "assets/images/memories/photo-11.jpg",
  "assets/images/memories/photo-12.jpg",
  "assets/images/memories/photo-13.jpg",
  "assets/images/memories/photo-14.jpg",
  "assets/images/memories/photo-15.jpg",
  "assets/images/memories/photo-16.jpg",
  "assets/images/memories/photo-17.jpg",
  "assets/images/memories/photo-18.jpg",
  "assets/images/memories/photo-19.jpg",
  "assets/images/memories/photo-20.jpg",
  "assets/images/memories/photo-21.jpg",
  "assets/images/memories/photo-22.jpg",
  "assets/images/memories/photo-23.jpg",
  "assets/images/memories/photo-24.jpg",
  "assets/images/memories/photo-25.jpg",
  "assets/images/memories/photo-26.jpg",
  "assets/images/memories/photo-27.jpg",
  "assets/images/memories/photo-28.jpg",
  "assets/images/memories/photo-29.jpg",
  "assets/images/memories/photo-30.jpg",
  "assets/images/memories/photo-31.jpg",
  "assets/images/memories/photo-32.jpg",
  "assets/images/memories/photo-33.jpg",
  "assets/images/memories/photo-34.jpg",
  "assets/images/memories/photo-35.jpg",
  "assets/images/memories/photo-36.jpg",
  "assets/images/memories/photo-37.jpg",
  "assets/images/memories/photo-38.jpg",
  "assets/images/memories/photo-39.jpg",
  "assets/images/memories/photo-40.jpg",
  "assets/images/memories/photo-41.jpg",
  "assets/images/memories/photo-42.jpg",
  "assets/images/memories/photo-43.jpg",
  "assets/images/memories/photo-44.jpg",
  "assets/images/memories/photo-45.jpg",
  "assets/images/memories/photo-46.jpg",
  "assets/images/memories/photo-47.jpg",
  "assets/images/memories/photo-48.jpg",
  "assets/images/memories/photo-49.jpg",
  "assets/images/memories/photo-50.jpg",
  "assets/images/memories/photo-51.jpg",
  "assets/images/memories/photo-52.jpg",
  "assets/images/memories/photo-53.jpg",
  "assets/images/memories/photo-54.jpg",
  "assets/images/memories/photo-55.jpg",
  "assets/images/memories/photo-56.jpg",
  "assets/images/memories/photo-57.jpg",
  "assets/images/memories/photo-58.jpg",
  "assets/images/memories/photo-59.jpg",
  "assets/images/memories/photo-60.jpg",
  "assets/images/memories/photo-61.jpg",
  "assets/images/memories/photo-62.jpg",
  "assets/images/memories/photo-63.jpg",
  "assets/images/memories/photo-64.jpg",
  "assets/images/memories/photo-65.jpg",
  "assets/images/memories/photo-66.jpg",
  "assets/images/memories/photo-67.jpg",
  "assets/images/memories/photo-68.jpg",
  "assets/images/memories/photo-69.jpg",
  "assets/images/memories/photo-70.jpg",
  "assets/images/memories/photo-71.jpg",
  "assets/images/memories/photo-72.jpg",
  "assets/images/memories/photo-73.jpg",
  "assets/images/memories/photo-74.jpg",
  "assets/images/memories/photo-75.jpg",
  "assets/images/memories/photo-76.jpg",
  "assets/images/memories/photo-77.jpg",
  "assets/images/memories/photo-78.jpg",
  "assets/images/memories/photo-79.jpg",
  "assets/images/memories/photo-80.jpg",
  "assets/images/memories/photo-81.jpg",
  "assets/images/memories/photo-82.jpg",
  "assets/images/memories/photo-83.jpg",
  "assets/images/memories/photo-84.jpg",
  "assets/images/memories/photo-85.jpg",
  "assets/images/memories/photo-86.jpg",
  "assets/images/memories/photo-87.jpg"
],

  // How often a new photo appears while the video is playing (ms).
  photoSpawnInterval: 2500,
  // How long a single photo stays on screen (ms).
  photoLifetime: 7000,
  // Longest side a photo is allowed to reach (px) — each photo then
  // keeps its own natural proportions within that limit, no forced
  // square crop.
  photoMaxSize: 300,
  // Multiplier applied on top of photoMaxSize to scale ALL photos
  // up or down at once. 1 = normal, 1.4 = 40% bigger, 0.7 = smaller.
  photoScale: 1,

  // Lines shown one by one before the main question.
  questionIntroLines: [
    "У меня к тебе один вопрос...",
    "И он довольно важный."
  ],

  mainQuestion: "Ты будешь моей девушкой? ❤️",

  // Messages that appear next to the runaway "Нет" button, in order.
  noButtonMessages: [
    "Хм... не туда 😏",
    "Ты точно уверена?",
    "Я начинаю подозревать неладное...",
    "Эта кнопка явно не хочет, чтобы ты её нажимала."
  ],

  finalMessage: "Теперь это официально ❤️",
  finalSubMessage: "Спасибо, что прошла этот маленький квест. ",
  finalImage: "assets/images/funny-04.png"
};

/* =========================================================
   STATE / ELEMENT REFS
   ========================================================= */
const stages = ["welcome", "video", "gift", "question", "success"];
let currentStageIndex = 0;

const app = document.getElementById("app");
const stageEls = {};
stages.forEach((s) => { stageEls[s] = document.getElementById("stage-" + s); });

const music = document.getElementById("bg-music");
const soundToggle = document.getElementById("sound-toggle");
let musicStarted = false;
let musicMuted = false;

/* =========================================================
   STAGE TRANSITIONS
   ========================================================= */
function goToStage(name) {
  const fromEl = stageEls[stages[currentStageIndex]];
  const toEl = stageEls[name];
  if (!toEl || fromEl === toEl) return;

  fromEl.classList.add("stage--leaving");
  fromEl.classList.remove("stage--active");

  window.setTimeout(() => {
    fromEl.classList.remove("stage--leaving");
    fromEl.style.display = "";
  }, 480);

  toEl.classList.add("stage--active", "stage--entering");
  window.setTimeout(() => toEl.classList.remove("stage--entering"), 650);

  currentStageIndex = stages.indexOf(name);
  updateProgressDots(name);
}

function updateProgressDots(name) {
  const dots = document.querySelectorAll(".progress .dot");
  const order = ["welcome", "video", "gift", "question"];
  const idx = order.indexOf(name);
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === idx);
    dot.classList.toggle("done", idx > -1 && i < idx);
  });
}

/* =========================================================
   MUSIC
   ========================================================= */
function startMusic() {
  if (musicStarted) return;
  musicStarted = true;
  music.volume = 0.55;
  music.play().catch(() => {
    // Autoplay might still be blocked; the toggle button lets the
    // user start it manually.
  });
  soundToggle.textContent = "🔊";
  musicMuted = false;
}

soundToggle.addEventListener("click", () => {
  if (!musicStarted) {
    startMusic();
    return;
  }
  musicMuted = !musicMuted;
  music.muted = musicMuted;
  soundToggle.textContent = musicMuted ? "🔇" : "🔊";
});

/* =========================================================
   1. WELCOME
   ========================================================= */
document.getElementById("btn-start").addEventListener("click", () => {
  startMusic();
  initVideoStage();
  goToStage("video");
});

/* =========================================================
   2. VIDEO + FLOATING MEMORY PHOTOS
   ========================================================= */
const videoIntroEl = document.getElementById("video-intro");
const videoIntroTextEl = document.getElementById("video-intro-text");
const videoWrapEl = document.getElementById("video-wrap");
const proposalVideo = document.getElementById("proposal-video");
const btnVideoNext = document.getElementById("btn-video-next");
const videoPhotosEl = document.getElementById("video-photos");

let photoSpawnTimer = null;
let usedPhotoIndexes = [];

function initVideoStage() {
  videoIntroEl.classList.remove("hidden");
  videoWrapEl.classList.add("hidden");
  btnVideoNext.classList.add("hidden");

  let lineIndex = 0;
  videoIntroTextEl.textContent = CONFIG.videoIntroLines[0] || "";
  videoIntroTextEl.classList.remove("fade-up");
  void videoIntroTextEl.offsetWidth;
  videoIntroTextEl.classList.add("fade-up");

  const interval = window.setInterval(() => {
    lineIndex += 1;
    if (lineIndex >= CONFIG.videoIntroLines.length) {
      window.clearInterval(interval);
      window.setTimeout(showVideo, 900);
      return;
    }
    videoIntroTextEl.textContent = CONFIG.videoIntroLines[lineIndex];
    videoIntroTextEl.classList.remove("fade-up");
    void videoIntroTextEl.offsetWidth;
    videoIntroTextEl.classList.add("fade-up");
  }, 1500);
}

function showVideo() {
  videoIntroEl.classList.add("hidden");
  videoWrapEl.classList.remove("hidden");
  startPhotoSpawner();
}

/* --- Floating photos: appear near the edges (top / bottom / left /
   right), stay a few seconds, fade out. Spawning and every photo's
   own animation both freeze while the video is paused, so nothing
   moves and nothing new pops up until playback resumes. --- */
function pickNextPhoto() {
  const pool = CONFIG.videoPhotos;
  if (!pool || pool.length === 0) return null;
  if (usedPhotoIndexes.length >= pool.length) usedPhotoIndexes = [];

  let idx;
  do {
    idx = Math.floor(Math.random() * pool.length);
  } while (usedPhotoIndexes.includes(idx) && usedPhotoIndexes.length < pool.length);

  usedPhotoIndexes.push(idx);
  return pool[idx];
}

// Photos currently on screen — {x, y, w, h} — so a new one can check
// it isn't about to land on top of one already there.
let activePhotos = [];

const PHOTO_MARGIN = 10;
const PHOTO_GAP = 16; // minimum breathing room between two photos
const VIDEO_PADDING = 26; // keep photos this far from the video itself

function rectsOverlap(a, b) {
  return !(a.right < b.left || a.left > b.right || a.bottom < b.top || a.top > b.bottom);
}

function getVideoExclusionRect() {
  const rect = proposalVideo.getBoundingClientRect();
  return {
    left: rect.left - VIDEO_PADDING,
    top: rect.top - VIDEO_PADDING,
    right: rect.right + VIDEO_PADDING,
    bottom: rect.bottom + VIDEO_PADDING
  };
}

// Tries random spots and only accepts one that overlaps neither the
// video nor any photo already on screen. If nothing free turns up
// after a bunch of tries (screen too small / too many photos already
// showing / photo too large), it gives up instead of forcing an
// overlapping placement — that spawn is simply skipped.
function findFreeSpot(size) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const exclusion = getVideoExclusionRect();
  const maxX = vw - size - PHOTO_MARGIN;
  const maxY = vh - size - PHOTO_MARGIN;

  if (maxX <= PHOTO_MARGIN || maxY <= PHOTO_MARGIN) return null;

  for (let attempt = 0; attempt < 40; attempt += 1) {
    const x = PHOTO_MARGIN + Math.random() * (maxX - PHOTO_MARGIN);
    const y = PHOTO_MARGIN + Math.random() * (maxY - PHOTO_MARGIN);
    const candidate = { left: x, top: y, right: x + size, bottom: y + size };

    if (rectsOverlap(candidate, exclusion)) continue;

    const collides = activePhotos.some((p) => rectsOverlap(candidate, {
      left: p.x - PHOTO_GAP,
      top: p.y - PHOTO_GAP,
      right: p.x + p.w + PHOTO_GAP,
      bottom: p.y + p.h + PHOTO_GAP
    }));
    if (collides) continue;

    return { x, y };
  }

  return null;
}

function spawnFloatPhoto() {
  const src = pickNextPhoto();
  if (!src) return;

  const baseMax = window.innerWidth < 480 ? 110 : CONFIG.photoMaxSize;
  const maxSize = baseMax * (CONFIG.photoScale || 1);

  const spot = findFreeSpot(maxSize);
  if (!spot) return; // no free, non-overlapping spot right now — skip this round

  const rot = (Math.random() * 16 - 8).toFixed(1);

  const img = document.createElement("img");
  img.src = src;
  img.alt = "";
  img.className = "float-photo";
  img.style.left = spot.x + "px";
  img.style.top = spot.y + "px";
  img.style.setProperty("--fp-max", maxSize + "px");
  img.style.setProperty("--fp-rot", rot + "deg");
  img.style.animationDuration = CONFIG.photoLifetime + "ms";

  img.addEventListener("error", () => img.remove());

  videoPhotosEl.appendChild(img);

  const record = { x: spot.x, y: spot.y, w: maxSize, h: maxSize };
  activePhotos.push(record);

  window.setTimeout(() => {
    img.remove();
    activePhotos = activePhotos.filter((p) => p !== record);
  }, CONFIG.photoLifetime + 50);
}

function startPhotoSpawner() {
  stopPhotoSpawner();
  spawnFloatPhoto();
  photoSpawnTimer = window.setInterval(spawnFloatPhoto, CONFIG.photoSpawnInterval);
}

function stopPhotoSpawner() {
  if (photoSpawnTimer) {
    window.clearInterval(photoSpawnTimer);
    photoSpawnTimer = null;
  }
}

function pausePhotos() {
  videoPhotosEl.classList.add("paused");
  stopPhotoSpawner();
}

function resumePhotos() {
  videoPhotosEl.classList.remove("paused");
  startPhotoSpawner();
}

proposalVideo.addEventListener("play", resumePhotos);
proposalVideo.addEventListener("pause", pausePhotos);

proposalVideo.addEventListener("ended", () => {
  pausePhotos();
  btnVideoNext.classList.remove("hidden");
});

btnVideoNext.addEventListener("click", () => {
  stopPhotoSpawner();
  videoPhotosEl.innerHTML = "";
  activePhotos = [];
  goToStage("gift");
});

/* =========================================================
   3. GIFT
   ========================================================= */
const giftBox = document.getElementById("gift-box");
const giftParticles = document.getElementById("gift-particles");
let giftOpened = false;

giftBox.addEventListener("click", () => {
  if (giftOpened) return;
  giftOpened = true;
  giftBox.classList.add("opened");
  spawnGiftParticles();

  window.setTimeout(() => {
    initQuestionStage();
    goToStage("question");
  }, 1400);
});

function spawnGiftParticles() {
  const colors = ["#ff5d8f", "#ff4d6d", "#ffb3cb", "#ffffff"];
  const count = 22;

  for (let i = 0; i < count; i += 1) {
    const p = document.createElement("span");
    p.className = "particle";
    const isHeart = i % 4 === 0;
    const size = isHeart ? 12 : 5 + Math.random() * 5;

    p.style.left = "70px";
    p.style.top = "40px";
    p.style.width = size + "px";
    p.style.height = size + "px";
    p.style.background = isHeart ? "transparent" : colors[i % colors.length];

    if (isHeart) {
      p.textContent = "❤";
      p.style.color = colors[i % colors.length];
      p.style.fontSize = size + "px";
      p.style.lineHeight = "1";
    }

    const angle = Math.random() * Math.PI * 2;
    const distance = 60 + Math.random() * 90;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance - 40;

    p.style.setProperty("--dx", dx + "px");
    p.style.setProperty("--dy", dy + "px");
    p.style.animationDelay = Math.random() * 0.15 + "s";

    giftParticles.appendChild(p);
    requestAnimationFrame(() => p.classList.add("go"));

    window.setTimeout(() => p.remove(), 1400);
  }
}

/* =========================================================
   4. QUESTION
   ========================================================= */
const qLine1 = document.getElementById("q-line1");
const qLine2 = document.getElementById("q-line2");
const qMain = document.getElementById("q-main");
const qButtons = document.getElementById("q-buttons");
const btnYes = document.getElementById("btn-yes");
const btnNo = document.getElementById("btn-no");
const noCaption = document.getElementById("no-caption");
let noAttempts = 0;
let noIsRoaming = false;

function initQuestionStage() {
  qLine1.textContent = CONFIG.questionIntroLines[0] || "";
  qLine2.textContent = CONFIG.questionIntroLines[1] || "";
  qMain.textContent = CONFIG.mainQuestion;

  qLine1.classList.remove("show");
  qLine2.classList.remove("show");
  qMain.classList.remove("show");
  qMain.classList.add("hidden");
  qButtons.classList.add("hidden");
  noCaption.classList.remove("show");
  noCaption.textContent = "";
  noAttempts = 0;
  noIsRoaming = false;
  btnNo.classList.remove("roaming");
  btnNo.style.left = "";
  btnNo.style.top = "";
  btnNo.textContent = "Нет";

  window.setTimeout(() => qLine1.classList.add("show"), 200);
  window.setTimeout(() => qLine2.classList.add("show"), 1300);
  window.setTimeout(() => {
    qMain.classList.remove("hidden");
    qMain.classList.add("show");
    qButtons.classList.remove("hidden");
  }, 2600);
}

function moveNoButton(clientX, clientY) {
  const rect = btnNo.getBoundingClientRect();
  const padding = 16;
  const maxX = window.innerWidth - rect.width - padding;
  const maxY = window.innerHeight - rect.height - padding;

  let best = null;
  let bestDist = -1;
  const yesRect = btnYes.getBoundingClientRect();

  for (let i = 0; i < 8; i += 1) {
    const x = padding + Math.random() * Math.max(1, maxX - padding);
    const y = padding + Math.random() * Math.max(1, maxY - padding);
    const dPointer = Math.hypot(x - clientX, y - clientY);
    const dYes = Math.hypot(
      x + rect.width / 2 - (yesRect.left + yesRect.width / 2),
      y + rect.height / 2 - (yesRect.top + yesRect.height / 2)
    );
    const score = dPointer + (dYes < rect.width * 1.5 ? -9999 : 0);
    if (score > bestDist) {
      bestDist = score;
      best = { x, y };
    }
  }

  if (!best) return;

  if (!noIsRoaming) {
    noIsRoaming = true;
    btnNo.classList.add("roaming");
  }
  btnNo.style.left = best.x + "px";
  btnNo.style.top = best.y + "px";
}

function handleNoEvade(clientX, clientY) {
  moveNoButton(clientX, clientY);

  const msgIndex = Math.min(noAttempts, CONFIG.noButtonMessages.length - 1);
  noCaption.textContent = CONFIG.noButtonMessages[msgIndex];
  noCaption.classList.add("show");
  noAttempts += 1;
}

btnNo.addEventListener("mouseenter", (e) => {
  handleNoEvade(e.clientX, e.clientY);
});

btnNo.addEventListener("pointerdown", (e) => {
  e.preventDefault();
  handleNoEvade(e.clientX, e.clientY);
});

btnNo.addEventListener("touchstart", (e) => {
  e.preventDefault();
  const touch = e.touches[0];
  if (touch) handleNoEvade(touch.clientX, touch.clientY);
}, { passive: false });

btnNo.addEventListener("click", (e) => {
  e.preventDefault();
  handleNoEvade(e.clientX, e.clientY);
});

window.addEventListener("resize", () => {
  if (!noIsRoaming) return;
  const rect = btnNo.getBoundingClientRect();
  const maxX = window.innerWidth - rect.width - 16;
  const maxY = window.innerHeight - rect.height - 16;
  const x = Math.min(parseFloat(btnNo.style.left) || 0, Math.max(0, maxX));
  const y = Math.min(parseFloat(btnNo.style.top) || 0, Math.max(0, maxY));
  btnNo.style.left = x + "px";
  btnNo.style.top = y + "px";
});

btnYes.addEventListener("click", () => {
  goToStage("success");
  window.setTimeout(runSuccessSequence, 250);
});

/* =========================================================
   5. SUCCESS
   ========================================================= */
const finalImgEl = document.getElementById("final-img");
let successRan = false;

function runSuccessSequence() {
  if (successRan) return;
  successRan = true;

  if (CONFIG.finalImage) {
    finalImgEl.src = CONFIG.finalImage;
    finalImgEl.alt = CONFIG.finalMessage;
  }

  launchConfetti();
}

/* --- lightweight canvas confetti, no libraries --- */
function launchConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;

  function resize() {
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();

  const colors = ["#ff5d8f", "#ff4d6d", "#ffb3cb", "#ffffff", "#ffd166"];
  const pieces = [];
  const count = window.innerWidth < 480 ? 70 : 130;

  for (let i = 0; i < count; i += 1) {
    pieces.push({
      x: Math.random() * window.innerWidth,
      y: -20 - Math.random() * window.innerHeight * 0.5,
      size: 5 + Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      speedY: 2 + Math.random() * 3,
      speedX: (Math.random() - 0.5) * 2,
      rotation: Math.random() * 360,
      spin: (Math.random() - 0.5) * 8,
      isHeart: Math.random() < 0.25,
      life: 0
    });
  }

  const duration = 4200;
  const start = performance.now();

  function frame(now) {
    const elapsed = now - start;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    pieces.forEach((p) => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.rotation += p.spin;
      p.life += 1;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;

      if (p.isHeart) {
        drawHeart(ctx, p.size);
      } else {
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      }
      ctx.restore();
    });

    if (elapsed < duration) {
      requestAnimationFrame(frame);
    } else {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }
  }

  requestAnimationFrame(frame);

  window.addEventListener("resize", resize);
}

function drawHeart(ctx, size) {
  const s = size / 10;
  ctx.beginPath();
  ctx.moveTo(0, 2 * s);
  ctx.bezierCurveTo(0, 0, -4 * s, 0, -4 * s, 2 * s);
  ctx.bezierCurveTo(-4 * s, 4 * s, 0, 6 * s, 0, 8 * s);
  ctx.bezierCurveTo(0, 6 * s, 4 * s, 4 * s, 4 * s, 2 * s);
  ctx.bezierCurveTo(4 * s, 0, 0, 0, 0, 2 * s);
  ctx.fill();
}
