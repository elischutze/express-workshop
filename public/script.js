$(document).ready(function() {
    $.ajax({
        url: '/get-posts',
        dataType: 'json',
        success: function(data) {

            for (var blogPost in data) {
                var postDiv         = document.createElement('div');
                var postText        = document.createElement('p');
                var postLink = document.createElement('a');
                var postTitle        = document.createElement('h3');
                var thumbnail       = document.createElement('img');
                var postContainer   = document.getElementsByClassName('post-container')[0];

                thumbnail.src = "./img/logo2.png";
                thumbnail.className = "thumbnail";
                // NEW THINGS
                postLink.setAttribute(
                    "href", '/posts/'+blogPost
                );
                postTitle.innerHTML = data[blogPost].blogTitle;
                postText.innerHTML = data[blogPost].blogpost ;
                ////
                postDiv.className = "post";

                postDiv.appendChild(thumbnail);
                postDiv.appendChild(postLink);
                postLink.appendChild(postTitle);
                postDiv.appendChild(postText);
                postContainer.appendChild(postDiv);

            }
        },
        error: function(error){
            console.log(error);
        }
    });
});