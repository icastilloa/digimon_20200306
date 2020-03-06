import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DgcompoComponent } from './dgcompo.component';

describe('DgcompoComponent', () => {
  let component: DgcompoComponent;
  let fixture: ComponentFixture<DgcompoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DgcompoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DgcompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
