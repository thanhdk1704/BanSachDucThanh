import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsspComponent } from './dssp.component';

describe('DsspComponent', () => {
  let component: DsspComponent;
  let fixture: ComponentFixture<DsspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
