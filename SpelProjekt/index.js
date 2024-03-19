document.addEventListener( function() {
    const sidebarToggleBtn = document.getElementById('sidebarCollapse');
    const sidebar = document.getElementById('sidebar');

    sidebarToggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
});


