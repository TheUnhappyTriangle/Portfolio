$(document).ready(function() {
    console.log("index.js ready");
    $('.button').click(function() {
        let btnText = $(this).text();
        console.log(btnText);
        localStorage.setItem('btnText', btnText);
    });
});