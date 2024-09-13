import { Component, OnInit } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { LinterComponent } from './linter/linter.component';

@Component({
    standalone: true,
    imports: [UserListComponent, LinterComponent],
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title = 'linting-formatting-practice';

    constructor() {
        console.log('App component initialized');
    }

    ngOnInit() {
        const x = 10;
        if (x == 10) {
            console.log('x is 10');
        }
    }

    public doSomething(): void {
        const y = 20;
        console.log(y);
    }
}
