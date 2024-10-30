@ECHO OFF

:: start both servers in production mode

START cmd /k "cd ./website/server && node ./app.js"

START cmd /k "cd ./website/client/retro_game_HoF-vite && npm run build && npm run preview"

:: default state
START http://localhost:4173