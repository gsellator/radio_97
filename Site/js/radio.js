function draw_clock(){
    setInterval("update_clock()",1000);
}

function update_clock(){
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();

        var ha = '';
        var hb = '';
        var ma = '';
        var mb = '';
        var sa = '';
        var sb = '';

        if (hours<10)
        {
            ha = 'img/chr-0.png';
            hb = 'img/chr-' + hours + '.png';
        }
        else
        {
            ha = parseInt(hours/10);
            hb = hours-(ha*10);

            ha = 'img/chr-' + ha + '.png';
            hb = 'img/chr-' + hb + '.png';
        }

        if (minutes<10)
        {
            ma = 'img/chr-0.png';
            mb = 'img/chr-' + minutes + '.png';
        }
        else
        {
            ma = parseInt(minutes/10);
            mb = minutes-(ma*10);

            ma = 'img/chr-' + ma + '.png';
            mb = 'img/chr-' + mb + '.png';
        }

        if (seconds<10)
        {
            sa = 'img/chr-0.png';
            sb = 'img/chr-' + seconds + '.png';
        }
        else
        {
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

        /*<img src="spacer.png" class="spacer">
        <img src="null.png" id="s-a">
        <img src="null.png" id="s-b">
        var elem = document.getElementById("s-a");
        elem.src = sa;
        var elem = document.getElementById("s-b");
        elem.src = sb;*/

        var elem = document.getElementsByClassName("spacer");
        //if (elem[0].src = "spacer.png"
        if (elem[0].src.indexOf("spacer") != -1)
        {
            elem[0].src = "img/spacr-off.png";
            //elem[1].src = "spacr-null.png";
        }
        else
        {
            elem[0].src = "img/spacer-on.png";
            //elem[1].src = "spacer.png";
        }
        

        var elemt = document.getElementById("back");
        var elemtback = document.getElementById("background");

        switch(seconds)
        {
        case 0:
          //document.write(seconds);
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