import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AashaComponent } from './aasha.component';

describe('AashaComponent', () => {
  let component: AashaComponent;
  let fixture: ComponentFixture<AashaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AashaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AashaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
