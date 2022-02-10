import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtwinsComponent } from './ntwins.component';

describe('NtwinsComponent', () => {
  let component: NtwinsComponent;
  let fixture: ComponentFixture<NtwinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NtwinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NtwinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
