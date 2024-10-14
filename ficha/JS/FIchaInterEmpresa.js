function aprovar() {
    document.querySelector('.aprovacao').style.display = 'none';
    document.getElementById('verPagamento').style.display = 'block'
    document.getElementById('situacao').style.display = 'block';
}

function reprovar() {

    document.querySelector('.aprovacao').style.display = 'none';
    document.getElementById('situacao1').style.display = 'block';
    
}

