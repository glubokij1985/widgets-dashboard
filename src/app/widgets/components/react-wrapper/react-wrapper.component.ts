import { Component, ElementRef, Input, OnInit } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

@Component({
    selector: 'react-wrapper',
    standalone: true,
    styleUrls: ['./react-wrapper.component.scss'],
    templateUrl: './react-wrapper.component.html',
})
export class ReactWrapperComponent implements OnInit {
    @Input() public component: any;

    @Input() public props: any;

    constructor(private _hostRef: ElementRef) { }

    public ngOnInit(): void {
        if (this.component) {
            const root = ReactDOM.createRoot(this._hostRef.nativeElement.firstChild);

            root.render(React.createElement(this.component, this.props));
        }
    }
}