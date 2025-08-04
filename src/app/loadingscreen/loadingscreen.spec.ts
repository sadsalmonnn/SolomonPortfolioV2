import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loadingscreen } from './loadingscreen';

describe('Loadingscreen', () => {
  let component: Loadingscreen;
  let fixture: ComponentFixture<Loadingscreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loadingscreen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loadingscreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
