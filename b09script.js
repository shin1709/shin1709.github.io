// 文字列の位置を2px移動する関数
function updownTarget() {
  udtarget = document.getElementById('updown');
  y = document.defaultView.getComputedStyle(udtarget, '').bottom;
  //console.log("y is",y);

  if(parseInt(y) >= 20){
    s = "down";
  } else if(parseInt(y) <= 0) {
    s = "up";
  }
  //console.log("state is", s) //webコンソールに変数sを表示

  if (s == "down") {
    yvalue = parseInt(y) - 2;
  } else if (s == "up") {
    yvalue = parseInt(y) + 2;
  } else {
    //console.log("error:", y, s, yvalue);
  }

  //console.log("yvalue is", yvalue);
  udtarget.style.bottom = yvalue + 'px';
}

//アニメーション onUpdown
// 100msごとに関数updownTarget()を実行
function onUpdown() {
    setInterval(updownTarget, 100);
}    
