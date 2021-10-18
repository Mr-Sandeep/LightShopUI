import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateExerciseComponent } from './template-exercise.component';

describe('TemplateExerciseComponent', () => {
  let component: TemplateExerciseComponent;
  let fixture: ComponentFixture<TemplateExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateExerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
