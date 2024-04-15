const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

function createMainWindow() {
  const mainWIndow = new BrowserWindow({
    title: 'Electron',
    width: 1000,
    height: 600,
    webPreferences: {webSecurity: false}
  });
  mainWIndow.webContents.openDevTools();
  const startUrl = url.format({
    pathname: path.join(__dirname, './app/build/index.html'),
    protocol: 'file',
  });
  mainWIndow.loadURL(startUrl);
}

app.whenReady().then(createMainWindow);
