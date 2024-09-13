import { Component } from '@angular/core';

@Component({
    selector: 'app-linter',
    standalone: true,
    imports: [],
    templateUrl: './linter.component.html',
    styleUrl: './linter.component.css',
})
export class LinterComponent {
    message: string = 'All files passed linting';

    displayMsg(msg: string): string {
        return msg;
    }
}
