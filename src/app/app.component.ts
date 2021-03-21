import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

const cssFileId = 'pa-custom-css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'personal-account-app';

  constructor(@Inject(DOCUMENT) private document: Document) {
    /**
     * 'customize.css' is the css file that will generated after 'build'
     * The name specified here 'customize' should match the bundler name in 'angular.json'. (very important)
     */
    this.loadStyle('customize.css');
  }

  loadStyle(styleName: string) {
    const head = this.document.getElementsByTagName('head')[0];

    const cssLink = this.document.getElementById(cssFileId) as HTMLLinkElement;
    if (cssLink) {
      cssLink.href = styleName;
    } else {
      const style = this.document.createElement('link');
      style.id = cssFileId;
      style.rel = 'stylesheet';
      style.href = `${styleName}`;

      head.appendChild(style);
    }
  }
}
