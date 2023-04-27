import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { NxWelcomeComponent } from "./nx-welcome.component";

describe("AppComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [AppComponent, NxWelcomeComponent],
    }).compileComponents();
  });

  it("should render title", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector("h1")?.textContent).toContain(
      "Welcome isoc-v2-front"
    );
  });

  it(`should have as title 'isoc-v2-front'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual("isoc-v2-front");
  });
});
