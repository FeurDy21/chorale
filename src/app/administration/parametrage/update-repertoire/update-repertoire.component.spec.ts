import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRepertoireComponent } from './update-repertoire.component';

describe('UpdateRepertoireComponent', () => {
  let component: UpdateRepertoireComponent;
  let fixture: ComponentFixture<UpdateRepertoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRepertoireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRepertoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
