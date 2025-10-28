document.getElementById('formCompromisso').addEventListener('submit', function(e) {
    e.preventDefault();
    adicionarReserva();
});

function adicionarReserva() {
    // 1. Captura de todos os elementos do formulário
    const nome_cliente = document.getElementById('nome_cliente').value;
    const produto = document.getElementById('produto').value;
    const quantidade = document.getElementById('quantidade').value;
    const data_inicio = document.getElementById('data_inicio').value;
    const data_fim = document.getElementById('data_fim').value;
    const horario_inicio = document.getElementById('horario_inicio').value;
    const horario_fim = document.getElementById('horario_fim').value;
    const data_retirada = document.getElementById('data_retirada').value;
    const telefone = document.getElementById('telefone').value;
    const comentarios = document.getElementById('comentarios').value;

    // 2. Formatação das datas e horários para o formato FullCalendar (start e end)
    const start = `${data_inicio}T${horario_inicio}:00`;
    const end = `${data_fim}T${horario_fim}:00`;

    // 3. Criação do Objeto de Reserva/Compromisso
    // 'title', 'start' e 'end' são campos obrigatórios pelo FullCalendar.
    // Os demais campos (extras) serão usados para o alerta de detalhes.
    const reservaParaSalvar = {
        // Campo principal para aparecer no calendário:
        title: `Pedido: ${nome_cliente} - ${produto}`, 
        
        // Campos de Data/Hora para posicionamento no calendário:
        start: start,
        end: end,
        
        // Detalhes extras (que aparecerão no alerta):
        nome_cliente_completo: nome_cliente,
        produto_completo: produto,
        quantidade_completa: quantidade,
        data_retirada_completa: data_retirada,
        telefone_completo: telefone,
        comentarios_completo: comentarios
    };

    // 4. Salvar no localStorage
    // 'compromissoLS' agora é uma lista (Array) de reservas.
    let compromissoLS = JSON.parse(localStorage.getItem('compromisso')) || [];
    compromissoLS.push(reservaParaSalvar);

    localStorage.setItem('compromisso', JSON.stringify(compromissoLS));

    alert('Reserva adicionada com sucesso! ✅');
    
    // 5. Limpar o formulário
    document.getElementById('formCompromisso').reset();
}