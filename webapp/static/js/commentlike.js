async function sendLikes(event) {
    event.preventDefault();
    let target = event.target;
    let url = target.href;
    let response = await fetch(url);
    let response_json = await response.json()
    let count = response_json.count
    let commentId = target.dataset.commentId;
    let span = document.getElementById(commentId)
    span.innerText = `Likes: ${count}`;
    if (target.innerText === 'Dislike') {
        target.innerText = 'Like';
    } else {
        target.innerText = 'Dislike';
    }

}


function onLoad() {
    let likes = document.getElementsByClassName('comment_likes')
    for (let i = 0; i < likes.length; i++) {
        likes[i].addEventListener('click', sendLikes);
    }
}

window.addEventListener('load', onLoad);
