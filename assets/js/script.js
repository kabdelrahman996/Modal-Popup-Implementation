$(document).ready(() => {
    $("#open-modal").click(() => {
        $("#myModal").fadeIn();
    });

    $("#close-modal").click(() => {
        $("#myModal").fadeOut();
    });

    setTimeout(() => {
        $("#myModal").fadeOut();
    }, 10000);

    
});
