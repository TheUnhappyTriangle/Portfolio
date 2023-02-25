$(document).ready(function() {
    $('#project-container').on('click', '.button', function() {
        const btnText = $(this).text();
        console.log("Btn clicked");
        $.getJSON("files/PageContent.json", function(data) {
            let contentJSON = data; 
            console.log(data);
            let index = 0;
            switch (btnText) {
                // Website
                case 'This Site':
                    index = 0;
                    break;
                // School
                case 'Snake in C':
                    index = 1;
                    break;
                case 'Java Game':
                    index = 2;
                    break;
                case 'News Site':
                    index = 3;
                    break;
            }

            console.log(contentJSON[index].Title)
            pageChange(contentJSON[index].Title, contentJSON[index].Description, contentJSON[index].Image, contentJSON[index].Link)   
        });

        function pageChange(title, desc, img, link) {
            $('.proj-title').text(title);
            $('.proj-desc').text(desc);
            $('.proj-img').attr('src', img);
            $('.proj-link').attr('href', link);
        }
    });
});