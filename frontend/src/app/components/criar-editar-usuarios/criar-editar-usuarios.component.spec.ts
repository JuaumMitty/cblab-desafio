import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarEditarUsuariosComponent } from './criar-editar-usuarios.component';

describe('CriarEditarUsuariosComponent', () => {
  let component: CriarEditarUsuariosComponent;
  let fixture: ComponentFixture<CriarEditarUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarEditarUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarEditarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
