# Retro-Game-Hall-of-Fame
Hall of fame website with wireframe. Created for school project

Website has main website for showing all games/events, and a game site for showing hall of fame for top scores etc.

## running

### backend
1. run `npm install` at `website/server`

2. create `.env` file at the server root

The env file has the next variables:
```ini
# backend port
PORT = 3030

# URI to mongodb server. Please specify the collection as well (not just cluster)
MONGODB_URI = '<mongodb uri>'
```

3. run developement server with `npm run dev`

### frontend
1. run `npm install` at `website/client/retro_game_HoF-vite`

2. create `.env` file to the vite app root

The env has the next variables:
```ini
# address to backend. Change if necessary
# the default api opens at /api
VITE_API_URL = http://localhost:3030/api
```

3. run developement server with `npm run dev`

## building

The backend server does not currently support frontend hosting, so you will need to open them seperately.

You can build frontend with command `npm run build`

The backend server can be run with `node app.js`

## used libraries

libraries / dependencies used in build version.

### frontend

```
react ^18.3.1
react-dom ^18.3.1
react-router-dom ^6.26.2
```

### backend

```
cors ^2.8.5
dotenv ^16.4.5
express ^4.21.0
fs ^0.0.1-security
mongoose ^8.7.0
path ^0.12.7
```