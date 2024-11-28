let BackgroundColorEl = document.getElementById('bgColorInput');
let FontColorEl = document.getElementById('fontColorInput');
let FontSizeEl = document.getElementById('fontSizeInput');
let FontWeightEl = document.getElementById('fontWeightInput');
let PaddingEl = document.getElementById('paddingInput');
let BorderRadiusEl = document.getElementById('borderRadiusInput');
let customButtonEl = document.getElementById('customButton');


function applybtn() {
    let BgColorValue = BackgroundColorEl.value;
    let FontColorValue = FontColorEl.value;
    let FontSizeValue = FontSizeEl.value;
    let FontWeightValue = FontWeightEl.value;
    let PaddingValue = PaddingEl.value;
    let BorderRadiusValue = BorderRadiusEl.value;

    customButtonEl.style.backgroundColor = BgColorValue;
    customButtonEl.style.color = FontColorValue;
    customButtonEl.style.fontSize = FontSizeValue;
    customButtonEl.style.fontWeight = FontWeightValue;
    customButtonEl.style.padding = PaddingValue;
    customButtonEl.style.borderRadius = BorderRadiusValue;
}