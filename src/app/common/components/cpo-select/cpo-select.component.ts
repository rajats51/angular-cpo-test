import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-cpo-select',
  templateUrl: './cpo-select.component.html',
  styleUrls: ['./cpo-select.component.scss']
})
export class CpoSelectComponent implements OnInit {

  @Input() data: any;
  @Input() options: any;
  @Input() svgIcon: any;
  @Input() name: any;
  @Output() selectionChange: EventEmitter<any> = new EventEmitter();
  triggerStatus: string;
  isSelectClosed: boolean = true;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'keyboard_arrow_down',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/keyboard_arrow_down.svg'));
   }

  ngOnInit() {
    this.setSelectionIconClass();
  }

  onSelectionChange(filterVal: any) {
    this.toggleSelect();
    this.selectionChange.emit(filterVal);
  }

  toggleSelect() {
    this.isSelectClosed = !this.isSelectClosed;
    this.setSelectionIconClass();
  }

  setSelectionIconClass() {
    if (!this.isSelectClosed) {
      this.triggerStatus = "open";
    } else {
      this.triggerStatus = "close";
    }
  }

}
