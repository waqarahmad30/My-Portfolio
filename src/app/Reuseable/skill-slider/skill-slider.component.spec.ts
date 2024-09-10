import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillSliderComponent } from './skill-slider.component';

describe('SkillSliderComponent', () => {
  let component: SkillSliderComponent;
  let fixture: ComponentFixture<SkillSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
