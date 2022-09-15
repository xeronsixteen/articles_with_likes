async function buttonOnclick(event) {
    event.preventDefault()
    let target = event.target
    let url = target.dataset.likeLink;
    console.log(url)
    let response = await fetch(url);
    let article_json = await response.json()
    let likes_btn = article_json['article_likes'];
    console.log(likes_btn)
    let counter_likes = document.getElementById('myData')
    counter_likes.innerText = 'Лайки: ' + likes_btn
    console.log(counter_likes)
    // let button = await document.getElementById('like')

    // if (button.innerText === 'like') {
    //     button.innerText = 'dislike'
    // } else if (button.innerText === 'dislike') {
    //     button.innerText = 'like'
    // }
}

// function getArticles() {
//     let button = document.getElementsByClassName('like')
//     for (let i = 0; i < button.length; i++) {
//         button[i].addEventListener('click', () => buttonOnclick(`like${(i + 1)}`, event))
//     }
// }

function getArticles() {
    let buttons = document.getElementsByClassName('like');
    for (let btn of buttons) {
        btn.addEventListener('click', buttonOnclick)
    }
}
//
//
window.addEventListener("load", getArticles);