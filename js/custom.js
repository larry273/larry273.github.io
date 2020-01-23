$('.carousel').carousel({
    interval:5000
})


  //copy email on click
$("#emailButton").click(function(){
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val("larrystaecey@gmail.com").select();
    document.execCommand("copy");
    $temp.remove();

    $("#toastText").text("Email address copied to clipboard")
    $('#emailToast').toast('show')
})

$("#emailButton").mouseenter(function(){
    $("#toastText").text("Click to copy email address to clipboard")
    $('#emailToast').toast('show')
})