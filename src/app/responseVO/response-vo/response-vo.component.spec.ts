import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseVOComponent } from './response-vo.component';

describe('ResponseVOComponent', () => {
  let component: ResponseVOComponent;
  let fixture: ComponentFixture<ResponseVOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponseVOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseVOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
