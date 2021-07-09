import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriandoTarefaComponent } from './criando-tarefa.component';

describe('CriandoTarefaComponent', () => {
  let component: CriandoTarefaComponent;
  let fixture: ComponentFixture<CriandoTarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriandoTarefaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriandoTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
