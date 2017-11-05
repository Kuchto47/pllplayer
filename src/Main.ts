import { BrowserWindow } from 'electron';
import * as url from "url";
import * as path from "path";
import Resources from './Resources';

export default class Main {
    private rootBrowserWindow: BrowserWindow;

    constructor(){}

    public createApplicationWindow(): void{
        let rootWinOptions = {
            width: Resources.resolutions.defaultRootWindow.width,
            height: Resources.resolutions.defaultRootWindow.height,
            title: Resources.resolutions.defaultRootWindow.title
        };

        this.rootBrowserWindow = new BrowserWindow(rootWinOptions);

        this.loadContent();
        this.registerListenersForRootWindow();
    }

    public getRootBrowserWindow(){
        return this.rootBrowserWindow;
    }

    private loadContent(){
        this.rootBrowserWindow.loadURL(url.format({
            pathname: path.join(__dirname, 'index.html'),
            protocol: 'file:',
            slashes: true
        }));
    }

    private registerListenersForRootWindow(){
        this.rootBrowserWindow.on("closed", () => {
            this.rootBrowserWindow = null;
        });

        //before forced shut-down/restart of pc
        this.rootBrowserWindow.on("session-end", () => {});

        //when window is minimized
        this.rootBrowserWindow.on("minimize", () => {});

        //when window is restored from minimized
        this.rootBrowserWindow.on("restore", () => {});
    }
}