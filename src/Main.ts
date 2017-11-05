import { BrowserWindow } from 'electron';

export default class Main {
    constructor(){}

    public createApplicationWindow(): BrowserWindow{
        let browserWindow = new BrowserWindow({width: 800, height: 600});
        browserWindow.loadURL(`file://${__dirname}/index.html`);

        browserWindow.on("closed", () => {
            browserWindow = null;
        });

        return browserWindow;
    }
}