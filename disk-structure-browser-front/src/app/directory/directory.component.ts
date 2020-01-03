import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.mainService.getRootPath().subscribe(result => {
      console.log('root path: ', result);
    });
  }

}
