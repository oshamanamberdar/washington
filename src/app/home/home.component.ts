import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private modalService: NgbModal,
              private translate: TranslateService) { }


  ngOnInit(): void {
  }

  openLoginCard(content: any) {
    this.modalService.open(content);
  }

  openCreateAccountCard(content: any) {
    this.modalService.open(content)
  }

  openAboutThisSite(content: any) {
    this.modalService.open(content);
  }

  translateToSpanish() {
    this.translate.use('es');
  }

}
