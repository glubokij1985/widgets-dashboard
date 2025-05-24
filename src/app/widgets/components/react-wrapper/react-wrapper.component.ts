import {
    AfterViewInit, Component, ElementRef, Input, OnDestroy,
    ViewChild
} from '@angular/core';
import * as React from 'react';
import { createRoot, Root } from 'react-dom/client';

@Component({
    selector: 'react-wrapper',
    standalone: true,
    styleUrls: ['./react-wrapper.component.scss'],
    templateUrl: './react-wrapper.component.html',
})
export class ReactWrapperComponent implements AfterViewInit, OnDestroy {
    @ViewChild('container', { static: true }) public containerRef!: ElementRef;

    @Input() public component!: React.ComponentType;

    private _root!: Root;

    public ngAfterViewInit(): void {
        this._root = createRoot(this.containerRef.nativeElement);
        this._root.render(React.createElement(this.component));
    }

    public ngOnDestroy(): void {
        this._root?.unmount();
    }
}