import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryContentComponent } from './directory-content.component';

describe('DirectoryContentComponent', () => {
  let component: DirectoryContentComponent;
  let fixture: ComponentFixture<DirectoryContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectoryContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectoryContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
