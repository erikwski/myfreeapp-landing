import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-offert',
  standalone: true,
  imports: [],
  template: `
    <div
      class="main-shadow-light flex flex-col items-center justify-center p-3 pb-0 rounded-xl gap-4 text-center mb-6 bg-primary-700 scale-transition"
    >
      <img
        class="-translate-y-8 rounded-[2.5em] opacity-70"
        [src]="src"
        [alt]="alt"
        width="200"
      />
      <h4 class="text-3xl text-primary">{{ title }}</h4>
      <div class="flex flex-col">
        <span>UP TO</span>
        <strong class="text-2xl font-bold">$ {{ value }}.00</strong>
      </div>
      <a
        href="https://www.myfreeapp.io/"
        class="btn titan-font absolute -bottom-3 w-40 h-14"
      >
        <span class="mx-auto">PLAY NOW</span>
      </a>
    </div>
  `,
})
export class OffertComponent {
  @Input() src: string = '';
  @Input() alt: string = '';
  @Input() title: string = '';
  @Input() value: string = '';
}
