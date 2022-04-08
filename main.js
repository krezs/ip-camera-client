const { app, BrowserWindow } = require("electron");

let appWin;

//This function creates the window and its properties.
createWindow = () => {
    appWin = new BrowserWindow({
        width: 1200,
        height: 800,
        title: "Angular and Electron",
        resizable: false,
        webPreferences: {
            preload: `${app.getAppPath()}/preload.js`
        }
    });
    
    // appWin.loadURL(`file://${__dirname}/dist/index.html`);
    appWin.loadFile(`${__dirname}/dist/index.html`);
    
    appWin.setMenu(null);

    appWin.on("closed", () => {
        appWin = null;
    });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => app.quit());
