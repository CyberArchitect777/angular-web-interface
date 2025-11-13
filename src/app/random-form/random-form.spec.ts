import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomForm } from './random-form';

describe('RandomForm', () => {
  let component: RandomForm;
  let fixture: ComponentFixture<RandomForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
