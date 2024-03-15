

let titleEl = document.getElementById('title');
let listEl = document.getElementById('list');
let button = document.getElementById('btn-button');

button.addEventListener('click', function(){
        let titleText =  titleEl.value;
        let li = document.createElement('li');
        li.innerText = titleText;
        if(titleText == '' ){
            alert('Please add some thing');
        }
        else
        listEl.appendChild(li);
        titleEl.value = '';
        li.addEventListener('click',function(){
            li.remove();
        })
})













