import {Injectable,EventEmitter} from '@angular/core';

@Injectable()
export class RootViewCoverService {
    rootViewCover: EventEmitter<any>;

    constructor(){
        this.rootViewCover = new EventEmitter();
    }
}