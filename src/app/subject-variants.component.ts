import { Component } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';
@Component({
  selector: 'app-subject-variants',
  template: `<h1>Hello!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class SubjectVariantsComponent {
  constructor() {
    this.SubjectExample();
    this.BehaviorSubjectExample();
    this.ReplaySubjectExample();
    this.AsyncSubjectExample();
  }

  SubjectExample() {
    const subject$ = new Subject();
    subject$.subscribe((x) => console.log(`Subject 1 ${x}`));
    subject$.next('test');
    subject$.subscribe((x) => console.log(`Subject 2 ${x}`));
    subject$.next('test2');
  }

  BehaviorSubjectExample() {
    const subject$ = new BehaviorSubject('initial');
    subject$.subscribe((x) => console.log(`BehaviorSubject 1 ${x}`));
    subject$.next('test');
    subject$.subscribe((x) => console.log(`BehaviorSubject 2 ${x}`));
    subject$.next('test2');
  }

  ReplaySubjectExample() {
    const subject$ = new ReplaySubject(3);
    subject$.subscribe((x) => console.log(`ReplaySubject 1 ${x}`));
    subject$.next('test1');
    subject$.next('test2');
    subject$.next('test3');
    subject$.next('test4');
    subject$.subscribe((x) => console.log(`ReplaySubject 2 ${x}`));
    subject$.next('test5');
    subject$.next('test6');
  }

  AsyncSubjectExample() {
    const subject$ = new AsyncSubject();
    subject$.subscribe((x) => console.log(`AsyncSubject 1 ${x}`));
    subject$.next('test1');
    subject$.next('test2');
    subject$.next('test3');
    subject$.next('test4');
    subject$.subscribe((x) => console.log(`AsyncSubject 2 ${x}`));
    subject$.next('test5');
    subject$.next('test6');
    subject$.complete();
    subject$.subscribe((x) => console.log(`AsyncSubject 3 ${x}`));
  }
}
