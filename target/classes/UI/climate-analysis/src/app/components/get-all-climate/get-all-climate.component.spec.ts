import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllClimateComponent } from './get-all-climate.component';

describe('GetAllClimateComponent', () => {
  let component: GetAllClimateComponent;
  let fixture: ComponentFixture<GetAllClimateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllClimateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllClimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
