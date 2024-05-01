/**
 * There is variable we need it at this is task
 * 
 */
const container = document.getElementsByClassName("container")[0]
const textH2 = container.getElementsByTagName('h2')[0]
const link = document.getElementById("link")


/**
 * in case even click on button will change status public for page 
 * (from light to Dark or from Dark to light) with change 
 */
link.onclick = () =>{ 
    if(textH2.textContent == 'Light'){
        textH2.innerHTML = "<h2 style = 'color: black;' >Dark</h2>"
        container.setAttribute('style' , '    background-color:rgb(255, 253, 113);')
    }else{
        textH2.innerHTML = "<h2 style = 'color: rgb(255, 253, 113);' >Light</h2>"
        container.setAttribute('style' , '    background-color:rgb(18, 18, 18);')
    }
}   
     


