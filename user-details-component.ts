import {Component} from '@angular/core';
import {User} from './user';
@Component({
    selector: 'app-user-detail',
    templateUrl: './user-details.html'
})
export class UserDetailComponent {
    user: User = null;
}
