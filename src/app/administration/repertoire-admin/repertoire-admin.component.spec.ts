import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepertoireAdminComponent } from './repertoire-admin.component';

describe('RepertoireAdminComponent', () => {
  let component: RepertoireAdminComponent;
  let fixture: ComponentFixture<RepertoireAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepertoireAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepertoireAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
