
let colorWhite = "white";
let colorBlack = "black";
function white() {
  document.body.style.background = "white";
  document.getElementById('f').style.color = colorBlack;
  document.getElementById('t').style.color = colorBlack;
  document.getElementById('l').style.color = colorBlack;
  document.getElementById('m').style.color = colorBlack;
  document.getElementById('p').style.color = colorBlack;
  document.getElementById('w').style.color = colorBlack;
  document.getElementById('bc-social').style.backgroundColor = "#6860607a";
  document.getElementById('bc-contact').style.backgroundColor = "#6860607a";
  // document.getElementById('social').style.backgroundColor = "#6860607a";
  document.getElementById('social').style.boxShadow = '1px 1px 10px black,-1px -1px 10px black';
  document.getElementById('form').style.boxShadow = '1px 1px 10px black,-1px -1px 10px black';
};
function black() {
  document.body.style.background = "black";
  document.getElementById('f').style.color = colorWhite;
  document.getElementById('t').style.color = colorWhite;
  document.getElementById('l').style.color = colorWhite;
  document.getElementById('m').style.color = colorWhite;
  document.getElementById('p').style.color = colorWhite;
  document.getElementById('w').style.color = colorWhite;
  document.getElementById('social').style.boxShadow = '1px 1px 10px white,-1px -1px 10px white';
  document.getElementById('form').style.boxShadow = '1px 1px 10px white,-1px -1px 10px white';
  document.getElementById('bc-social').style.backgroundColor = colorBlack;
  document.getElementById('bc-contact').style.backgroundColor = colorBlack;

};
function gradient() {
    document.body.style.background = "linear-gradient(to top, #ffffff, #000000)";
};


