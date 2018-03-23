import { Injectable } from '@angular/core';

@Injectable()//标识一个类可以被注入器实例化
export class AuthService {
    private isLogin:boolean = false
    constructor(){
    }

    setLoginState(userMessage) {
        window.localStorage.setItem('cloudMusic',JSON.stringify(userMessage));
    }

    getLoginState() {
        let _userMessage = JSON.parse(window.localStorage.getItem('cloudMusic') || '{}');
        _userMessage.isLogin ? this.isLogin = true : false
        return this.isLogin;
    }

    getUserMessage() {
        return JSON.parse(window.localStorage.getItem('cloudMusic') || '{}');
    }

    logout() {
        window.localStorage.removeItem('cloudMusic');
        this.isLogin = false;
    }
}