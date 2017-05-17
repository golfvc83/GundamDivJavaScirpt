document.getElementById("submit").addEventListener("click", function() {
  var text = document.getElementById("answer").value;

  if (text == "Gundam") {
    document.getElementById("happyBirthDay").innerHTML = "RIGHT!";
  } else {
    document.getElementById("happyBirthDay").innerHTML = "Wrong";
  }
});

var componentDivs = [];
function addGundam() {
  var gundamDivs = document.querySelectorAll(".gundam");
  console.log(gundamDivs);
  //precreate all available componentDivs
  genComponentDivs("gundamHeadLight");
  genComponentDivs("gundamFontLight");
  genComponentDivs("gundamLeftVfin");
  genComponentDivs("gundamRightVfin");
  genComponentDivs("gundamHead");
  genComponentDivs("gundamInnerHead");
  genComponentDivs("gundamHeadGun");
  genComponentDivs("gundamHeadGun gundamRightHeadGun");
  genComponentDivs("gundamSide");
  genComponentDivs("gundamSide gundamRightSide");
  genComponentDivs("gundamDarkEye");
  genComponentDivs("gundamEye");
  genComponentDivs("gundamDarkEye gundamDarkEyeRight");
  genComponentDivs("gundamEye gundamEyeRight");
  genComponentDivs("gundamUnderEye");
  genComponentDivs("gundamUnderEye gundamUnderEyeRight");
  genComponentDivs("gundamCheek");
  genComponentDivs("gundamFaceThrottle1");
  genComponentDivs("gundamFaceThrottle2");
  genComponentDivs("gundamFaceThrottle3");
  genComponentDivs("gundamFaceThrottle4");
  genComponentDivs("gundamFaceThrottle5");
  genComponentDivs("gundamCheek1");
  genComponentDivs("gundamCheek2");
  genComponentDivs("gundamCheek3");
  genComponentDivs("gundamCheek gundamRightCheek");
  genComponentDivs("gundamFaceThrottle1 gundamRightFaceThrottle");
  genComponentDivs("gundamFaceThrottle2 gundamRightFaceThrottle");
  genComponentDivs("gundamFaceThrottle3 gundamRightFaceThrottle");
  genComponentDivs("gundamFaceThrottle4 gundamRightFaceThrottle");
  genComponentDivs("gundamFaceThrottle5 gundamRightFaceThrottle");
  genComponentDivs("gundamCheek1 gundamRightCheek1");
  genComponentDivs("gundamCheek2 gundamRightCheek2");
  genComponentDivs("gundamCheek3 gundamRightCheek3");
  genComponentDivs("gundamMouth");
  genComponentDivs("gundamMouthDashUpper rotate");
  genComponentDivs("gundamMouthDashUpper gundamMouthDashUpperRight rotate1");
  genComponentDivs("gundamMouthDashLower rotate");
  genComponentDivs("gundamMouthDashLower gundamMouthDashLowerRight rotate1");
  genComponentDivs("gundamChin");

  //for (var i = 1; i < 2; i++) {
    for (var k = 0; k < componentDivs.length; k++) {
      gundamDivs[0].appendChild(makeDivCopy(componentDivs[k]));
      //gundamDivs[++i].appendChild(componentDivs[k]);
    }
    for (var k = 0; k < componentDivs.length; k++) {
      gundamDivs[1].appendChild(componentDivs[k]);
      //gundamDivs[++i].appendChild(componentDivs[k]);
    }
}

function makeDivCopy(div){
  var newDiv = document.createElement("div");
  
  for(var g = 0;g < div.classList.length;g++){
      newDiv.classList.add(div.classList[g]);  
  }
  
  return newDiv;
}

function genComponentDivs(divClassNames) {
  var div = document.createElement("div");
  var splitClassNames = divClassNames.split(" ");
  for (var h = 0; h < splitClassNames.length; h++) {
    div.classList.add(splitClassNames[h]);
  }
  componentDivs.push(div);
}

addGundam();
