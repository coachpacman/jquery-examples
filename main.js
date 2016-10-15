$(document).ready(function(){
  $("#tabs").tabIt({position:'center'})

  $.fn.hilite.defaults = {
    background:'pink',
    color:'white'
  }

  $("p").hilite()

  

  $("#headings").hilite()

  $("#tabs").show()
})