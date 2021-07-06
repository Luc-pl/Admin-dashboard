/* eslint-disable no-unused-vars */
{

  /* Modals */
  function closeModal() {
    document.getElementById('overlay').classList.remove('show');
  }

  document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      closeModal();
    });
  });

  document.querySelector('#overlay').addEventListener('click', function(e) {
    if(e.target === this) {
      closeModal();
    }
  });

  document.addEventListener('keyup', function(e) {
    if(e.keyCode === 27) {
      closeModal();
    }
  });

  function openModal(modal) {
    document.querySelectorAll('#overlay > *').forEach(function(modal) {
      modal.classList.remove('show');
    });
    document.querySelector('#overlay').classList.add('show');
    document.querySelector(modal).classList.add('show');
  }
    
  document.querySelector('[href*="#quit"]').addEventListener('click', function () {
    openModal('#modal-quit');
  });
  



  /* Active page */

  const navLinks = document.querySelectorAll('.nav-list .nav-link');
  const pages = document.querySelectorAll('.page');

  const titleClickHandler = function(event){
    event.preventDefault();
    const clickedPage = this;
    console.log('link was clicked');
    console.log(event);

    const activeLinks = document.querySelectorAll('.nav-list a.active');

    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }
    clickedPage.classList.add('active');

    const activePages = document.querySelectorAll('.active');
    for(let activePage of activePages){
      activePage.classList.remove('active');
    }

    const pageSelector = clickedPage.getAttribute('href');
    const targetPage = document.querySelector(pageSelector);
    targetPage.classList.add('active');
  };

  const links = document.querySelectorAll('.nav-list a');
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }

}