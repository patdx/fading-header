import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import { Content } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  @ViewChild("header")
  headerRef: ElementRef;

  @ViewChild(Content)
  content: Content;

  titleOpacity = 0;
  headerOpacity = 1;

  async ngOnInit() {
    const header = this.headerRef.nativeElement as HTMLElement;
    const scroller = await this.content.getScrollElement();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // header is visible
          this.titleOpacity = 0;
          this.headerOpacity = 1;
        } else {
          // header is not visible
          this.titleOpacity = 1;
          this.headerOpacity = 0;
        }
      },
      { root: scroller }
    );
    observer.observe(header);
  }
}
