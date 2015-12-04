function init() {

  var clear_view = function(evt) {
      el('humanAge').value = '';
      el('humanAge').value = '';
      el('humanAge').focus();
    },
    update_view = function(evt) {
      var f = el('humanAge').value,
        c = F2C(f);

      el('dogAge').value = c + ' °C';
      el('humanAge').focus();
    };

  
  keyup('humanToDog', 13, update_view);
  click('Ruff!', update_view);
  click('Clear', clear_view);
}


document.addEventListener('DOMContentLoaded', init);

function h2d (Human-Age) {
  return (humanAge * 7);
}


function el(id) {
  return document.getElementById(id);
}


function click(id, func) {
  var elem = el(id);
  elem.addEventListener('click', function() {
    func({
      target: elem
    });
  });
}


function keyup(id, keyCode, func) {
  var elem = el(id);
  elem.onkeyup = function(e) {
    if (e.keyCode === keyCode) {
      func();
    }
  };
}



function humanToDog (h) {
  var answer = h * 7;
  return dogAge(answer);
}

function fahrenheitToCelsius(d) {
  var answer = (d / 7);
  return humanAge(answer);
}
