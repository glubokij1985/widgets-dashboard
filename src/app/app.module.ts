import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WidgetsModule } from './widgets/widgets.module';

@NgModule({
    imports: [
        BrowserModule,
        WidgetsModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
