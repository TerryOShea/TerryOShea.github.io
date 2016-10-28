$(document).ready(function() {
  
  const $page = $('.page'),
      $headerBtn = $('.header-btn'), 
      $aboutBtn = $('.header-about'),
      $homeBtn = $('.header-name'), 
      $workBtn = $('.header-work');
  
  const canvas = document.getElementById('homecanvas'), 
        ctx = canvas.getContext('2d'), 
        pattern = document.createElement('canvas'),
        pctx = pattern.getContext('2d');
  pattern.width = 50;
  pattern.height = 50;
  var patternCt = 0;
  
  newPattern();
  var rotationCt = 180;
  $('.flipper').on('click', function() {
    $(this).css('transform', 'rotateX(' + rotationCt + 'deg)');
    rotationCt += 180;
  });
  
  $headerBtn.on('click', function() {
    let oldpage = $('.disabled'), 
        newpage = $(this);
    
    setTimeout(function() {
      newpage.addClass('disabled');
      oldpage.removeClass('disabled');
      $('.arrow').remove();
      if (newpage.hasClass('header-about')) {
        $homeBtn.append("<span class='arrow right-arrow'> &gt;</span>");
        $workBtn.append("<span class='arrow right-arrow'>&gt;&gt;</span>");
      }
      else if (newpage.hasClass('header-work')) {
        $homeBtn.prepend("<span class='arrow right-arrow'> &lt; </span>");
        $aboutBtn.prepend("<span class='arrow right-arrow'>&lt;&lt;</span>");
      }
      else {
        $aboutBtn.prepend("<span class='arrow right-arrow'> &lt;</span>");
        $workBtn.append("<span class='arrow right-arrow'>&gt;</span>");
      }
    }, 1000);
    
    if (newpage.hasClass('header-about')) {
      if (oldpage.hasClass('header-name')) $page.css('animation', 'hometoabout 2s forwards');
      else {
        $page.css('animation', 'worktoabout 2s forwards');
        newPattern();
      }
    }
    else if (newpage.hasClass('header-work')) {
      if (oldpage.hasClass('header-name')) $page.css('animation', 'hometowork 2s forwards');
      else { 
        $page.css('animation', 'abouttowork 2s forwards');
        newPattern()
      }
    }
    else {
      if (oldpage.hasClass('header-about')) $page.css('animation', 'abouttohome 2s forwards');
      else $page.css('animation', 'worktohome 2s forwards');
      newPattern();
    }
  });
  
  function newPattern() {
    switch(patternCt) {
      case 0: 
        pctx.fillStyle = 'skyblue';
        pctx.fillRect(0, 0, 50, 50);
        pctx.fillStyle = 'floralwhite';
        pctx.fillRect(0, 0, 50, 25);
        break;
      case 1: 
        pctx.fillStyle = 'tomato';
        pctx.fillRect(0, 0, 50, 50);
        pctx.fillStyle = 'papayawhip';
        pctx.beginPath();
        pctx.moveTo(25, 0);
        pctx.lineTo(50, 25);
        pctx.lineTo(25, 50);
        pctx.lineTo(0, 25);
        pctx.fill();
        pctx.strokeStyle = 'lightgray';
        pctx.beginPath();
        pctx.moveTo(0, 0);
        pctx.lineTo(50, 50);
        pctx.stroke();
        pctx.beginPath();
        pctx.moveTo(50, 0);
        pctx.lineTo(0, 50);
        pctx.stroke();
        break;
      case 2: 
        pctx.fillStyle = 'steelblue';
        pctx.fillRect(0, 0, 50, 50);
        pctx.strokeStyle = 'lightsteelblue';
        pctx.beginPath();
        pctx.moveTo(25, 0);
        pctx.lineTo(25, 50);
        pctx.stroke();
        pctx.beginPath();
        pctx.moveTo(50, 0);
        pctx.lineTo(50, 50);
        pctx.stroke();
        pctx.beginPath();
        pctx.moveTo(0, 25);
        pctx.lineTo(50, 25);
        pctx.stroke();
        pctx.beginPath();
        pctx.moveTo(0, 50);
        pctx.lineTo(50, 50);
        pctx.stroke();
        break;
      case 3: 
        pctx.fillStyle = 'lightpink';
        pctx.fillRect(0, 0, 50, 50);
        pctx.fillStyle = 'lightgreen';
        pctx.beginPath();
        pctx.moveTo(0, 0);
        pctx.lineTo(0, 50);
        pctx.lineTo(50, 25);
        pctx.fill();
        break;
      case 4: 
        pctx.fillStyle = 'mediumturquoise';
        pctx.fillRect(0, 0, 50, 50);
        pctx.strokeStyle = 'mistyrose';
        pctx.lineWidth = 4;
        pctx.beginPath();
        pctx.arc(25, 0, 12.5, 0, .5*Math.PI);
        pctx.arc(25, 25, 12.5, 1.5*Math.PI, .5*Math.PI, true);
        pctx.arc(25, 50, 12.5, 1.5*Math.PI, 0);
        pctx.stroke();
        break;
      case 5: 
        pctx.fillStyle = 'plum';
        pctx.fillRect(0, 0, 50, 50);
        pctx.fillStyle = 'lemonchiffon';
        pctx.beginPath();
        pctx.arc(25, 25, 25, 0, 2*Math.PI);
        pctx.fill();
        pctx.fillStyle = 'plum';
        pctx.beginPath();
        pctx.arc(0, 0, 25, 0, .5*Math.PI);
        pctx.arc(0, 50, 25, 1.5*Math.PI, 0);
        pctx.arc(50, 50, 25, Math.PI, 1.5*Math.PI);
        pctx.arc(50, 0, 25, .5*Math.PI, Math.PI);
        pctx.fill();
        break;
      case 6: 
        pctx.fillStyle = 'whitesmoke'; 
        pctx.fillRect(0, 0, 50, 50);
        pctx.strokeStyle = 'seagreen';
        pctx.lineWidth = 6.25
        pctx.beginPath();
        pctx.arc(0, 0, 25, 0, 0.5*Math.PI);
        pctx.stroke();
        pctx.beginPath();
        pctx.arc(50, 0, 25, 0.5*Math.PI, Math.PI);
        pctx.stroke();
        pctx.beginPath();
        pctx.arc(0, 0, 12.5, 0, 0.5*Math.PI);
        pctx.stroke();
        pctx.beginPath();
        pctx.arc(50, 0, 12.5, 0.5*Math.PI, Math.PI);
        pctx.stroke();
        pctx.beginPath();
        pctx.arc(25, 21.875, 12.5, 0, Math.PI);
        pctx.stroke();
        pctx.beginPath();
        pctx.arc(25, 21.875, 25, 0, Math.PI);
        pctx.stroke();
        pctx.beginPath();
        pctx.arc(0, 50, 12.5, 1.75*Math.PI, 0);
        pctx.stroke();
        pctx.beginPath();
        pctx.arc(50, 50, 12.5, Math.PI, 1.25*Math.PI);
        pctx.stroke();
        break;
      case 7: 
        pctx.fillStyle = 'powderblue'; 
        pctx.fillRect(0, 0, 50, 50);
        pctx.strokeStyle = 'crimson';
        pctx.lineWidth = 4;
        pctx.beginPath();
        pctx.moveTo(-2, 0);
        pctx.lineTo(25, 23);
        pctx.lineTo(52, 0);
        pctx.stroke();
        pctx.beginPath();
        pctx.moveTo(-2, 25);
        pctx.lineTo(25, 48);
        pctx.lineTo(52, 25);
        pctx.stroke();
        pctx.beginPath();
        pctx.moveTo(25, 23);
        pctx.lineTo(25, 0);
        pctx.stroke();
        pctx.beginPath();
        pctx.moveTo(50, 25);
        pctx.lineTo(50, 50);
        pctx.stroke();
        pctx.beginPath();
        pctx.moveTo(0, 25);
        pctx.lineTo(0, 50);
        pctx.stroke();
        pctx.lineWidth = 1;
        break;
  }
  
  patternCt = (patternCt + 1) % 8;
  
  let newPattern = ctx.createPattern(pattern, 'repeat');
  ctx.fillStyle = newPattern;
  ctx.fillRect(0, 0, 500, 500);
  }
});
