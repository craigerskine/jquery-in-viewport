# jquery.inviewport.js

Requires jQuery.

### Usage

```code
$(selector).inViewport('#');

selector = your element you'd like to watch
# = an integer to offset the tolerance
```
### Example

```javascript
$(window).on('resize scroll', function() {
  $('.blah').each(function() {
    if($(this).inViewport('-150')) {
      $(this).addClass('inview');
    } else {
      $(this).removeClass('inview');
    }
  });
});
```
