import { Component } from '@angular/core';
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
export class AppComponent {
    public title: string = 'widgets-dashboard';
}
