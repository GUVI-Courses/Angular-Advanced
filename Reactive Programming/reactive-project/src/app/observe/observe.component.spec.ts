import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserveComponent } from './observe.component';

describe('ObserveComponent', () => {
  let component: ObserveComponent;
  let fixture: ComponentFixture<ObserveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObserveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
