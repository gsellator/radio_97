function draw_clock(){
  //setInterval("update_clock()",1000);
  setInterval(function(){
  
    var s = parseInt($("#seconds").html())

    if($("span.track-name").html() == "Europe 2"){
      var offset = 72000;
      $('#tv-image').css("background-image", "url(img/tv-image-1.png)");
    }
    else if($("span.track-name").html() == "NRJ"){
      var offset = 73505;
      $('#tv-image').css("background-image", "url(img/tv-image-2.png)");
    }
    else if($("span.track-name").html() == "Chante France") {
      var offset = 74921;
      $('#tv-image').css("background-image", "url(img/tv-image-3.png)");
    }
    else if($("span.track-name").html() == "Nova") {
      var offset = 75600;
      $('#tv-image').css("background-image", "url(img/tv-image-4.png)");
    }
    else if($("span.track-name").html() == "Style FM") {
      var offset = 77164;
      $('#tv-image').css("background-image", "url(img/tv-image-5.png)");
    }
    else if($("span.track-name").html() == "Skyrock") {
      var offset = 77512;
      $('#tv-image').css("background-image", "url(img/tv-image-6.png)");
    }
    else if($("span.track-name").html() == "Nostalgie") {
      var offset = 78810;
      $('#tv-image').css("background-image", "url(img/tv-image-7.png)");
    }
    else if($("span.track-name").html() == "Fun Radio") {
      var offset = 80160;
      $('#tv-image').css("background-image", "url(img/tv-image-8.png)");
    }
    else {
      var offset = 81035;
      $('#tv-image').css("background-image", "url(img/tv-image-9.png)");
    }

    update_clock(s, offset);
  },1000);
}

