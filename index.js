function addpost(){
            const element =document.createElement("div");
            element.innerHTML='<div style="background-color: antiquewhite;"><h1>BLOCK</h1></div>';
            document.body.appendChild(element);


        }

window.onscroll = function(ev) {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {

        addpost()
    }};
