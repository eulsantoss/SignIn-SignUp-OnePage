document.getElementById('flip-to-login').addEventListener('click', ()=>{
    // document.getElementById('overlay').style.transition = '1s'
    // document.getElementById('overlay').style.left = '0'
    // document.getElementById('overlay').style.width = '50%'
    
    document.getElementById('overlay').classList.remove('over-right')
    document.getElementById('overlay').classList.add('over-left')
})

document.getElementById('flip-to-signup').addEventListener('click', ()=>{
    // document.getElementById('overlay').style.removeProperty('left')
    // document.getElementById('overlay').style.right = '0'
    // document.getElementById('overlay').style.width = '50%'

    document.getElementById('overlay').classList.remove('over-left')
    document.getElementById('overlay').classList.add('over-right')
})