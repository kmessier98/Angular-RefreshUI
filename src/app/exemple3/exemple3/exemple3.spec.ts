import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemple3 } from './exemple3';

describe('Exemple3', () => {
  let component: Exemple3;
  let fixture: ComponentFixture<Exemple3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exemple3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exemple3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
