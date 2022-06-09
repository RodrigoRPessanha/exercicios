function texto() {
    const val = document.querySelector('input').value;
    const inputVal = document.querySelector('#inputVal');
    inputVal.innerHTML = val;
    console.log(val);
}