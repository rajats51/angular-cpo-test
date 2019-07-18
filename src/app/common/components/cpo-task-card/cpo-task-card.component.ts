import { Component, OnInit, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-cpo-task-card',
  templateUrl: './cpo-task-card.component.html',
  styleUrls: ['./cpo-task-card.component.scss']
})
export class CpoTaskCardComponent implements OnInit {

  @Input() task: any;
  @Input() index: any;
  @Input() type: any;
  
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'date',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/svg/date.svg'));
    iconRegistry.addSvgIcon(
      'comments',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/svg/comments.svg'));
  }

  ngOnInit() {
  }

  isNewTask(type, index) {
    if (type === "todo" && index === 0) {
      return true;
    }
    return false;
  }

}

