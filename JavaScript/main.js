/**
 * There is variable we need it at this is task
 * 
 */
const container = document.getElementsByClassName("container")[0]
const textH2 = container.getElementsByTagName('h2')[0]
const link = document.getElementById("link")
const colorBackground =  document.getElementsByClassName("container")[1]


/**
 * in case even click on button will change status public for page 
 * (from light to Dark or from Dark to light) with change 
 */
link.onclick = () =>{ 
    if(textH2.textContent == 'Light'){
        textH2.innerHTML = "<h2 style = 'color: black;' >Dark</h2>"
        container.setAttribute('style' , '    background-color:rgb(255, 253, 113);')
        colorBackground.setAttribute('style' ,'background-color: rgb(41, 39, 39)')
    }else{
        textH2.innerHTML = "<h2 style = 'color: rgb(255, 253, 113);' >Light</h2>"
        container.setAttribute('style' , '    background-color:rgb(18, 18, 18);')
        colorBackground.setAttribute('style' ,'background-color: rgb(255, 248, 220)')
    }
}   
     


console.log(colorBackground)
