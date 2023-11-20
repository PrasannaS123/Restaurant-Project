import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],

})
export class DashboardComponent {


  constructor(private el: ElementRef) { }
  ngAfterViewInit(): void {
    const element = this.el.nativeElement.querySelector('.counter-value');
    const element1 = this.el.nativeElement.querySelector('.active-counter-value');
    const element2 = this.el.nativeElement.querySelector('.inactive-counter-value');
    const element3 = this.el.nativeElement.querySelector('.cuisines-counter-value');
    const element4 = this.el.nativeElement.querySelector('.meals-counter-value');
    const element5 = this.el.nativeElement.querySelector('.payment-counter-value');
    const element6 = this.el.nativeElement.querySelector('.pending-counter-value');

    const target = parseFloat(element.getAttribute('data-target'));
    const target1 = parseFloat(element1.getAttribute('data-target'));
    const target2 = parseFloat(element2.getAttribute('data-target'));
    const target3 = parseFloat(element3.getAttribute('data-target'));
    const target4 = parseFloat(element4.getAttribute('data-target'));
    const target5 = parseFloat(element5.getAttribute('data-target'));
    const target6 = parseFloat(element6.getAttribute('data-target'));

    const duration = 2000;
    const speed = (target / duration) * 10;
  

    let current = 0;
    let current1 = 0;
    let current2 = 0;
    let current3 = 0;
    let current4 = 0;
    let current5 = 0;
    let current6 = 0;

    const counterInterval = setInterval(() => {
      if (current < target) {
        current += speed;
        element.textContent = current.toString();
      } else {
        clearInterval(counterInterval);
        element.textContent = target.toString();
      }
    }, 10);

    const counterInterval1 = setInterval(() => {
      if (current1 < target1) {
        current1 += speed;
        element1.textContent = current1.toString();
      } else {
        clearInterval(counterInterval1);
        element1.textContent = target1.toString();
      }
    }, 10);

    const counterInterval2 = setInterval(() => {
      if (current2 < target2) {
        current2 += speed;
        element2.textContent = current2.toString();
      } else {
        clearInterval(counterInterval2);
        element2.textContent = target2.toString();
      }
    }, 10);
    const counterInterval3 = setInterval(() => {
      if (current3 < target3) {
        current3 += speed;
        element3.textContent = current3.toString();
      } else {
        clearInterval(counterInterval3);
        element3.textContent = target3.toString();
      }
    }, 10);
    const counterInterval4 = setInterval(() => {
      if (current4 < target4) {
        current4 += speed;
        element4.textContent = current4.toString();
      } else {
        clearInterval(counterInterval4);
        element4.textContent = target4.toString();
      }
    }, 10);
    const counterInterval5 = setInterval(() => {
      if (current5 < target5) {
        current5 += speed;
        element5.textContent = current5.toString();
      } else {
        clearInterval(counterInterval5);
        element5.textContent = target5.toString();
      }
    }, 10);
    const counterInterval6 = setInterval(() => {
      if (current6 < target6) {
        current6 += speed;
        element6.textContent = current6.toString();
      } else {
        clearInterval(counterInterval6);
        element6.textContent = target6.toString();
      }
    }, 10);

  }
}
