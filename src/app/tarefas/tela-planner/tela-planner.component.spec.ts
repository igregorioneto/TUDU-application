import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaPlannerComponent } from './tela-planner.component';

describe('TelaPlannerComponent', () => {
  let component: TelaPlannerComponent;
  let fixture: ComponentFixture<TelaPlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaPlannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
