# fading-header

Fade a header in Ionic 4.

Originally tried using IntersectionObserver, but it does not have native support on iOS Safari. And the standard polyfill does not work well with shadow DOM either. Therefore, it makes the most sense to use scroll event.

TODO: Make sure the scroll event is being used passively for maximum performance.