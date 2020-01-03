import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { DirectoryContentService } from '../services/directory-content.service';
import { CurrentContext } from '../../directory/Models/CurrentContext';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-directory-content',
  templateUrl: './directory-content.component.html',
  styleUrls: ['./directory-content.component.css']
})
export class DirectoryContentComponent implements OnInit, OnChanges {

  @Input()
  currentContext: CurrentContext;

  private elements: Array<DiskElement>;
  private sub: Subscription;

  constructor(private directoryContentService: DirectoryContentService) {
    console.log('constructor()');
   }

  load(): void {
    console.log('load()');
    this.directoryContentService.getElements(this.currentContext.getPath())
    .subscribe(res => {
      // console.log(res);
      this.elements = res as Array<DiskElement>;
      console.log(this.elements);
    });
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges(): ', changes);
    this.load();
  }

}
