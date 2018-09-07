function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {
  var rank = document.getElementById("app").querySelectorAll('.rank-list')
  for (var i = 0; i < rank.length; i++) {
    if (rank[i].innerHTML = parseInt(rank[i].innerHTML) + 1 {
    }
  }
  return
}