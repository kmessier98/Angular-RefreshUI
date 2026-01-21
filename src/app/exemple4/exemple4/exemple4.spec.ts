import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemple4 } from './exemple4';

describe('Exemple4', () => {
  let component: Exemple4;
  let fixture: ComponentFixture<Exemple4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exemple4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exemple4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
