import { loadRemoteModule } from '@angular-architects/module-federation';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
    AfterViewInit, Component, EnvironmentInjector, inject,
    ViewChild, ViewContainerRef
} from '@angular/core';
import { ReactWrapperComponent } from '../react-wrapper/react-wrapper.component';
import { WidgetContainerComponent } from '../widget-container/widget-container.component';

@Component({
    imports: [
        CommonModule,
        HttpClientModule,
        WidgetContainerComponent,
        ReactWrapperComponent,
    ],
    selector: 'app-widget-host',
    standalone: true,
    styleUrls: ['./widget-host.component.scss'],
    templateUrl: './widget-host.component.html',
})
export class WidgetHostComponent implements AfterViewInit {
    @ViewChild('vc', { read: ViewContainerRef, static: true }) public vc!: ViewContainerRef;

    @ViewChild('vc2', { read: ViewContainerRef, static: true }) public vc2!: ViewContainerRef;

    private _envInjector: EnvironmentInjector = inject(EnvironmentInjector);

    public async ngAfterViewInit(): Promise<void> {
        await this._loadNewsWidgetModule();
        await this._loadCurrencyWidgetModule();
    }

    private async _loadNewsWidgetModule(): Promise<void> {
        const remoteNewsModule = await loadRemoteModule({
            exposedModule: './NewsWidgetComponent',
            remoteEntry: 'http://localhost:4201/remoteEntry.js',
            type: 'module',
        });
        const newsWidgetComponent = remoteNewsModule.NewsWidgetComponent;

        this.vc.createComponent(newsWidgetComponent, {
            environmentInjector: this._envInjector,
        });
    }

    private async _loadCurrencyWidgetModule(): Promise<void> {
        const remoteCurrencyModule = await loadRemoteModule({
            exposedModule: './CurrencyWidget',
            remoteEntry: 'http://localhost:4202/remoteEntry.js',
            remoteName: 'currencyWidget',
            type: 'script',
        });
        const currencyWidget = remoteCurrencyModule.CurrencyWidget;
        const componentRef = this.vc2.createComponent(ReactWrapperComponent, {
            injector: this._envInjector,
        });

        componentRef.instance.component = currencyWidget;
    }
}
