import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EQualMonitorComponent } from './e-qual-monitor.component';

describe('EQualMonitorComponent', () => {
  let component: EQualMonitorComponent;
  let fixture: ComponentFixture<EQualMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EQualMonitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EQualMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
