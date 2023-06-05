import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErreurLayoutComponent } from './erreur-layout.component';

describe('ErreurLayoutComponent', () => {
  let component: ErreurLayoutComponent;
  let fixture: ComponentFixture<ErreurLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErreurLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErreurLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
