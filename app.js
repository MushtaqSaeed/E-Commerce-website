var comp_choice = (Math.round(Math.random()*2))
console.log(comp_choice)
function computer(){
    document.querySelector('.comp').style.display='inline';
    document.querySelector('.btn').style.display='none';
    document.querySelector('.btn1').style.display='none';
    document.querySelector('.last').style.display='none'
}
var person_choice = '';
function rock(){
    person_choice = 0
    document.querySelector('.comp').style.display='none'
    calc()
};
function paper(){
    person_choice = 1
    document.querySelector('.comp').style.display='none'
    calc()
};
function sci(){
    person_choice = 2
    document.querySelector('.comp').style.display='none'
    calc()
};


function calc(){
    if (person_choice==comp_choice){
        document.querySelector('.result').innerText = 'Match Draw!!'
    }
    else if (person_choice==0 && comp_choice==1  ){
        document.querySelector('.result').innerText = 'Computer Win, You Lose!!'
    }
    else if (person_choice==0 && comp_choice==2  ){
        document.querySelector('.result').innerText = 'You Win!!!'
    }
    else if (person_choice==1 && comp_choice==0  ){
        document.querySelector('.result').innerText = 'You Win!!!'
    }
    else if (person_choice==1 && comp_choice==2  ){
        document.querySelector('.result').innerText = 'Computer Win, You Lose!!'
    }
    else if (person_choice==2 && comp_choice==0  ){
        document.querySelector('.result').innerText = 'Computer Win, You Lose!!'
    }
    else if (person_choice==2 && comp_choice==1  ){
        document.querySelector('.result').innerText = 'You Win!!!'
    }
    document.querySelector('.result').style.display='inline'
    document.querySelector('.last').style.display='inline'
    comp_choice = (Math.round(Math.random()*2))
}

function enter_name(){
    document.querySelector('.nam').style.display='Inline'
    document.querySelector('.btn').style.display='none';
    document.querySelector('.btn1').style.display='none';
    document.querySelector('.last').style.display='none'
    document.querySelector('.result').style.display='none'
}

var first_name = ''
var second_name = ''
var up_first = ''
var up_second = ''

function submit(){
    first_name = document.querySelector('#name1').value
    second_name = document.querySelector('#name2').value
    document.querySelector('.nam').style.display='none'
    friend()
}





function friend(){
    document.querySelector('.fri').style.display='inline';
    up_first = first_name.toUpperCase()
    document.querySelector('.heading1').innerText= up_first + ', Select Your Option';

}
var person_choice1 = '';
function rock1(){
    person_choice1 = 0
    document.querySelector('.fri').style.display='none'
    friend2()
};
function paper1(){
    person_choice1 = 1
    document.querySelector('.fri').style.display='none'
    friend2()
};
function sci1(){
    person_choice1 = 2
    document.querySelector('.fri').style.display='none'
    friend2()
};

function friend2(){
    document.querySelector('.fri1').style.display='inline';
    up_second = second_name.toUpperCase()
    document.querySelector('.heading2').innerText= up_second + ', Select Your Option';
}

var person_choice2 = '';
function rock2(){
    person_choice2 = 0
    document.querySelector('.fri1').style.display='none'
    calc1()
};
function paper2(){
    person_choice2 = 1
    document.querySelector('.fri1').style.display='none'
    calc1()
};
function sci2(){
    person_choice2 = 2
    document.querySelector('.fri1').style.display='none'
    calc1()
};

function calc1(){
    if (person_choice1==person_choice2){
        document.querySelector('.result').innerText = 'Match Draw!!'
    }
    else if (person_choice1==0 && person_choice2==1  ){
        document.querySelector('.result').innerText = up_second + ' Win!!'
    }
    else if (person_choice1==0 && person_choice2==2  ){
        document.querySelector('.result').innerText = up_first + ' Win!!!'
    }
    else if (person_choice1==1 && person_choice2==0  ){
        document.querySelector('.result').innerText = up_first + ' Win!!!'
    }
    else if (person_choice1==1 && person_choice2==2  ){
        document.querySelector('.result').innerText = up_second + ' Win!!'
    }
    else if (person_choice1==2 && person_choice2==0  ){
        document.querySelector('.result').innerText = up_second + ' Win!!'
    }
    else if (person_choice1==2 && person_choice2==1  ){
        document.querySelector('.result').innerText = up_first + ' Win!!!'
    }
    document.querySelector('.last').style.display='inline'
    document.querySelector('.result').style.display='inline'
    comp_choice = (Math.round(Math.random()*2))
}
function retry(){
    document.querySelector('.result').style.display='none'
}






