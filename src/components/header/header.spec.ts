import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Headerscomp } from './header';

describe('Header', () => {
  let component: Headerscomp;
  let fixture: ComponentFixture<Headerscomp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Headerscomp],
    }).compileComponents();

    fixture = TestBed.createComponent(Headerscomp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
