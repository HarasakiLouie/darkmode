let light =  document.getElementById("switch");
const html = document.querySelector('html')

light.addEventListener("change", function(){
    if (light.checked){
    html.classList.toggle('lightMode');
    localStorage.setItem('lightMode', 'true');}
    else{html.classList.remove('lightMode');
        localStorage.setItem('lightMode', 'false');
    }
})