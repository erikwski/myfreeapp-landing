import { Component } from '@angular/core';
import { HeaderComponent } from './sections/header/header.component';
import { CtaComponent } from './sections/cta/cta.component';
import { FaqComponent } from './sections/faq/faq.component';
import { HowItWorksComponent } from './sections/how-it-works/how-it-works.component';
import { FooterComponent } from './sections/footer/footer.component';
import { EarnNowComponent } from './sections/earn-now/earn-now.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    CtaComponent,
    FaqComponent,
    HowItWorksComponent,
    EarnNowComponent,
    FooterComponent,
    CtaComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {}
