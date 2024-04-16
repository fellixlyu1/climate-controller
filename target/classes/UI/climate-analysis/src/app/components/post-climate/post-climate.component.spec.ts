import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostClimateComponent } from './post-climate.component';

describe('PostClimateComponent', () => {
  let component: PostClimateComponent;
  let fixture: ComponentFixture<PostClimateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostClimateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostClimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
