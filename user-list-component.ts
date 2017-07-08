import {Component} from '@angular/core';
import {User} from './user';

@Component({
    selector: 'app-user-list',
    templateUrl: './users-list.html'
})

export class UserListComponent {
    users: User[] = null;
}
