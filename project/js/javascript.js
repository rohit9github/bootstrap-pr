// COUNTER

$('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
  
    {
  
      duration: 2000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
  
    });  
  
  });

// ACCORDIAN

$(document).ready(function(){
  $("h3").click(function(){
      $(this).parent(".accordian-item").find(".accordian-content").slideToggle();
      $(this).parent(".accordian-item").prevAll(".accordian-item").find(".accordian-content").slideUp();
      $(this).parent(".accordian-item").nextAll(".accordian-item").find(".accordian-content").slideUp();
  });
});