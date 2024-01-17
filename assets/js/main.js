// MENU
$("._icon_open").click(function() {
    $("._mob_menu").addClass("_mob_menu_open");
});
$("._icon_close").click(function() {
    $("._mob_menu").removeClass("_mob_menu_open");
});

// collapse
$('.accordion-toggle').click(function(e) {
  	e.preventDefault();  
    $("a:first-of-type").removeClass('chev');
    
    var $this = $(this);
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        // $this.next().removeClass('chev');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .accordion-inner').removeClass('show');
        $this.parent().parent().find('li .accordion-inner').slideUp(350);
        $this.toggleClass('chev');
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});

// Countdown 
const countdown = () => {
    const countDate = new Date("March 29, 2022 23:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    // how is it work
    const second = 1000;
    const minute = second *60;
    const hour = minute * 60;
    const day = hour * 24;

    // calculate this 
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);
    
    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minutes").innerText = textMinute;
    document.querySelector(".second").innerText = textSecond;

};
setInterval(countdown, 1000);
