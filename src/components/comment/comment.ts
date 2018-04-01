import {
    Component,
    OnInit,
    Input,
    ElementRef,
    OnChanges,
    ViewChild,
    AfterViewInit,
    ChangeDetectorRef,
    EventEmitter,
    Output
} from '@angular/core';

@Component({
    selector:'comment',
    templateUrl: 'comment.html',
    styles:['./comment.scss']
})
export class CommentComponent implements OnInit,OnChanges{
    @Input() commentData:any;
    constructor() {
    }

    ngOnInit() {

    }

    ngOnChanges(SimpleChanges) {
        let _commentData = SimpleChanges.commentData.previousValue;
        let commentData = SimpleChanges.commentData.currentValue
        if(_commentData != commentData){
            this.commentData = commentData;
            console.log(this.commentData);
        }
    }
}