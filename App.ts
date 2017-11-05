import { app, BrowserWindow } from 'electron';
import Main from './src/Main';


const main = new Main();
let browserWindow: BrowserWindow = undefined;

app.on('ready', () => {
    browserWindow = main.createApplicationWindow();
});

app.on("window-all-closed", () => {
    if (process.platform !== 'darwin'){
        app.quit();
    }
});