/**
 * Created by luwenwe on 2017/7/19.
 */
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
// 管道装师符 ， name就是管道名称
@Pipe({
    name: 'splitThousand'
})
export class SplitThousandPipe implements PipeTransform {
    // value : 就是传入的值
    // ...args : 参数集合(用了...拓展符),会把数组内的值依次作为参数传入
    // ...args可以改成我们常规的写法(value:any,start:number,end:number)
    transform(input: number){
        return Math.ceil(input / 10000) + "万";
    }
}


@Pipe({ name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform  {
    constructor(private sanitized: DomSanitizer) {}
    transform(value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    }
}