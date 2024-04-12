import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { CtaComponent } from './components/cta/cta.component';
import { FaqComponent } from './components/faq/faq.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { OffersComponent } from './components/offers/offers.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    CtaComponent,
    FaqComponent,
    HowItWorksComponent,
    OffersComponent,
    FooterComponent,
    CtaComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {}
