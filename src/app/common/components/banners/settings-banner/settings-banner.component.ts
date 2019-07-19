import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Routes, RouterModule,Router } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-settings-banner',
  templateUrl: './settings-banner.component.html',
  styleUrls: ['./settings-banner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SettingsBannerComponent implements OnInit {

  settingsMenuOption: string="Profile";
  @Input() profile: any;

  constructor(private router:Router, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    this.router.urlUpdateStrategy='eager';
    this.router.onSameUrlNavigation='ignore';
    iconRegistry.addSvgIcon(
      'dropdown',
        sanitizer.bypassSecurityTrustResourceUrl('../../assets/svg/dropdown.svg'));
  }

  ngOnInit() {
  }
  swapViews(tabEvent){
    if(tabEvent.index===0){
      this.navigate('profile');
    }
  
    if(tabEvent.index===1){
      this.navigate('notifications');
    }
  }
  
  navigate(route:string) {
    try{
      //this.router.navigate(['prospect','home',route], {skipLocationChange:true});
    }catch(err){
      // console.log(err);
    }
  }
  
  settingsMenuOptionChanged(event){
    let option = event.value;
    // console.log(option);
    if(option==0){
      this.settingsMenuOption = "Profile";
      //this.navigate('app-solution');
    }
  
    if(option==1){
      this.settingsMenuOption = "Notification Preferences";
      //this.navigate('crew');
    }
  
  }
}

