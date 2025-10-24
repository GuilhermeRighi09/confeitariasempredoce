document.getElementById('formCompromisso').addEventListener('submit', function(e) {
    e.preventDefault();  
    adicionarCompromisso();
});

function adicionarCompromisso() {
    const compromisso = document.getElementById('compromissos');  
    const data_inicio = document.getElementById('data_inicio');
    const data_fim = document.getElementById('data_fim');
    const horario_inicio = document.getElementById('horario_inicio');
    const horario_fim = document.getElementById('horario_fim');

    const start = new Date(`${data_inicio.value}T${horario_inicio.value}:00`);
    const end = new Date(`${data_fim.value}T${horario_fim.value}:00`);
    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
        alert('Datas ou horários inválidos!');
        return;
    }

    const compromissoCalendario = {
        title: compromisso.value,
        start: start.toISOString(), 
        end: end.toISOString()
    };

    let compromissoLS = localStorage.getItem('compromisso');  

    if (compromissoLS == null) {  
        compromissoLS = [];
    } else {
        compromissoLS = JSON.parse(compromissoLS);
    }

    compromissoLS.push(compromissoCalendario);

    localStorage.setItem('compromisso', JSON.stringify(compromissoLS));  

    alert('Compromisso adicionado com sucesso!');

   
    compromisso.value = '';
    data_inicio.value = '';
    data_fim.value = '';
    horario_inicio.value = '';
    horario_fim.value = '';
}

function adicionarCompromisso() {
    console.log('Tentando adicionar:', compromissoCalendario);
    console.log('Array atual no LS:', compromissoLS);
    console.log('Array após adição:', compromissoLS);
}