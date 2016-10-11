(function(){
  // $("p").hilite()

  $.fn.hilite = function(options) {
    options = $.extend($.fn.hilite.defaults, options)
    return this.each(function(){
      $(this).css({background:options.background, color:options.color})
    })
  }

  $.fn.hilite.defaults = {
    background:'yellow',
    color:'black'
  }
}())