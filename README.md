# Send Data from Child to Parent in Angular

This guide explains how a **child component** (`user`) sends data to a **parent component** (`app`) using `@Output()` and `EventEmitter`.

---

## Parent Component: `app`

### app.component.ts
Create a method that will receive data from the child.

```ts
GetDataFromChild(data: string) {
  console.log('Received from child:', data);
}
```

---

### app.component.html
Use the child selector and bind the child event to the parent method.

```html
<app-user (outputSend)="GetDataFromChild($event)"></app-user>
```

**Explanation**

- `outputSend` → event exposed by the child  
- `$event` → value emitted from the child

---

## Child Component: `user`

### user.component.ts
Import `Output` and `EventEmitter`, then emit data.

```ts
import { Component, Output, EventEmitter } from '@angular/core';

export class UserComponent {
  @Output() outputSend = new EventEmitter<string>();

  sendData(value: string) {
    this.outputSend.emit(value);
  }
}
```

---

### user.component.html
Take input and send it to the parent.

```html
<input #txt type="text" placeholder="Enter value" />
<button (click)="sendData(txt.value)">Send to Parent</button>
```

---

## Flow Summary

1. User performs an action in the child component.
2. Child emits data using `EventEmitter`.
3. Parent listens through event binding.
4. Parent method receives the data.
