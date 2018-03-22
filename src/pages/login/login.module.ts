/**
 * Created by luwenwei on 18/3/22.
 */
import { NgModule } from '@angular/core';
import { LoginPage } from './login';
import {IonicPageModule} from 'ionic-angular';

@NgModule({
    declarations: [LoginPage],
    imports: [
        IonicPageModule.forChild(LoginPage)
    ]
})
export class LoginModule { }