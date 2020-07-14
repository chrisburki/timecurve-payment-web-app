import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UiService {
    loadigStateChanged = new Subject<boolean>();
}
