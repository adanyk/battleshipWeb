import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShotMarkComponent } from './shot-mark.component';

describe('ShotMarkComponent', () => {
  let component: ShotMarkComponent;
  let fixture: ComponentFixture<ShotMarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShotMarkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShotMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
