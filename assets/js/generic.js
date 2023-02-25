function pageChange(title, desc, img, link) {
    console.log("getPageContent function was called");
    $('.proj-title').text(title);
    $('.proj-desc').text(desc);
    $('.proj-img').attr('src', img);
    $('.proj-link').attr('href', link);
}

function getPageContent(index) {
    console.log("getPageContent function was called");
    $.getJSON('files/PageContent.json', function(data){
        pageChange(data[index].Title, data[index].Description, data[index].Image, data[index].Link);
    });
}

$(document).ready(function() {
    let projKey = localStorage.getItem('btnText');
    let jsonIndex = 0;
    console.log("generic.js ready with: "+projKey);

    switch (projKey)
    {
        // Website
        case 'This Site':
            jsonIndex = 0;
            break;

        // School
        case 'Snake in C':
            jsonIndex = 1;
            break;
        case 'Java Game':
            jsonIndex = 2;
            break;
        case 'News Site':
            jsonIndex = 3;
            break;
    }

    getPageContent(jsonIndex);
});