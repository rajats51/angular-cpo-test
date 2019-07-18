import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SettingsPageComponent implements OnInit {
  public editProfileForm: FormGroup;
  obj: any = {};
  isSubmitted = false;

  profile: any = {
    firstName: "Jimmy",
    lastName: "James",
    role: "Controller"
  };

  tasks = [
    {
      status: "REQUIRED",
      title: "Configure your ACH Solution",
      date: '12/12/2018',
      color: "blue",
      numberOfMessages: 1,
      img: ["assets/icons/CrewAvatar1.svg", "assets/icons/CrewAvatar1.svg", "assets/icons/CrewAvatar1.svg"]
    },
    {
      status: "REQUIRED",
      title: "Configure your ACH Solution",
      date: '12/12/2018',
      color: "blue",
      numberOfMessages: 1,
      img: ["assets/icons/CrewAvatar1.svg", "assets/icons/CrewAvatar1.svg", "assets/icons/CrewAvatar1.svg"]
    },
    {
      status: "REQUIRED",
      title: "Configure your ACH Solution",
      date: '12/12/2018',
      color: "orange",
      numberOfMessages: 1,
      img: ["assets/icons/CrewAvatar1.svg", "assets/icons/CrewAvatar1.svg", "assets/icons/CrewAvatar1.svg"]
    },
  ];

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private formBuilder: FormBuilder, ) {
    iconRegistry.addSvgIcon(
      'password_match',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/complete.svg'));
    iconRegistry.addSvgIcon(
      'password_notmatched',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/notstarted.svg'));
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.editProfileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address1: ['', Validators.required],
      address2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      title: ['', Validators.required],
      company: ['', Validators.required],
      email: ['', Validators.required],
      cellPhone: ['', Validators.required]
    });
  }


  submit() {
    this.isSubmitted = true;
  }
  
  getSubmitButtonLabel() {
    return this.isSubmitted ? "Your password has been successfully changed!" : 'SUBMIT';
  }
}

