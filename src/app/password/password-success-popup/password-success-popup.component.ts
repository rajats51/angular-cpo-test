import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatIconRegistry } from '@angular/material';
import {ModalMetadata} from '../../common/libraries/modal-utils';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-password-success-popup',
  templateUrl: './password-success-popup.component.html',
  styleUrls: ['./password-success-popup.component.scss']
})
export class PasswordSuccessPopupComponent implements OnInit {
  @ViewChild('passwordsuccesspopup')pwsPopup: ElementRef;
  steps: string[] = [
    'User',
    'Email',
    'Phone',
    'Password'
  ];

  currentStepIndex = 4;

  public from = 'reset';

  message = 'Success! Your new password has been set';

  // tslint:disable-next-line: max-line-length
  constructor( public dialogRef: MatDialogRef<PasswordSuccessPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public router: Router,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'Fill-1',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/svg/Fill-1.svg'));
  }

  ngOnInit() {
    var topPosition =  ModalMetadata.getPosition(this.pwsPopup.nativeElement.offsetHeight)+'px';
    this.dialogRef.updatePosition({top:topPosition});
    this.from = this.data.path;

    if (this.from === 'reset') {
      this.message = 'Success! Your Password Has Been Reset.';
      this.steps.splice(0, 1);
      this.currentStepIndex = 3;
    }
  }

  landingPage() {
    this.dialogRef.close();
    this.router.navigateByUrl('/prospect/home');
  }

}


