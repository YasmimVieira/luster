import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecentlyActivies } from './recently-activies';

describe('RecentlyActivies', () => {
  let component: RecentlyActivies;
  let fixture: ComponentFixture<RecentlyActivies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentlyActivies],
    }).compileComponents();

    fixture = TestBed.createComponent(RecentlyActivies);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
