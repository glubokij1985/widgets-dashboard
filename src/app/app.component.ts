import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WidgetHostComponent } from './widgets/components/widget-host/widget-host.component';

@Component({
    imports: [
        RouterOutlet,
        WidgetHostComponent,
    ],
    selector: 'app-root',
    styleUrl: './app.component.scss',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    public ngOnInit(): void {
        this._loadRemoteNewsWidgetStyles();
        this._loadRemoteNewsWidgetFonts();
    }

    private _loadRemoteNewsWidgetStyles(): void {
        const link = document.createElement('link');

        link.rel = 'stylesheet';
        link.href = 'http://localhost:4201/styles.css';
        document.head.appendChild(link);
    }

    private _loadRemoteNewsWidgetFonts(): void {
        const fontLink = document.createElement('link');

        fontLink.rel = 'stylesheet';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Space+Mono&display=swap';
        document.head.appendChild(fontLink);
    }
}
