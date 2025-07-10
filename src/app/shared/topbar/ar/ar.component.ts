import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-ar',
  imports: [],
  templateUrl: './ar.component.html',
  styleUrl: './ar.component.scss'
})
export class ArComponent {
  firstName = input<string>();
  lastName = input<string>();

  firstNameLetters = computed(() => {
    const firstName = this.firstName();
    const lastName = this.lastName();

    if(firstName && lastName) {
      console.log(firstName.slice(1, 0))
      return `${firstName[0]} ${lastName[0]}`
    } else {
      return ''
    }
  })
}
