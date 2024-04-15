const { contextBridge } = require('electron');
const os = require('os');

contextBridge.exposeInMainWorld('electron', {
  homeDir: () => os.homedir(),
  osVersion: () => os.version(),
  arch: () => os.arch(),
  
});
