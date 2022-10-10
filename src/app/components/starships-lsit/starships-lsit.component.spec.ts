import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipsLsitComponent } from './starships-lsit.component';

describe('StarshipsLsitComponent', () => {
  let component: StarshipsLsitComponent;
  let fixture: ComponentFixture<StarshipsLsitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarshipsLsitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarshipsLsitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
