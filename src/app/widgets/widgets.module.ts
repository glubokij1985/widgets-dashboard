import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { WidgetHostComponent } from './components/widget-host/widget-host.component';

@NgModule({
    exports: [WidgetHostComponent],
    imports: [
        CommonModule,
        WidgetHostComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WidgetsModule { }
