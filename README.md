# Angular-rxjs

Observable
Intro

    - Observables is an interface to handle a variety of common asynchronous operations

      - You can define custom events that send observable output data from a child to a parent component.
      - The HTTP module uses observables to handle AJAX requests and responses.
      - The Router and Forms modules use observables to listen for and respond to user-input events.

    Refer the code to find samples for

    - Creating an observable and passing stream of data overtime and how asynchronous behavior is achieved.
    - Example of creating event handler in observable and remove the same on unsubscribe.

Subject and its Variants

    - Subject
      A subscriber will only get published values thereon-after the subscription is made.
    - Behavior Subject
      New subscribers get the last published value OR initial value immediately upon subscription.
    - Replay Subject
      - it can cache up to a specified number of emissions. Any subscribers will get all the cached values upon subscription.
      - If you initialize a ReplaySubject with a buffer size of 1, then it actually behaves just like a BehaviorSubject.
      - The last value is always cached, so it acts like a value changing over time.
      - With this, there is no need for a null check like in the case of the BehaviorSubject initialized with a null.
      - In this instance, no value is ever emitted to the subscriber until the first publishing.
    - Async Subject
      - Emits its last value on completion
      - Mainly used for caching api calls response since it will not be called multiple time

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-ivy-tlrzwu)
