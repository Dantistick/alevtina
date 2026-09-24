# Квест ❤️ — интерактивный романтический сайт

Чистый HTML + CSS + Vanilla JS. Без React, npm, сборщиков и бэкенда.

## Структура

```
my-site/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
└── assets/
    ├── images/
    │   ├── memories/   photo-01.jpg ... photo-06.jpg (всплывают во время видео)
    │   └── funny-04.png (финальная картинка)
    ├── video/    proposal.mp4
    └── audio/    music.mp3
```

## 1. Добавь свои файлы

- Фоточки, которые будут всплывать по краям экрана во время видео (скрины переписок, мемы): `assets/images/memories/photo-01.jpg` ... `photo-06.jpg`
- Финальная картинка на экране SUCCESS: `assets/images/funny-04.png`
- Видео: `assets/video/proposal.mp4`
- Музыка: `assets/audio/music.mp3`

Если какого-то файла не будет — сайт всё равно откроется, просто соответствующая картинка/видео/аудио не отобразится, без падения сайта.

## 2. Меняй тексты и список фото

Всё содержимое — в самом начале `js/app.js`, в объекте `CONFIG`:

```javascript
const CONFIG = {
  musicPath: "assets/audio/music.mp3",
  videoPath: "assets/video/proposal.mp4",
  videoIntroLines: [...],
  videoPhotos: [
    "assets/images/memories/photo-01.jpg",
    "assets/images/memories/photo-02.jpg",
    ...
  ],
  photoSpawnInterval: 1600,   // как часто появляется новое фото (мс)
  photoLifetime: 5000,        // сколько фото остаётся на экране (мс)
  questionIntroLines: [...],
  mainQuestion: "...",
  noButtonMessages: [...],
  finalMessage: "...",
  finalSubMessage: "...",
  finalImage: "..."
};
```

Чтобы добавить ещё фото в ротацию во время видео, просто добавь путь в массив `videoPhotos`.

## 3. Как работают всплывающие фото во время видео

Пока видео играет, `js/app.js` каждые `photoSpawnInterval` мс создаёт одну картинку из `videoPhotos` в случайном месте по краям экрана (сверху, снизу, слева, справа — центр, где стоит видео, не занимается), она плавно появляется, держится `photoLifetime` мс и исчезает.

Как только видео ставится на паузу — и появление новых фото, и анимация уже показанных останавливаются на месте (через `animation-play-state: paused`), чтобы можно было спокойно рассмотреть, что на них. При продолжении просмотра всё возобновляется.

## 4. Запусти локально

Просто открой `index.html` двойным кликом — сайт статический и работает без сервера.
(В некоторых браузерах видео/аудио с `file://` может грузиться со странностями — тогда запусти локальный сервер: `python3 -m http.server`, затем открой `http://localhost:8000`.)

## 5. Залей на GitHub

```bash
cd my-site
git init
git add .
git commit -m "первый коммит"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY-NAME.git
git push -u origin main
```

## 6. Включи GitHub Pages

1. Открой репозиторий на GitHub → **Settings** → **Pages**.
2. В **Source** выбери ветку `main` и папку `/ (root)`.
3. Сохрани — через минуту сайт будет доступен по адресу:

```
https://USERNAME.github.io/REPOSITORY-NAME/
```

Все пути в проекте относительные (`assets/...`), поэтому сайт корректно заработает в подпапке `github.io/REPOSITORY-NAME/`.

## Заметки по реализации

- Экраны (`welcome → video → gift → question → success`) — `<section>` внутри одной страницы; переходы делает JS, без перезагрузки.
- Музыка запускается по клику на "Начать просмотр" и продолжает играть на всех этапах; кнопка 🔊/🔇 в углу — вкл/выкл.
- Фото-воспоминания всплывают по краям экрана во время видео и синхронизированы с play/pause видео.
- Кнопка "Нет" использует Pointer Events (`pointerdown`) + `touchstart` + `mouseenter`, убегает одинаково на десктопе и на телефоне, не выходит за пределы экрана.
- Конфетти на финальном экране нарисовано вручную на `<canvas>`, без библиотек.
