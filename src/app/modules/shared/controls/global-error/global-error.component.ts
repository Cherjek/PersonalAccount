import { Component, OnInit } from '@angular/core';
import { GlobalErrorHandler } from 'src/app/core/services/error-handler';

@Component({
  selector: 'pa-global-error',
  templateUrl: './global-error.component.html',
  styleUrls: ['./global-error.component.scss']
})
export class GlobalErrorComponent implements OnInit {

  constructor(
    public globalErrorHandler: GlobalErrorHandler,
  ) { 
    globalErrorHandler.errorForm = undefined;
  }

  ngOnInit(): void {
  }

}
