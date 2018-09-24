# fading-header

Fade a header in Ionic 4.

Originally tried using IntersectionObserver, but it does not have native support
on iOS Safari. And the standard polyfill does not work well with shadow DOM
either. Therefore, it makes the most sense to use scroll event.

Additionally, in ngOnInit, ngAfterViewInit, ngAfterContentInit lifecycle events,
the header size is still 0. It seems that ionViewWillEnter is the first event to
contain the real header size. So we get the height + position of the header in
ionViewWillEnter to calculate the change point.
