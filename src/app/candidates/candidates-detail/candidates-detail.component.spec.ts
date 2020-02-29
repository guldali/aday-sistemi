import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesDetailComponent } from './candidates-detail.component';

describe('CandidatesDetailComponent', () => {
  let component: CandidatesDetailComponent;
  let fixture: ComponentFixture<CandidatesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
