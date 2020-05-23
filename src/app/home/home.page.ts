import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild
} from "@angular/core";
import { IonContent } from "@ionic/angular";
import { company as fakerCompany, lorem as fakerLorem } from "faker";
import { startCase, times } from "lodash";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {
  @ViewChild(IonContent, { static: true })
  content: IonContent;

  @ViewChild("h1", { static: true })
  h1: ElementRef;

  /** <ion-header> controls the shadow on Android devices  */
  ionHeaderOpacity = 0;
  ionTitleOpacity = 0;
  h1Opacity = 1;

  /**
   * first threshold is when user starts scrolling
   *   (used to trigger shadow on Android)
   * second threshold is when header starts to cover
   */
  thresholds: [number, number];

  items = times(20, () => ({
    name: startCase(fakerCompany.bsNoun()),
    content: fakerLorem.paragraph()
  }));

  ionViewWillEnter() {
    const { offsetTop, offsetHeight } = this.h1.nativeElement as HTMLElement;
    this.thresholds = [offsetTop / 2, offsetTop + offsetHeight / 2];
  }

  onScroll(event: CustomEvent) {
    const scrollY = event.detail.scrollTop as number;
    if (scrollY > this.thresholds[1]) {
      // header is totally invsible
      this.ionHeaderOpacity = 1;
      this.ionTitleOpacity = 1;
      this.h1Opacity = 0;
    } else if (scrollY > this.thresholds[0]) {
      // user has started to scroll down (show shadow)
      this.ionHeaderOpacity = 1;
      this.ionTitleOpacity = 0;
      this.h1Opacity = 1;
    } else {
      // header is visible
      this.ionHeaderOpacity = 0;
      this.ionTitleOpacity = 0;
      this.h1Opacity = 1;
    }
  }
}
