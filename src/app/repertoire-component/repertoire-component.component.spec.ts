import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepertoireComponentComponent } from './repertoire-component.component';

describe('RepertoireComponentComponent', () => {
  let component: RepertoireComponentComponent;
  let fixture: ComponentFixture<RepertoireComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepertoireComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepertoireComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
