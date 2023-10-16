import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByCountriePageComponent } from './by-countrie-page.component';

describe('ByCountriePageComponent', () => {
  let component: ByCountriePageComponent;
  let fixture: ComponentFixture<ByCountriePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ByCountriePageComponent]
    });
    fixture = TestBed.createComponent(ByCountriePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
