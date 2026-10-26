# SafeMission

A standard React + Vite application featuring a video-only header section.

## Features
- **React + Vite setup**
- **Header Section** displaying the background video (`safemissioncroppedvideo.mp4`) with `autoPlay`, `loop`, `muted`, and `playsInline`
- Clean, minimal project structure

## Project Structure
```
SafeMission/
├── public/
│   ├── favicon.svg
│   └── videos/
│       └── safemissioncroppedvideo.mp4
├── src/
│   ├── assets/
│   ├── components/
│   │   └── Header/
│   │       ├── Header.jsx        # Video header component
│   │       └── Header.css        # Header video styles
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Running the Application

```bash
npm run dev
```
