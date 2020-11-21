let about1 = document.getElementById('about1');
let about2 = document.getElementById('about2');
let about3 = document.getElementById('about3');
let about4 = document.getElementById('about4');
let about5 = document.getElementById('about5');

let bg1 = document.getElementById('bg1')
let bg2 = document.getElementById('bg2')
let bg3 = document.getElementById('bg3')
let bg4 = document.getElementById('bg4')
let bg5 = document.getElementById('bg5')

let img1 = document.getElementById('img1')
let img2 = document.getElementById('img2')
let img3 = document.getElementById('img3')
let img4 = document.getElementById('img4')
let img5 = document.getElementById('img5')

let text1 = document.getElementById('stylebg1')
let text2 = document.getElementById('stylebg2')
let text3 = document.getElementById('stylebg3')
let text4 = document.getElementById('stylebg4')
let text5 = document.getElementById('stylebg5')

let p1 = document.getElementById('text-colour1')
let p2 = document.getElementById('text-colour2')
let p3 = document.getElementById('text-colour3')
let p4 = document.getElementById('text-colour4')
let p5 = document.getElementById('text-colour5')


// зміна назад текст FFE2FF
//8B00AE
function changeColour(){
    about1.onmouseover=()=>{
        bg1.style.background = '#BF4CB8'
        text1.style.background = '#8B00AE'
        p1.style.color = '#fff'
    }
    about1.onmouseout=()=>{
        bg1.style.background = '#8B00AE'
        text1.style.background = '#FFE2FF'
        p1.style.color = '#9D00A6'
    }
    about2.onmouseover=()=>{
        bg2.style.background = '#BF4CB8'
        text2.style.background = '#8B00AE'
        p2.style.color = '#fff'
    }
    about2.onmouseout=()=>{
        bg2.style.background = '#8B00AE'
        text2.style.background = '#FFE2FF'
        p2.style.color = '#9D00A6'
    }
    about3.onmouseover=()=>{
        bg3.style.background = '#BF4CB8'
        text3.style.background = '#8B00AE'
        p3.style.color = '#fff'
    }
    about3.onmouseout=()=>{
        bg3.style.background = '#8B00AE'
        text3.style.background = '#FFE2FF'
        p3.style.color = '#9D00A6'
    }
    about4.onmouseover=()=>{
        bg4.style.background = '#BF4CB8'
        text4.style.background = '#8B00AE'
        p4.style.color = '#fff'
    }
    about4.onmouseout=()=>{
        bg4.style.background = '#8B00AE'
        text4.style.background = '#FFE2FF'
        p4.style.color = '#9D00A6'
    }
    about5.onmouseover=()=>{
        bg5.style.background = '#BF4CB8'
        text5.style.background = '#8B00AE'
        p5.style.color = '#fff'
    }
    about5.onmouseout=()=>{
        bg5.style.background = '#8B00AE'
        text5.style.background = '#FFE2FF'
        p5.style.color = '#9D00A6'
    }
}
changeColour();
