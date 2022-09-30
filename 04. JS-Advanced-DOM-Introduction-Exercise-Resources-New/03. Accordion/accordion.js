function toggle() {
    let btn = document.getElementsByClassName('button')[0];
    let extra = document.getElementById('extra');
    if(btn.innerHTML === 'More'){
        btn.innerHTML = 'Less';
        extra.style.display = 'block';
    }else{
        btn.innerHTML = 'More';
        extra.style.display = 'none';
    }
}