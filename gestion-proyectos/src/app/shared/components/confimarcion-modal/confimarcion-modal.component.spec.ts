import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfimarcionModalComponent } from './confimarcion-modal.component';

describe('ConfimarcionModalComponent', () => {
  let component: ConfimarcionModalComponent;
  let fixture: ComponentFixture<ConfimarcionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfimarcionModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfimarcionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
