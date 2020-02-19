var timerId;
/*
  関数checkAnswerは次の処理を行う
  (1) getElementById() メソッドでform要素全体を取得して変数targetに格納する
  (2) getElementById() メソッドでp要素全体を取得して変数reportに格納する
  (3) 問で選ばれた選択肢のvalue属性の値をv1とv2に格納する
  (4) v1とv2を比較演算子を用いて比較し判定結果を出力する
*/
function checkAnswer(){
  target = document.getElementById('quizForm');
   // value属性の値を変数v1と変数v2に代入
  v1 = target.radios1.value;
  v2 = target.radios2.value;
  console.log(v1,v2,v1 == 'q1choice2',v2 == 'q2choice2');
  report = document.getElementById('quizReport');
  clearInterval(timerId);
  // 得点0点から始める(変数pntに0を代入)
  pnt = 0;
  // 問1が正解か不正解か判定
  if( v1 == 'q1choice2' ){//正解
      q1m = '問1は正解です';
       pnt = pnt + 5;
    }else if(  v1 == 'q1choice1' ){//不正解
    q1m = 'おしい！';
  } else if(  v1 == 'q1choice3' ){//不正解
    q1m = '残念！';
  } else if(v1 == 'q1choice4'){//不正解
    q1m = 'ドンマイ！';
  } else {//どれでもない
    q1m = 'どの選択肢も選ばれていません';
  }
  // 問2が正解か不正解か判定
  if( v2 == 'q2choice2' ){//正解
      q2m = '問2は正解です';
      pnt = pnt + 5;
    }else if(  v2 == 'q2choice1' ){//不正解
    q2m = 'しっかり見直して！';
  } else if(  v2 == 'q2choice3' ){//不正解
    q2m = '違うぞ！';
  } else if(v2 == 'q2choice4'){//不正解
    q2m = 'しっかりして！';
  } else {//どれでもない
    q2m = 'どの選択肢も選ばれていません';
  }
  // レポートの文字列の結合
  result = pnt + '点でした。<br>' + q1m + '<br>' + q2m;
  report = document.getElementById('quizReport');
  report.innerHTML = v1+'<br>'+v2;
  console.log(v1,v2);
  // 結果表示部分に出力する
  report.innerHTML = result;
  console.log('クイズが判定されました',pnt+'点です');
}

function pressedBtn(){
  alert('ボタン「解答送信」がクリックされました');
  console.log('1つ目のダイアログ完了');
  alert('順次処理され2つ目のダイアログが表示されました');
  console.log('2つ目のダイアログ完了');
}
/*
  関数countDown
  (1)クリックするとカウントダウンする関数countDown（表示された数値を1減らす関数）
  (2)
  (3)クリックすると1秒ごとにカウントダウン関数を繰り返す処理
*/
function countDown(){
   moji = document.getElementById('numCountDown');
   suji = parseInt(moji.innerHTML);
   suji = suji-1;
  console.log(suji);
  moji.innerHTML = suji;
  if (suji == 0) {
      console.log('カウント終了');
      checkAnswer();
      clearInterval(timerId);
    }
}
/*
  関数autoCount
  関数countDownを1秒ごとに繰り返し実行する関数
*/
function autoCount(){
  timerId = setInterval(countDown,1000);
}
