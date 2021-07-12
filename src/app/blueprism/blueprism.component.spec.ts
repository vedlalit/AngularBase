import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueprismComponent } from './blueprism.component';

describe('BlueprismComponent', () => {
  let component: BlueprismComponent;
  let fixture: ComponentFixture<BlueprismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlueprismComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueprismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
