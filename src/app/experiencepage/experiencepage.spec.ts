import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiencepage } from './experiencepage';

describe('Experiencepage', () => {
  let component: Experiencepage;
  let fixture: ComponentFixture<Experiencepage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Experiencepage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Experiencepage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
