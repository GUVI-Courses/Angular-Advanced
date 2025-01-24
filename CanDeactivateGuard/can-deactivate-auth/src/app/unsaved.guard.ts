import { CanDeactivateFn } from '@angular/router';

export const unsavedGuard: CanDeactivateFn<any> = (component, currentRoute, currentState, nextState) => {
  console.log(component);
  if (component && component?.data && component?.data?.dirty) {
    const confirmation = confirm("are you sure you want to leave?");

    if (confirmation) {
      return true;
    } else {
      return false;
    }
  }
  return true;
};
