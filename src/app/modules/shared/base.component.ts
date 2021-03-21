import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { forkJoin, Subscription } from 'rxjs';
import { BaseFormConfig } from 'src/app/common/models/forms/BaseFormConfig.model';
import { IFormConfigService } from 'src/app/common/services/configuration/formConfig.service';

@Component({
  template: ''
})
export abstract class BaseComponent<T, TFormConfig> implements OnInit, OnDestroy {

  protected configService!: IFormConfigService;
  private $intSub!: Subscription;
  protected elementName!: string;
  protected element!: NgElement & WithProperties<T>;

  abstract addProperties(): void;
  
  constructor(
    public http: HttpClient,
    public host: ElementRef) {
  }

  ngOnInit(): void {
    if (!this.elementName) {
      throw new Error('Component property "elementName" is undefined')
    }
    
    this.$intSub = forkJoin({
      config: this.http.get(`assets/content/config/${this.elementName}.json`),
      view: this.http.get(`assets/content/views/${this.elementName}.html`, { responseType: 'text'})
      })
      .subscribe(data => {
        // config
        this.configService.config = data.config as any;
        if ((data.config as any).title) {
          document.title = (data.config as any).title;
        }

        // view
        const div = this.htmlToElement(data.view);
        this.host.nativeElement.append(div);
        this.createLoginElement();
      });
  }

  ngOnDestroy(): void {
    if (this.$intSub) {
      this.$intSub.unsubscribe();
    }
  }

  private htmlToElement(html: string) {
    const template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content;
  }

  private createLoginElement() {
    this.element = document.createElement(`${this.elementName}-element`) as any;

    this.addProperties();

    const container = document.querySelector(`[data-element="${this.elementName}-element"]`);
    if (container) {
      container.appendChild(this.element);
    }
  }
}
