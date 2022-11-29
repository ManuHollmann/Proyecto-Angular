import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpgListComponent } from './rpg-list.component';

describe('RpgListComponent', () => {
  let component: RpgListComponent;
  let fixture: ComponentFixture<RpgListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RpgListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RpgListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
