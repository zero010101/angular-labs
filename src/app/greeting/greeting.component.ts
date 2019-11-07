import { Component, OnInit, TemplateRef, Input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements OnInit {
  @Input() greetingTmpl: TemplateRef<any>;
  isChanged = false;

  constructor() { }

  ngOnInit() {
  }

  changeColor() {
    this.isChanged = !this.isChanged;
  }
}
