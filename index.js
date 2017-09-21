function getFirstSelector(selector) {
  var elem = document.querySelector(selector);
  return elem;
}

function nestedTarget() {
  // return document.querySelector('#nested .target');
  return document.querySelector('#nested').querySelector('.target');
}

function deepestChild() {
  return
}

function increaseRankBy(n) {
  var list = document.querySelectorAll('.ranked-list');
  let li1 = list[0];
  let li2 = list[1];
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list[i].length; j++) {
      list[i][j].innerHTML = parseInt(list[i][j].innerHTML) + 3;
    }
  }
}
