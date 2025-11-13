import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBox } from './menu-box.component';

describe('MenuBox', () => {
  let component: MenuBox;
  let fixture: ComponentFixture<MenuBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
