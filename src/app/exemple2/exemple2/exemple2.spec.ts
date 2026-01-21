import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemple2 } from './exemple2';

describe('Exemple2', () => {
  let component: Exemple2;
  let fixture: ComponentFixture<Exemple2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exemple2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exemple2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
