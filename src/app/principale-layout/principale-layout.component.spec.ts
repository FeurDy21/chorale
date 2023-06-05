import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipaleLayoutComponent } from './principale-layout.component';

describe('PrincipaleLayoutComponent', () => {
  let component: PrincipaleLayoutComponent;
  let fixture: ComponentFixture<PrincipaleLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipaleLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipaleLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
