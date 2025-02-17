function starGame(){
    let buttonBeast = document.getElementById('button-beast')
buttonBeast.addEventListener('click', selectBeast)
}

function selectBeast() {
    let inputicewolf = document.getElementById('icewolf')
    let inputdarktiger = document.getElementById('gark tiger')
    let inputfiredragon = document.getElementById('firedragon')

    if (document.getElementById('ice wolf').checked) {
    alert('select ice wolf')
    } else if (document.getElementById('dark tiger').checked) {
    alert('selct dark tiger')
    } else if (document.getElementById('fire dragon').checked) {
    alert('select fire dragon')
    } else {
         alert('SELECT YOUR BEAST')
    }
        
    }
   

    window.addEventListener('load', starGame)
    alert('WELCOME TO MOKPON')