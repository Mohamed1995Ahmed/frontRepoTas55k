import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HometaskComponent } from './hometask.component';

describe('HometaskComponent', () => {
  let component: HometaskComponent;
  let fixture: ComponentFixture<HometaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HometaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HometaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
