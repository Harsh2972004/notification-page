$(".mark-btn").click(function(){
    $(".unread").removeClass("unread");

    $(".notification-count").fadeOut(300, function(){
        $(this). remove();
    });
});

var classes= $('.unread').length;
console.log(classes);

$(".unread-1").click(function(){
    $(".unread-1").removeClass("unread");
    classes = classes - 1
    if (classes === 0) {
        $(".notification-count").fadeOut(300, function(){
        $(this). remove();
    });
    }
    else {
        $('.notification-count').text(classes);
    }
});

$(".unread-2").click(function(){
    $(".unread-2").removeClass("unread");
    classes = classes - 1
    if (classes === 0) {
        $(".notification-count").fadeOut(300, function(){
        $(this). remove();
    });
    }
    else {
        $('.notification-count').text(classes);
    }
});

$(".unread-3").click(function(){
    $(".unread-3").removeClass("unread");
    classes = classes - 1
    if (classes === 0) {
        $(".notification-count").fadeOut(300, function(){
        $(this). remove();
    });
    }
    else {
        $('.notification-count').text(classes);
    }
});

