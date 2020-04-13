//Dom Element
const time = document.getElementById('time'),
        greeting = document.getElementById('greeting'),
        name = document.getElementById('name'),
            focus = document.getElementById('focus');

//定义一个函数来更新时间
function showTime() {
    let today = new Date();
        hour = today.getHours();
        min = today.getMinutes();
        sec = today.getSeconds();

        //确定是早上还是下午
        const amPm = hour >= 12? 'PM' : "AM";

        //切换为12小时制
        hour = hour%12 || 12;

        //将时间输出到html，在个位分，秒前加上0
        time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`

        setTimeout(showTime,1000);
}

//在数字前添加0
function addZero(n) {
    return (parseInt(n,10) < 10 ? '0' : '') + n;
}

//启动时间
    

//设置背景图片和greet
function setBgGreet() {
    let today = new Date();
        hour = today.getHours();
    
    if (hour < 12) {
        //早晨
        document.body.style.backgroundImage = "url('./img/morning.jpg')";
        greeting.textContent = 'Good Morning';
    } else if(hour < 18){
        //下午
        document.body.style.backgroundImage = "url('./img/afernoon.jpg')";
        greeting.textContent = 'Good Afternoon';
    } else {
        //夜晚
        document.body.style.backgroundImage = "url('./img/night.jpg')";
        greeting.textContent = 'Good Night';
        document.body.style.color = 'white';
    }
}


//检查localStorage中是否有name
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    }else {
        name.textContent = localStorage.getItem('name');
    }
}



//若检测到keypress或者blur事件则将值存入localStorage
function setName(e) {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            //按下按键后离开文本框
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerHTML);
    }
}


function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    }else {
        focus.textContent = localStorage.getItem('focus');
    }
}

function setFocus(e) {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            //按下按键后离开文本框
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerHTML);
    }
}

getFocus();


name.addEventListener('keypress', setName);
name.addEventListener('blur',setName);
focus.addEventListener('keypress',setFocus);
focus.addEventListener('blur',setFocus);

//RUN
showTime();
setBgGreet();
getName();
getFocus();