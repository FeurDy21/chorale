import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRepertoireComponent } from './liste-repertoire.component';

describe('ListeRepertoireComponent', () => {
  let component: ListeRepertoireComponent;
  let fixture: ComponentFixture<ListeRepertoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeRepertoireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeRepertoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
