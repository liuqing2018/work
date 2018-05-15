/**
 * Created by Administrator on 2018/5/8.
 */
const toast = (msg, time) => {
    let box = document.createElement('div');
    box.className = 'toast';
    let span = document.createElement('span');
    let boxBg = document.createElement('div');
    boxBg.className = 'toast-bg';
    span.innerText = msg;
    box.appendChild(boxBg);
    box.appendChild(span);
    document.getElementById('app').appendChild(box);

    setTimeout(function () {
        span.style.display = 'block';
        boxBg.style.opacity = '0.6';
    }, 100);

    setTimeout(function () {
        boxBg.style.opacity = '0';
        setTimeout(function () {
            document.getElementById('app').removeChild(box);
        }, 1000);
    }, time || 3100);
};

export default toast;
