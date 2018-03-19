import {
    Component,
    OnInit,
    Input,
    ElementRef,
    OnChanges,
    ViewChild,
    AfterViewInit,
    ChangeDetectorRef,
    Renderer2,
    EventEmitter,
    Output
} from '@angular/core';

@Component({
    selector:'audio-player',
    templateUrl: 'audioPlayer.html',
    styleUrls:['/audioPlayer.scss']
})
export class AudioPlayerComponent implements OnInit,OnChanges,AfterViewInit{
    @Input() mediaUrl:string;
    @ViewChild('audioEle') audioEle:ElementRef;
    /*@ViewChild('playLine') playLine:ElementRef;
    @ViewChild('playedLine') playedLine:ElementRef;
    @ViewChild('playHandleDot') playHandleDot:ElementRef;*/
    @Output() changePlayStatus: EventEmitter<boolean> = new EventEmitter();
    duration:number
    musicTotalTime:string
    playedTime:string
    playLineWidth:number
    lastPlayLine:number=0
    endPageX:number=0
    playProgress:number=0
    constructor(private cdRef:ChangeDetectorRef,private renderer:Renderer2) {
        this.setPlayProgress = this.setPlayProgress.bind(this);
    }

    ngOnInit() {

    }

    ngAfterViewInit() {
        this.cdRef.detectChanges();
        //this.playLineWidth = this.playLine.nativeElement.offsetWidth - 30;
    }

    ngOnChanges(SimpleChanges) {
        let mediaUrlPreviousValue = SimpleChanges.mediaUrl.previousValue;
        let mediaUrlCurrentValue = SimpleChanges.mediaUrl.currentValue
        if(mediaUrlCurrentValue != mediaUrlPreviousValue){
            this.setMediaConfig(mediaUrlCurrentValue);
        }
    }

    setMediaConfig(mediaUrl) {
        let _audioEle = this.audioEle.nativeElement;
        _audioEle.src = mediaUrl;
        _audioEle.load();
        _audioEle.play();
        this.duration = _audioEle.duration;

        _audioEle.addEventListener('canplay',()=>{
            this.duration = _audioEle.duration;
            this.setMusicTime(this.duration)
        });

        this.audioEle.nativeElement.addEventListener('timeupdate',this.setPlayProgress,false);

        _audioEle.addEventListener('canplaythrough',()=>{
            this.changePlayStatus.emit(true)
        });

        //this.playHandleDotTouchMove()

    }

    setPlayProgress() {
        let _audioEle = this.audioEle.nativeElement;
        let currentTime = _audioEle.currentTime;
        let d = (currentTime / this.duration);/*当前播放时常占总时常的百分比*/
        this.playProgress = Math.floor(d * 100);
    }

    setMusicTime = function (time) {
        if(isNaN(time)) return;
        time = Math.floor(time)
        var minutePart,secondPart;
        if(time >= 60) {
            var m = Math.floor(time / 60);
            var s = time % 60;
            m>=10 ? minutePart = m : minutePart = '0' + m;
            s >= 10 ? secondPart = s : '0' + s
        }else{
            minutePart = '00';
            time >= 10 ? secondPart = minutePart : '0' + minutePart
        }
        this.musicTotalTime = minutePart + ":" + secondPart;
    }

    setPlayedTime(time) {
        if(isNaN(time)) return;
        time = Math.floor(time)
        var minutePart,secondPart;
        if(time >= 60) {
            var m = Math.floor(time / 60);/*大于60s取出分钟数*/
            var s = time % 60;/*取出秒*/
            m>=10 ? minutePart = m : minutePart = '0' + m;
            s >= 10 ? secondPart = s : secondPart = '0' + s
        }else{
            minutePart = '00';
            time >= 10 ? secondPart = time : secondPart = '0' + time
        }
        this.playedTime = minutePart + ":" + secondPart;
    }

    rangeFocused(e) {
        this.audioEle.nativeElement.removeEventListener('timeupdate',this.setPlayProgress,false)
    }

    rangeBlurred(e) {
        this.audioEle.nativeElement.currentTime = Math.ceil((this.playProgress/100) * this.duration)
        this.audioEle.nativeElement.addEventListener('timeupdate',this.setPlayProgress,false)
    }

}