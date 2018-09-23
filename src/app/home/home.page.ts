import { Component, ViewChild } from "@angular/core";
import { Content } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  @ViewChild(Content)
  content: Content;

  titleOpacity = 0;
  headerOpacity = 1;

  // This is the approximate scroll point where the header is
  // 70% covered. It's a lot of work to get
  // the actually height of the header. Even in ngAfterViewInit() lifecycle
  // event, it's height is 0. So we can't get the real height of the header object
  // until much too late.
  threshold = 50;

  onScroll(event: CustomEvent) {
    const scrollTop = event.detail.scrollTop as number;
    if (scrollTop > this.threshold) {
      // header is not visible
      this.titleOpacity = 1;
      this.headerOpacity = 0;
    } else {
      // header is visible
      this.titleOpacity = 0;
      this.headerOpacity = 1;
    }
  }
}
