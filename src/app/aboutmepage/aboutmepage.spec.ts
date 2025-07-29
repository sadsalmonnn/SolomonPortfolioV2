import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aboutmepage } from './aboutmepage';

describe('Aboutmepage', () => {
  let component: Aboutmepage;
  let fixture: ComponentFixture<Aboutmepage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aboutmepage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aboutmepage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
