import { loadRemoteModule } from '@angular-architects/module-federation';
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';

@Component({
    imports: [CommonModule],
    selector: 'app-widget-host',
    standalone: true,
    styleUrls: ['./widget-host.component.scss'],
    templateUrl: './widget-host.component.html',
})
export class WidgetHostComponent implements AfterViewInit {
    public newsWidget: unknown;

    public async ngAfterViewInit(): Promise<void> {
        const newsWidgetModule = await loadRemoteModule({
            exposedModule: './NewsWidgetComponent',
            remoteEntry: 'http://localhost:4201/remoteEntry.js',
            type: 'module',
        });

        this.newsWidget = newsWidgetModule.NewsWidgetComponent;
    }
}
