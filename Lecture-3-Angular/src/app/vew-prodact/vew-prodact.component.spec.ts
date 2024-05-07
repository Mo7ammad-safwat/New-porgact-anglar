import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VewProdactComponent } from './vew-prodact.component';

describe('VewProdactComponent', () => {
  let component: VewProdactComponent;
  let fixture: ComponentFixture<VewProdactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VewProdactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VewProdactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
