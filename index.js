function getFirstSelector(selector) {
  var elem = document.querySelector(selector);
  return elem;
}

function nestedTarget() {
  // return document.querySelector('#nested .target');
  return document.querySelector('#nested').querySelector('.target');
}

function deepestChild() {
  var tree = document.querySelector('#grand-node');
  // var t
  var data = tree.childNodes[1];
  while (data.childNodes != undefined){
    data = data.childNodes[1];
  }

  return data.innerText;
}

function increaseRankBy(n) {
  var list = document.querySelectorAll('.ranked-list');

  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list[i].children.length; j++) {
      list[i].children[j].innerHTML = parseInt(list[i].children[j].innerHTML) + 3;
    }
  }
}
