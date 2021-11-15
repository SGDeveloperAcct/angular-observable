import { Component, VERSION } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Append $ at the end to differentiate that the property is an observable
  // Not a standard but a naming convention to differentiate
  simpleObservable$;
  unsubscribeExample$;

  constructor() {
    // this.simpleObservable();
    this.unsubscribeExample$ = this.observableForDOMClick(
      document.body,
      'click'
    ).subscribe((val) => {
      console.log(val);
    });
  }

  simpleObservable() {
    this.simpleObservable$ = new Observable((subscriber) => {
      console.log('called');
      // Observable can be used to send a stream of data over time
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();

        // After complete next will not work
        subscriber.next(5);
      }, 1000);
    });

    this.simpleObservable$.subscribe(
      (x) => {
        console.log(x);
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('completed');
      }
    );
  }

  removeEventListener() {
    this.unsubscribeExample$.unsubscribe();
  }

  /*
  When using observable for custom behavior we need to provide custom logic for unsubscribe if needed
   */
  observableForDOMClick(target, eventName) {
    return new Observable((observer) => {
      const handler = (e) => observer.next(e);
      target.addEventListener(eventName, handler);

      return () => {
        console.log('unsubscribe called');
        target.removeEventListener(eventName, handler);
      };
    });
  }
}
