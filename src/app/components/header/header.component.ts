import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('header', { static: true }) header!: ElementRef;
  ngAfterViewInit(): void {
    this.onWindowScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = document.querySelectorAll('section');
    const scrollPosition =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    let currentSection!: HTMLElement;

    sections.forEach((section) => {
      const sectionOffset =
        section.getBoundingClientRect().top + window.scrollY;
      if (scrollPosition >= sectionOffset - 115) {
        currentSection = section;
      }
    });
    if (currentSection && this.header) {
      const header = this.header.nativeElement;
      const menuItems: HTMLElement[] = header.querySelectorAll('[href]');
      menuItems.forEach((item) => item.classList.remove('active'));
      const currentMenuItem = header.querySelector(
        `[href*="#${currentSection.getAttribute('id')}"]`
      );
      if (currentMenuItem) {
        currentMenuItem.classList.add('active');
      }
      // BASED TO THE SECTION I SET THE HEADER TO THE START COLOR OF THE FOCUSED ONE
      header.classList.remove('bg-primary', 'bg-primary-800');
      header.classList.add(
        currentSection.classList.contains('even-section')
          ? 'bg-primary'
          : 'bg-primary-800'
      );
    }
  }
}
