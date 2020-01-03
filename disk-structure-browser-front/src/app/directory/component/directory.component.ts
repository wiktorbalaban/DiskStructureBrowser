import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';
import { CurrentContext } from '../Models/CurrentContext';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  currentContext: CurrentContext;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.mainService.getRootPath().subscribe(result => {
      console.log('root path: ', result);
      this.goToDirectory(result as string);
    });
  }

  goToDirectory(path: string) {
    this.currentContext = new CurrentContext(path);
  }


}
