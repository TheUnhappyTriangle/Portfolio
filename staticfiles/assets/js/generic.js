function pageChange(title, desc, img, alt, link, showlink) {
    console.log("getPageContent function was called");
    $('.proj-title').text(title);
    $('.proj-desc').text(desc);
    $('.proj-img').attr('src', img);
    $('.proj-img').attr('alt', alt);
    $('.proj-link').attr('href', link);
    if (!showlink) { $('.proj-link').hide(); }
}

function getPageContent(projIdx) {
    console.log("getPageContent function was called");
    $.getJSON('files/PageContent.json', function(data){
        pageChange( data[projIdx].Title, data[projIdx].Description, data[projIdx].Image, data[projIdx].ImageAlt,
                    data[projIdx].Link, data[projIdx].ShowLink);
    });
}

$(document).ready(function() {
    let path = window.location.pathname;
    switch (path)
    {
        // Website
        case '/This-Site':
            getPageContent(1);
            break;

        // School
        case '/C-Snake':
            getPageContent(1);
            break;
        case '/Java-Game':
            getPageContent(2);
            break;
        case '/News-App':
            getPageContent(3);
            break;
    }
});