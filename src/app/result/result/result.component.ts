import { Component, OnInit } from '@angular/core';
import { Result } from '../result'
import { ResponseVO } from '../../responseVO/responseVO';
import { ResultService } from '../result.service';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  resultsUrl: "";

  response: ResponseVO;

  title: String[] = ['Certificate', 'Sample', "Sub", "REGX", "REGY", "REGZ", "Messages"];

  results: Result[];

  hello: String;

  constructor(
    private resultService: ResultService,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.resultService.getResults()
      .subscribe(results => this.results = results);
      console.log(this.results);

    // this.resultService.getHello();
    // console.log("hello:" + this.hello);
  }

  getResults(): void {
    this.resultService.getMockResults()
      .subscribe(results => this.results = results);
      console.log(this.results);
  }

}
