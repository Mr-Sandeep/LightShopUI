import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustCheckComponent } from './just-check.component';

describe('JustCheckComponent', () => {
  let component: JustCheckComponent;
  let fixture: ComponentFixture<JustCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JustCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JustCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
