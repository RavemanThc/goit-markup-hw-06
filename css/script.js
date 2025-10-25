    const modal = document.getElementById('modal-container');        
    const openButton = document.getElementById('hero-button');
    const closeButton = modal.querySelector('.modal-close-btn');

    openButton.addEventListener('click', () => {
      modal.showModal();
    });

    closeButton.addEventListener('click', () => {
      modal.close();
    });