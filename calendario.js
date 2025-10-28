document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendario');

    // 1. Carregar os dados completos do localStorage
    // Certifique-se de que a chave 'compromisso' é a mesma usada ao salvar (no index.js)
    const compromissoLS = JSON.parse(localStorage.getItem('compromisso')) || [];

    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',  
        locale: 'pt-br', // Para garantir o calendário em português
        events: compromissoLS,  // Passa a lista completa de objetos (incluindo os extras)
        
        // 2. Função que será executada ao clicar em um evento
        eventClick: function(info) {
            // Acessa o objeto de evento com todas as propriedades salvas
            const evento = info.event.extendedProps;
            const dataInicioFormatada = new Date(info.event.start).toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' });
            const dataFimFormatada = new Date(info.event.end).toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' });
            
            // Monta a string detalhada para o alerta
            const detalhes = `
Detalhes da Reserva: 📜
-----------------------------------
Cliente: ${evento.nome_cliente_completo}
Produto: ${evento.produto_completo}
Quantidade: ${evento.quantidade_completa} Unidades
Telefone: ${evento.telefone_completo}
Data de Retirada: ${evento.data_retirada_completa}
Período de Reserva: ${dataInicioFormatada} até ${dataFimFormatada}
Comentários: ${evento.comentarios_completo || 'Nenhum'}
            `;
            
            alert(detalhes.trim()); // Exibe o alerta com todos os detalhes
        }
    });

    calendar.render();
});