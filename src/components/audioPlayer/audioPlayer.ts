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
    selector:'audio-player',
    templateUrl: 'audioPlayer.html',
    styleUrls:['/audioPlayer.scss']
})
export class AudioPlayerComponent implements OnInit,OnChanges,AfterViewInit{
    @Input() mediaUrl:string;
    @ViewChild('audioEle') audioEle:ElementRef;
    @Output() switchMusic: EventEmitter<string> = new EventEmitter();
    @Output() changePlayStatus: EventEmitter<boolean> = new EventEmitter();
    duration:number
    musicTotalTime:string
    playedTime:string
    playProgress:number=0
    isPlaying:boolean=false
    constructor(private cdRef:ChangeDetectorRef) {
        this.setPlayProgress = this.setPlayProgress.bind(this);/*这样待会才能移除事件监听*/
    }

    ngOnInit() {

    }

    ngAfterViewInit() {
        this.cdRef.detectChanges();
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
            this.isPlaying = true;
            this.changePlayStatus.emit(true);/*通知父组件更改播放状态*/
        });

        _audioEle.addEventListener('ended',()=>{
            this.isPlaying = false;
            this.changePlayStatus.emit(false);
            this.switchMusic.emit('next');/*切换音乐下首*/
        });/*播放结束*/
    }

    setPlayProgress() {
        let _audioEle = this.audioEle.nativeElement;
        let currentTime = _audioEle.currentTime;/*当前已播放的时间,单位秒*/
        let d = (currentTime / this.duration);/*当前播放时常占总时常的百分比*/
        this.playProgress = Math.floor(d * 100);
        this.setPlayedTime(currentTime)
    }

    setMusicTime = function (time) {
        if(isNaN(time)) return;
        time = Math.floor(time)
        let minutePart,secondPart;
        if(time >= 60) {
            let m = Math.floor(time / 60);/*取出分钟数*/
            let s = time % 60;
            m>=10 ? minutePart = m : minutePart = '0' + m;
            s >= 10 ? secondPart = s : secondPart = '0' + s
        }else{
            minutePart = '00';
            time >= 10 ? secondPart = minutePart : secondPart = '0' + minutePart
        }
        this.musicTotalTime = minutePart + ":" + secondPart;
    }

    setPlayedTime(time) {
        if(isNaN(time)) return;
        time = Math.floor(time)
        let minutePart,secondPart;
        if(time >= 60) {
            let m = Math.floor(time / 60);/*大于60s取出分钟数*/
            let s = time % 60;/*取出秒*/
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
    }/*当按下进度滚轮时去掉音乐播放时间的监听*/

    rangeBlurred(e) {
        this.audioEle.nativeElement.currentTime = Math.ceil((this.playProgress / 100) * this.duration)
        this.audioEle.nativeElement.addEventListener('timeupdate',this.setPlayProgress,false)
    }

    switchPlayStatue() {
        this.isPlaying = !this.isPlaying;
        if(this.isPlaying){
            this.audioEle.nativeElement.play();
        }else{
            this.audioEle.nativeElement.pause();
        }
        this.changePlayStatus.emit(this.isPlaying)
    }

    changeMusic(type) {
        this.isPlaying = false;
        this.changePlayStatus.emit(false);
        this.switchMusic.emit(type);/*切换音乐上下首*/
    }

}