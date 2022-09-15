async function sendLikes(event) {
    event.preventDefault();
    let target = event.target;
    let url = target.href;
    let response = await fetch(url);
    let response_json = await response.json()
    let count = response_json.count
    let articleId = target.dataset.articleId;
    let span = document.getElementById(articleId)
    span.innerText = `Likes: ${count}`;
    if (target.innerText === 'Dislike') {
        target.innerText = 'Like';
    } else {
        target.innerText = 'Dislike';
    }

}


function onLoad() {
    let likes = document.getElementsByClassName('likes')
    for (let i = 0; i < likes.length; i++) {
        likes[i].addEventListener('click', sendLikes);
    }
}

window.addEventListener('load', onLoad);
