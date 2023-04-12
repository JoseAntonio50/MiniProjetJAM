function toggleLike1(btn) {

    let likesSpan = document.getElementById('sumLikes1')
    let likesCount = parseInt(likesSpan.innerHTML);

    if (btn.classList.contains("liked")) {
        likesCount--;
        btn.classList.remove("liked");
    } else {
        likesCount++;
        btn.classList.add("liked");
    }

    likesSpan.innerHTML = likesCount;
}

function toggleDislike1(btn) {

    let dislikesSpan = document.getElementById('sumDisLikes1')
    let dislikesCount = parseInt(dislikesSpan.innerHTML);

    if (btn.classList.contains("disliked")) {
        dislikesCount--;
        btn.classList.remove("disliked");
    } else {
        dislikesCount++;
        btn.classList.add("disliked");
    }

    dislikesSpan.innerHTML = dislikesCount;
}

function toggleLike2(btn) {

    let likesSpan = document.getElementById('sumLikes2')
    let likesCount = parseInt(likesSpan.innerHTML);

    if (btn.classList.contains("liked")) {
        likesCount--;
        btn.classList.remove("liked");
    } else {
        likesCount++;
        btn.classList.add("liked");
    }

    likesSpan.innerHTML = likesCount;
}

function toggleDislike2(btn) {

    let dislikesSpan = document.getElementById('sumDisLikes2')
    let dislikesCount = parseInt(dislikesSpan.innerHTML);

    if (btn.classList.contains("disliked")) {
        dislikesCount--;
        btn.classList.remove("disliked");
    } else {
        dislikesCount++;
        btn.classList.add("disliked");
    }

    dislikesSpan.innerHTML = dislikesCount;
}

function toggleLike3(btn) {

    let likesSpan = document.getElementById('sumLikes3')
    let likesCount = parseInt(likesSpan.innerHTML);

    if (btn.classList.contains("liked")) {
        likesCount--;
        btn.classList.remove("liked");
    } else {
        likesCount++;
        btn.classList.add("liked");
    }

    likesSpan.innerHTML = likesCount;
}

function toggleDislike3(btn) {

    let dislikesSpan = document.getElementById('sumDisLikes3')
    let dislikesCount = parseInt(dislikesSpan.innerHTML);

    if (btn.classList.contains("disliked")) {
        dislikesCount--;
        btn.classList.remove("disliked");
    } else {
        dislikesCount++;
        btn.classList.add("disliked");
    }

    dislikesSpan.innerHTML = dislikesCount;
}