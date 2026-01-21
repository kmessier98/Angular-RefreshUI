import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemple6 } from './exemple6';

describe('Exemple6', () => {
  let component: Exemple6;
  let fixture: ComponentFixture<Exemple6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exemple6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exemple6);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
