/* eslint-disable no-unused-vars */

/* Sidemenu */
function toggleMenu() {
  const navButton = document.querySelector('.hamburger');
  const sidenav = document.querySelector('.menu');
  const overlay = document.querySelector('.overlay-nav');

  navButton.addEventListener('click', function(e){
    e.preventDefault();

    sidenav.classList.toggle('nav-active');
    overlay.classList.toggle('overlay-active');
  });
}

/* Modals */
function closeModal() {
  document.getElementById('overlay').classList.remove('show');
}

document.querySelectorAll('#overlay .js--close-modal').forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    closeModal();
  });
});

document.querySelector('#overlay').addEventListener('click', function (e) {
  if (e.target === this) {
    closeModal();
  }
});

document.addEventListener('keyup', function (e) {
  if (e.keyCode === 27) {
    closeModal();
  }
});

function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function (modal) {
    modal.classList.remove('show');
  });
  document.querySelector('#overlay').classList.add('show');
  document.querySelector(modal).classList.add('show');
}

document.querySelector('.top-bar-login').addEventListener('click', function () {
  openModal('#modal-login');
});

document.querySelector('.top-bar-logout').addEventListener('click', function () {
  openModal('#modal-quit');
});

document.querySelector('.top-bar-chat').addEventListener('click', function () {
  openModal('#modal-chat');
});




/* Active page */

const navLinks = document.querySelectorAll('.nav-list .nav-link');
const pages = document.querySelectorAll('.page');

const titleClickHandler = function (event) {
  event.preventDefault();
  const clickedPage = this;
  console.log('link was clicked');
  console.log(event);

  const activeLinks = document.querySelectorAll('.nav-list a.active');

  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }
  clickedPage.classList.add('active');

  const activePages = document.querySelectorAll('.active');
  for (let activePage of activePages) {
    activePage.classList.remove('active');
  }

  const pageSelector = clickedPage.getAttribute('href');
  const targetPage = document.querySelector(pageSelector);
  targetPage.classList.add('active');
};

const links = document.querySelectorAll('.nav-list a');
for (let link of links) {
  link.addEventListener('click', titleClickHandler);
}

/* MyChart */

var ctx = document.getElementById('myChart').getContext('2d');

// eslint-disable-next-line no-undef
var chart = new Chart(ctx, {
  // 1
  type: 'bar',
  data: {
    // 2
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
    // 3
    datasets: [{
      // 4
      label: 'Signups',
      // 5
      backgroundColor: '#8DBEC8',
      borderColor: '#8DBEC8',
      // 6
      data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
    },
    {
      label: 'FTD',
      backgroundColor: '#F29E4E',
      borderColor: '#F29E4E',
      data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
    },
    {
      label: 'Earned',
      backgroundColor: '#71B374',
      borderColor: '#71B374',
      data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
      // 7
      hidden: true,
    }]
  },
});