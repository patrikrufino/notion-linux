const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    icon:'icon.png',
    webPreferences: {
      nodeIntegration: false, // É recomendável manter esta opção como false para melhor segurança.
      contextIsolation: true,
      enableRemoteModule: false,
      preload: __dirname + '/preload.js'
    }
  })

  win.loadURL('https://www.notion.so/login')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
