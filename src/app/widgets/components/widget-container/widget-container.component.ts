import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    imports: [CommonModule],
    selector: 'app-widget-container',
    standalone: true,
    styleUrls: ['./widget-container.component.scss'],
    templateUrl: './widget-container.component.html',
})
export class WidgetContainerComponent { }
