import { Component, OnInit } from '@angular/core';
import { LogginService } from '../loggin.service';

@Component({
  selector: 'loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit {

  constructor(public logginService:LogginService) { }

  ngOnInit(): void {
  }

}
