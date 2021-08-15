import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregnancyListComponent } from './pregnancy-list.component';

describe('PregnancyListComponent', () => {
  let component: PregnancyListComponent;
  let fixture: ComponentFixture<PregnancyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PregnancyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PregnancyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
