import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemple5 } from './exemple5';

describe('Exemple5', () => {
  let component: Exemple5;
  let fixture: ComponentFixture<Exemple5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exemple5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exemple5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
