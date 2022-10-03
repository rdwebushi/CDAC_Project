import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AshaComponent } from './asha.component';

describe('AshaComponent', () => {
  let component: AshaComponent;
  let fixture: ComponentFixture<AshaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AshaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AshaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
