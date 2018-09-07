function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {
  var rank = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (var i = 0; i < rank.length; i++) {
    rank[i].innerHTML = parseInt(rank[i].innerHTML) + n
  }
  return
}

function deepestChild() {
  var deep = document.getElementById('grand-node').querySelectorAll('div')
  for (var i = 0; i < deep.length; i++) {
    deep[i].innerHTML = deep[i].innerHTML - 1
  }
  return
}