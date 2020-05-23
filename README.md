# fading-header

Fade a header in Ionic 4.

Originally tried using IntersectionObserver, but it does not have native support
on iOS Safari. And the standard polyfill does not work well with shadow DOM
either. Therefore, it makes the most sense to use scroll event.

Additionally, in ngOnInit, ngAfterViewInit, ngAfterContentInit lifecycle events,
the header size is still 0. It seems that ionViewWillEnter is the first event to
contain the real header size. So we get the height + position of the header in
ionViewWillEnter to calculate the change point.

## NOTE

Actually, Ionic added this feature since I made this small demo.

It is called
[Collapsible Large Titles](https://ionicframework.com/docs/api/title#collapsible-large-titles).

iOS also has some improvements to IntersectionObserver/etc.

If I were writing this code in 2020, I would use real IntersectionObserver or
the ponyfill instead of onScroll event.
