import { Component } from "@angular/core";

// 메타데이터/데코레이터 
@Component({
    selector: 'home-welcome',
    templateUrl: "./welcome.component.html"    
})
export class WelcomeComponent {
    public Title: string = "환영합니다.";
}
