@ECHO OFF

:: start both servers in dev mode

START cmd /k "cd ./website/server && npm run dev"

START cmd /k "cd ./website/client/retro_game_HoF-vite && npm run dev"

:: open default browser as well
START http://localhost:5173/