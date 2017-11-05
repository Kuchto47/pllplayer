import { app, BrowserWindow } from 'electron';
import Main from './src/Main';


const main = new Main();

app.on('ready', () => {
    main.createApplicationWindow();
});

app.on("window-all-closed", () => {
    if (process.platform !== 'darwin'){
        app.quit();
    }
});