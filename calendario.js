document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendario');

    const compromissoLS = JSON.parse(localStorage.getItem('compromisso')) || [];

    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',  
        events: compromissoLS,  
        eventClick: function(info) {
            
            alert(`Título: ${info.event.title}\nInício: ${info.event.start}\nFim: ${info.event.end}`);
        }
    });

    calendar.render();
});