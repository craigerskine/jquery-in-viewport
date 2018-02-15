Requires jQuery.

### Usage

```code
$(selector).inViewport('#');
```
selector = your element you'd like to watch  
    # = an integer to offset the tolerance

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

This will add a class called "inview" to the .blah elements after they are 150px inside the viewport on browser scroll and/or resize.
