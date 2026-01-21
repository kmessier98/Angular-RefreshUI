import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemple1 } from './exemple1';

describe('Exemple1', () => {
  let component: Exemple1;
  let fixture: ComponentFixture<Exemple1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exemple1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exemple1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
