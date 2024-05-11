//step one

window.onload= () => {
    main();
}
function main(){
    const changeColor = document.getElementById('root');
    const clickBtn = document.getElementById('change-btn');
    const btn = document.getElementById('copy-btn');
   


    clickBtn.addEventListener('click', function(){
        const bgColor = changeRGBColor();
        changeColor.style.backgroundColor = bgColor;
        output.innerHTML = bgColor;
        btn.innerHTML = 'COPY COLOR'
    })

}

function changeRGBColor(){
    //generate color

    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    let alpha = Math.floor(Math.random() * 1000);
    alpha /= 1000;

    return `rgba(${red}, ${green}, ${blue},${alpha})`
}
document.getElementById('copy-btn').addEventListener('click', function(){
    const btn = document.getElementById('copy-btn');
    const copycolor =  document.getElementById('output').textContent;
    // Create a temporary textarea element
    var tempTextarea = document.createElement('textarea');

// Set the value of the textarea to the text content of the <h1> element
    tempTextarea.value = copycolor;

// Append the textarea to the document body
    document.body.appendChild(tempTextarea);

// Select the text inside the textarea
    tempTextarea.select();

// Copy the selected text to the clipboard
    document.execCommand('copy');

// Remove the temporary textarea from the document body
    document.body.removeChild(tempTextarea);
    // Show an alert to indicate that the text has been copied
 btn.innerHTML = "Color code Copied"

})