import { TestBed } from '@angular/core/testing';

import { CriandoTarefaService } from './criando-tarefa.service';

describe('CriandoTarefaService', () => {
  let service: CriandoTarefaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriandoTarefaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
