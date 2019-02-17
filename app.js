const { app, BrowserWindow, Menu, MenuItem } = require('electron');
const menu = new Menu();
require('update-electron-app')();

function createWindow () {
    let win = new BrowserWindow({width: 840, height: 600});
    menu.append(new MenuItem({
        label: 'test',
        click: function() { console.log('test menu item activated'); }
    }));
    win.loadFile('docs/index.html');
}

app.on('ready', createWindow);

app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function() {
    if (win === null) {
        createWindow();
    }
});