function update_clock(s, offset){

  var new_s = secondsToTime(s, offset);
  var hours = new_s.h;
  var minutes = new_s.m;
  var seconds = new_s.s;

  var ha = '';
  var hb = '';
  var ma = '';
  var mb = '';
  var sa = '';
  var sb = '';

  if (hours<10) {
    ha = 'img/chr-0.png';
    hb = 'img/chr-' + hours + '.png';
  }
  else {
    ha = parseInt(hours/10);
    hb = hours-(ha*10);
    ha = 'img/chr-' + ha + '.png';
    hb = 'img/chr-' + hb + '.png';
  }

  if (minutes<10) {
    ma = 'img/chr-0.png';
    mb = 'img/chr-' + minutes + '.png';
  }
  else {
    ma = parseInt(minutes/10);
    mb = minutes-(ma*10);
    ma = 'img/chr-' + ma + '.png';
    mb = 'img/chr-' + mb + '.png';
  }

  if (seconds<10) {
    sa = 'img/chr-0.png';
    sb = 'img/chr-' + seconds + '.png';
  }
  else {
    sa = parseInt(seconds/10);
    sb = seconds-(sa*10);
    sa = 'img/chr-' + sa + '.png';
    sb = 'img/chr-' + sb + '.png';
  }

  var elem = document.getElementById("h-a");
  elem.src = ha;
  var elem = document.getElementById("h-b");
  elem.src = hb;
  var elem = document.getElementById("m-a");
  elem.src = ma;
  var elem = document.getElementById("m-b");
  elem.src = mb;

  var elem = document.getElementsByClassName("spacer");

  if (elem[0].src.indexOf("spacer") != -1) {
    elem[0].src = "img/spacr-off.png";
  }
  else {
    elem[0].src = "img/spacer-on.png";
  }
  
  var elemt = document.getElementById("back");
  var elemtback = document.getElementById("background");

  switch(seconds) {
    case 0:
      elemt.style.clip = "rect(0px,139px,174px,130px)";
      elemtback.style.backgroundPosition = "0 0px";
      break;
    case 1:
      elemt.style.clip = "rect(0px,153px,174px,130px)";
      elemtback.style.backgroundPosition = "0 0px";
      break;
    case 2:
      elemt.style.clip = "rect(0px,166px,174px,130px)";
      elemtback.style.backgroundPosition = "0 0px";
      break;
    case 3:
      elemt.style.clip = "rect(0px,179px,174px,130px)";
      elemtback.style.backgroundPosition = "0 0px";
      break;
    case 4:
      elemt.style.clip = "rect(0px,190px,174px,130px)";
      elemtback.style.backgroundPosition = "0 0px";
      break;
    case 5:
      elemt.style.clip = "rect(0px,203px,174px,130px)";
      elemtback.style.backgroundPosition = "0 0px";
      break;
    case 6:
      elemt.style.clip = "rect(0px,214px,174px,130px)";
      elemtback.style.backgroundPosition = "0 0px";
      break;
    case 7:
      elemt.style.clip = "rect(0px,224px,174px,130px)";
      elemtback.style.backgroundPosition = "0 0px";
      break;
    case 8:
      elemt.style.clip = "rect(0px,233px,174px,130px)";
      elemtback.style.backgroundPosition = "0 0px";
      break;
    case 9:
      elemt.style.clip = "rect(0px,241px,174px,130px)";
      elemtback.style.backgroundPosition = "0 0px";
      break;
    case 10:
      elemt.style.clip = "rect(0px,266px,74px,130px)";
      elemtback.style.backgroundPosition = "0 0px";
      break;
    case 11:
      elemt.style.clip = "rect(0px,266px,87px,130px)";
      elemtback.style.backgroundPosition = "0 0px";
      break;
    case 12:
      elemt.style.clip = "rect(0px,266px,100px,130px)";
      elemtback.style.backgroundPosition = "0 0px";
      break;
    case 13:
      elemt.style.clip = "rect(0px,266px,112px,130px)";
      elemtback.style.backgroundPosition = "0 0px";
      break;
    case 14:
      elemt.style.clip = "rect(0px,266px,127px,130px)";
      elemtback.style.backgroundPosition = "0 0px";
      break;
    case 15:
      elemt.style.clip = "rect(0px,266px,140px,130px)";
      elemtback.style.backgroundPosition = "0 0px";
      break;
    case 16:
      elemt.style.clip = "rect(0px,266px,153px,130px)";
      elemtback.style.backgroundPosition = "0 0px";
      break;
    case 17:
      elemt.style.clip = "rect(0px,266px,166px,130px)";
      elemtback.style.backgroundPosition = "0 0px";
      break;
    case 18:
      elemt.style.clip = "rect(0px,266px,179px,130px)";
      elemtback.style.backgroundPosition = "0 0px";
      break;
    case 19:
      elemt.style.clip = "rect(0px,266px,192px,130px)";
      elemtback.style.backgroundPosition = "0 0px";
      break;
    case 20:
      elemt.style.clip = "rect(0px,266px,203px,130px)";
      elemtback.style.backgroundPosition = "0 0px";
      break;
    case 21:
      elemt.style.clip = "rect(0px,266px,214px,130px)";
      elemtback.style.backgroundPosition = "0 0px";
      break;
    case 22:
      elemt.style.clip = "rect(0px,266px,224px,130px)";
      elemtback.style.backgroundPosition = "0 0px";
      break;
    case 23:
      elemt.style.clip = "rect(0px,266px,233px,130px)";
      elemtback.style.backgroundPosition = "0 0px";
      break;
    case 24:
      elemt.style.clip = "rect(0px,266px,241px,130px)";
      elemtback.style.backgroundPosition = "0 0px";
      break;
    case 25:
      elemt.style.clip = "rect(241px,266px,266px,193px)";
      elemtback.style.backgroundPosition = "0 -266px";
      break;
    case 26:
      elemt.style.clip = "rect(241px,266px,266px,179px)";
      elemtback.style.backgroundPosition = "0 -266px";
      break;
    case 27:
      elemt.style.clip = "rect(241px,266px,266px,166px)";
      elemtback.style.backgroundPosition = "0 -266px";
      break;
    case 28:
      elemt.style.clip = "rect(241px,266px,266px,153px)";
      elemtback.style.backgroundPosition = "0 -266px";
      break;
    case 29:
      elemt.style.clip = "rect(241px,266px,266px,140px)";
      elemtback.style.backgroundPosition = "0 -266px";
      break;
    case 30:
      elemt.style.clip = "rect(241px,266px,266px,125px)";
      elemtback.style.backgroundPosition = "0 -266px";
      break;
    case 31:
      elemt.style.clip = "rect(241px,266px,266px,114px)";
      elemtback.style.backgroundPosition = "0 -266px";
      break;
    case 32:
      elemt.style.clip = "rect(241px,266px,266px,100px)";
      elemtback.style.backgroundPosition = "0 -266px";
      break;
    case 33:
      elemt.style.clip = "rect(241px,266px,266px,88px)";
      elemtback.style.backgroundPosition = "0 -266px";
      break;
    case 34:
      elemt.style.clip = "rect(241px,266px,266px,74px)";
      elemtback.style.backgroundPosition = "0 -266px";
      break;
    case 35:
      elemt.style.clip = "rect(241px,266px,266px,64px)";
      elemtback.style.backgroundPosition = "0 -266px";
      break;
    case 36:
      elemt.style.clip = "rect(233px,95px,241px,0px)";
      elemtback.style.backgroundPosition = "0 -532px";
      break;
    case 37:
      elemt.style.clip = "rect(225px,95px,241px,0px)";
      elemtback.style.backgroundPosition = "0 -532px";
      break;
    case 38:
      elemt.style.clip = "rect(214px,95px,241px,0px)";
      elemtback.style.backgroundPosition = "0 -532px";
      break;
    case 39:
      elemt.style.clip = "rect(203px,95px,241px,0px)";
      elemtback.style.backgroundPosition = "0 -532px";
      break;
    case 40:
      elemt.style.clip = "rect(191px,95px,241px,0px)";
      elemtback.style.backgroundPosition = "0 -532px";
      break;
    case 41:
      elemt.style.clip = "rect(180px,95px,241px,0px)";
      elemtback.style.backgroundPosition = "0 -532px";
      break;
    case 42:
      elemt.style.clip = "rect(166px,95px,241px,0px)";
      elemtback.style.backgroundPosition = "0 -532px";
      break;
    case 43:
      elemt.style.clip = "rect(153px,95px,241px,0px)";
      elemtback.style.backgroundPosition = "0 -532px";
      break;
    case 44:
      elemt.style.clip = "rect(139px,95px,241px,0px)";
      elemtback.style.backgroundPosition = "0 -532px";
      break;
    case 45:
      elemt.style.clip = "rect(125px,95px,241px,0px)";
      elemtback.style.backgroundPosition = "0 -532px";
      break;
    case 46:
      elemt.style.clip = "rect(113px,95px,241px,0px)";
      elemtback.style.backgroundPosition = "0 -532px";
      break;
    case 47:
      elemt.style.clip = "rect(99px,95px,241px,0px)";
      elemtback.style.backgroundPosition = "0 -532px";
      break;
    case 48:
      elemt.style.clip = "rect(87px,95px,241px,0px)";
      elemtback.style.backgroundPosition = "0 -532px";
      break;
    case 49:
      elemt.style.clip = "rect(74px,95px,241px,0px)";
      elemtback.style.backgroundPosition = "0 -532px";
      break;
    case 50:
      elemt.style.clip = "rect(62px,95px,241px,0px)";
      elemtback.style.backgroundPosition = "0 -532px";
      break;
    case 51:
      elemt.style.clip = "rect(51px,95px,241px,0px)";
      elemtback.style.backgroundPosition = "0 -532px";
      break;
    case 52:
      elemt.style.clip = "rect(41px,95px,241px,0px)";
      elemtback.style.backgroundPosition = "0 -532px";
      break;
    case 53:
      elemt.style.clip = "rect(33px,64px,241px,0px)";
      elemtback.style.backgroundPosition = "0 -532px";
      break;
    case 54:
      elemt.style.clip = "rect(0px,64px,241px,0px)";
      elemtback.style.backgroundPosition = "0 -532px";
      break;
    case 55:
      elemt.style.clip = "rect(0px,74px,241px,0px)";
      elemtback.style.backgroundPosition = "0 -532px";
      break;
    case 56:
      elemt.style.clip = "rect(0px,88px,241px,0px)";
      elemtback.style.backgroundPosition = "0 -532px";
      break;
    case 57:
      elemt.style.clip = "rect(0px,102px,241px,0px)";
      elemtback.style.backgroundPosition = "0 -532px";
      break;
    case 58:
      elemt.style.clip = "rect(0px,113px,241px,0px)";
      elemtback.style.backgroundPosition = "0 -532px";
      break;
    case 59:
      elemt.style.clip = "rect(0px,127px,241px,0px)";
      elemtback.style.backgroundPosition = "0 -532px";
      break;
  }
}

function secondsToTime(sec, offset) {
  secs = sec + offset;
  var hours = Math.floor(secs / (60 * 60));
  var divisor_for_minutes = secs % (60 * 60);
  var minutes = Math.floor(divisor_for_minutes / 60);
  var divisor_for_seconds = divisor_for_minutes % 60;
  var seconds = Math.ceil(divisor_for_seconds);

  var obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
  };
  return obj;
}
