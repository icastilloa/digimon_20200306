import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigicompComponent } from './digicomp.component';

describe('DigicompComponent', () => {
  let component: DigicompComponent;
  let fixture: ComponentFixture<DigicompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigicompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigicompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
