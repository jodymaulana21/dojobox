const btn1 = document.querySelector('#c #buttonSatu');
const btn2 = document.querySelector('#c #buttonDua');
const btn3 = document.querySelector('#c #buttonTiga');
const btn4 = document.querySelector('#c #buttonEmpat');
const btn5 = document.querySelector('#c #buttonLima');
const btn6 = document.querySelector('#c #buttonEnam');
const btn7 = document.querySelector('#c #buttonTujuh');
const btn8 = document.querySelector('#c #buttonDelapan');
const btn9 = document.querySelector('#c #buttonSembilan');
const btn10 = document.querySelector('#c #buttonSepuluh');
btn1.addEventListener('click' , 
function (){
    document.querySelector('#paragraph1').style.backgroundColor = 'red'
    document.querySelector('#paragraph2').style.backgroundColor = 'red'
    document.querySelector('#paragraph3').style.backgroundColor = 'red'
    document.querySelector('#paragraph4').style.backgroundColor = 'red'
    document.querySelector('#paragraph5').style.backgroundColor = 'red'
    document.querySelector('#paragraph6').style.backgroundColor = 'red'
    document.querySelector('#paragraph7').style.backgroundColor = 'red'
    document.querySelector('#paragraph8').style.backgroundColor = 'red'
    document.querySelector('#paragraph9').style.backgroundColor = 'red'
    document.querySelector('#paragraph10').style.backgroundColor = 'red'

}
)


btn2.addEventListener('click',
function(){
    const p2 = document.querySelector('#paragraph2')
    p2.style.color = "magenta";
    container.style.backgroundColor = 'red'
    
}
)

btn3.addEventListener('click' ,
function(){
    const p3 = document.getElementById("paragraph3");
    container.style.fontFamily = 'roboto'
    p3.style.color = 'red'
}
)
btn4.addEventListener('click',
function(){
    container.style.fontSize = '50px'
}
)
btn5.addEventListener('click',
function(){
    container.style.backgroundColor = 'skyblue'
}
)

btn6.addEventListener('click',function(){
    //tangkap parent
const sectionA=document.getElementById('a')
//tangkap element yg ingin diganti
const pLama=sectionA.querySelector('p')
    //create element dan text baru
    const h2Baru=document.createElement('h2')
    const texth2Baru=document.createTextNode('hehehe testing coy')
    h2Baru.appendChild(texth2Baru)
    sectionA.replaceChild(h2Baru,pLama)
})

btn7.addEventListener('click',function(){
    const ul=document.querySelector('section#b ul')
    const li=document.querySelector('li')
    const newMentor=document.createElement('li')
    const TextnewItem=document.createTextNode('Mentor Baru woy')
    newMentor.appendChild(TextnewItem)
    ul.appendChild(newMentor)
    ul.removeChild(li)

})

btn8.addEventListener('click',function(){

    const judul=document.getElementById('judul nya adalah')
    judul.innerHTML='Post Test terbaru'

})


btn9.addEventListener('click',function(){
    const a=document.getElementsByTagName('a')[1];
    const sectionA=document.getElementById('a')
    sectionA.removeChild(a)


})


btn10.addEventListener('click',function(){
    const li=document.querySelector('section#c ul li:nth-child(10)')
    const sectionC=document.getElementById('c')
    const pRemove=sectionC.getElementsByTagName('p')[9]
    
    const aBaru=document.createElement('a')
    const TextaBaru=document.createTextNode('Link Github ane  ')
    aBaru.appendChild(TextaBaru)
    aBaru.setAttribute('href','https://github.com/jodymaulana21/dojobox')
    li.replaceChild(aBaru,pRemove)
    

})