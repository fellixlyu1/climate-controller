import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClimateComponent } from './update-climate.component';

describe('UpdateClimateComponent', () => {
  let component: UpdateClimateComponent;
  let fixture: ComponentFixture<UpdateClimateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateClimateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateClimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
