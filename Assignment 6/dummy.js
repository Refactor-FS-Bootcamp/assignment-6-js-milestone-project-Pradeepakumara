let user = document.getElementById("user");
let comment = document.getElementById("comment");
let addComment = document.getElementById("add-comment");
// console.log(addComment);

let commentsContainer = document.getElementById("comments-container");
let commentCounter = document.getElementById("comment-counter");

let bla = 0;
addComment.addEventListener("click", function () {
    if (user.value == "" && comment.value == ""){
        alert("Please Enter the Username and Comment before you click add button");
    }
    else if(user.value == ""){
        alert("Please Enter the Username");
    }
    else if(comment.value == ""){
        alert("Please Enter the Comment");
    }
    else {
        bla += 1;
        let numOfComments = Number(commentCounter.textContent);
        let date = new Date();
        numOfComments++;

        commentCounter.textContent = numOfComments;
        commentsContainer.style.display = "block";
        commentsContainer.innerHTML += `
        <div class="comment-info">
            <h3><i class="fa-solid fa-user"></i> ${user.value}</h3>
            <p><i class="fa-solid fa-comment-dots"></i> ${comment.value}</p>
            <div class="comment-thumb">
                <div class="like-unlike">
                    <i class="fa fa-thumbs-up like${bla}"></i>
                    <span class="like-counter${bla}"></span><span> likes</span>
                    <i class="fa-solid fa-thumbs-down unlike${bla}"></i>
                    <span id="unlike-counter${bla}"></span><span> dislikes</span>
                </div>
                <div>
                    <spam class="date">${date.toLocaleDateString()} - ${date.toLocaleTimeString()}</spam>
                </div>
            </div>
            <i class="fa fa-trash"></i>
            </div
        `;
        user.value = "";
        comment.value = "";

        let like = document.querySelector(".like"+bla);
        let unlike = document.querySelector(".unlike"+bla);

        // console.log(like);

        let likeCounter = document.querySelector(".like-counter"+bla);
        let unlikeCounter = document.getElementById("unlike-counter"+bla);

        let likeCount = Number(likeCounter.textContent);
        like.addEventListener("click", function () {
            // let likeCount = Number(likeCounter.textContent);
            likeCount++;
            likeCounter.textContent = likeCount;
            console.log(like);
        });
        // likeCount = 0;

        let unlikeCount = Number(unlikeCounter.textContent);
        unlike.addEventListener("click", function () {
            unlikeCount++;
            unlikeCounter.textContent = unlikeCount;
        });
        // unlikeCount = 0;

        // let commenInfo = document.querySelector(".comment-info");
        let deleteComment = document.querySelectorAll(".comments div .fa-trash");
        for (let i = 0; i < deleteComment.length; i++) {
            deleteComment[i].addEventListener("click", function () {
                this.parentElement.style.display = "none";
                numOfComments--;
                commentCounter.textContent = numOfComments;
            });
        }
        console.log(bla);
    }
    // console.log(bla);
    
});

// clearInterval(addComment);


