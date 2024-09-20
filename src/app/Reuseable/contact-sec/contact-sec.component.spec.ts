import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSecComponent } from './contact-sec.component';

describe('ContactSecComponent', () => {
  let component: ContactSecComponent;
  let fixture: ComponentFixture<ContactSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactSecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
