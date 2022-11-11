let cesta = document.querySelector('.container-cesta');

document.querySelector('#cesta').onclick = () =>{
    cesta.classList.add('active');
}

document.querySelector('#cruz').onclick = () =>{
    cesta.classList.remove('active');
}