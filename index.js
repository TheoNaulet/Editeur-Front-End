const textarea_html = document.getElementById('textarea_html');
const textarea_css = document.getElementById('textarea_css');
const textarea_js =  document.getElementById('textarea_js');
let style = document.querySelector('style');
const js = document.querySelector('script');
let result = document.getElementById('result');
let count = document.getElementById('counter');
let maxVal = document.getElementById('maxVal');
let progressBar = document.getElementById('progressbar');

textarea_html.onkeyup = (e) => {
    //counter display
    const textLength = e.target.value.replace(/(<([^>]+)>)/gi, "").length;
    count.innerHTML = (maxVal.value - textLength); 
    //display text
    result.innerHTML = textarea_html.value; 
    //progressbar calculation
    let widthBar = (90/maxVal.value)* textLength;
    progressBar.style.width = widthBar+"vw"; 
    //color change progressbar
    if(textLength<(maxVal.value)*0.5) {
        progressBar.style.backgroundColor = "green"; a
    } else if ((textLength<=(maxVal.value)*0.8)) {
        progressBar.style.backgroundColor = "orange"; 
    } else if ((textLength>=(maxVal.value)*0.8)) {
        progressBar.style.backgroundColor = "red"; 
    }
}  
//CSS
textarea_css.onkeyup = (e) => {
    style.value = textarea_css.value;
    console.log(style);
}
//add tags in html area
function fillingArea(value) {
    textarea_html.value +=  "<"+value+" class=''></"+value+">";
}
//execute javascript area 
function execJs() {
    js.innerHTML = textarea_js.value; 
}