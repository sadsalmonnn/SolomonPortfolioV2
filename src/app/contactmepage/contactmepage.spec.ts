import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contactmepage } from './contactmepage';

describe('Contactmepage', () => {
  let component: Contactmepage;
  let fixture: ComponentFixture<Contactmepage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contactmepage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contactmepage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
