/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/* Sidemenu */
function toggleMenu() {
  const navButton = document.querySelector('.burger');
  const sidenav = document.querySelector('.menu');
  const overlay = document.querySelector('.overlay-nav');

  navButton.addEventListener('click', function(e){
    e.preventDefault();

    sidenav.classList.toggle('nav-active');
    overlay.classList.toggle('overlay-active');
  });
}
toggleMenu();

/* Modals */
function closeModal() {
  document.getElementById('overlay').classList.remove('show'); /*dlaczego sugerowany querySelector nie powoduje zamknięcia?*/
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

function openModal(modal) {
  const activeModal = document.querySelector('#overlay .modal.show');
  if(activeModal) activeModal.classList.remove('show');
  /*document.querySelectorAll('#overlay > *').forEach(function (modal) {
    modal.classList.remove('show'); 
  });*/
  document.querySelector('#overlay').classList.add('show');
  document.querySelector(modal).classList.add('show');
}

document.querySelectorAll('[data-target]').forEach(item => {
  item.addEventListener('click', function() {
    openModal(item.getAttribute('data-target'));
  });
});

/* document.querySelector('.top-bar-login').addEventListener('click', function () {
  openModal('#modal-login');
});

document.querySelector('.top-bar-logout').addEventListener('click', function () {
  openModal('#modal-quit');
});

document.querySelector('.top-bar-chat').addEventListener('click', function () {
  openModal('#modal-chat');
});
*/




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

/* Pagination */
var monkeyList = new List('test-list', {
  valueNames: ['name'],
  page: 1,
  pagination: true
});

/* Range SLIDER*/

function init() {
  const sliders = document.getElementsByClassName('tick-slider-input');

  for (let slider of sliders) {
    slider.oninput = onSliderInput;

    updateValue(slider);
    updateValuePosition(slider);
    updateLabels(slider);
    updateProgress(slider);

    setTicks(slider);
  }
}

function onSliderInput(event) {
  updateValue(event.target);
  updateValuePosition(event.target);
  updateLabels(event.target);
  updateProgress(event.target);
}

function updateValue(slider) {
  let value = document.getElementById(slider.dataset.valueId);

  value.innerHTML = '<div>' + slider.value + '</div>';
}

function updateValuePosition(slider) {
  let value = document.getElementById(slider.dataset.valueId);

  const percent = getSliderPercent(slider);

  const sliderWidth = slider.getBoundingClientRect().width;
  const valueWidth = value.getBoundingClientRect().width;
  const handleSize = slider.dataset.handleSize;

  let left = percent * (sliderWidth - handleSize) + handleSize / 2 - valueWidth / 2;

  left = Math.min(left, sliderWidth - valueWidth);
  left = slider.value === slider.min ? 0 : left;

  value.style.left = left + 'px';
}

function updateLabels(slider) {
  const value = document.getElementById(slider.dataset.valueId);
  const minLabel = document.getElementById(slider.dataset.minLabelId);
  const maxLabel = document.getElementById(slider.dataset.maxLabelId);

  const valueRect = value.getBoundingClientRect();
  const minLabelRect = minLabel.getBoundingClientRect();
  const maxLabelRect = maxLabel.getBoundingClientRect();

  const minLabelDelta = valueRect.left - (minLabelRect.left);
  const maxLabelDelta = maxLabelRect.left - valueRect.left;

  const deltaThreshold = 32;

  if (minLabelDelta < deltaThreshold) minLabel.classList.add('hidden');
  else minLabel.classList.remove('hidden');

  if (maxLabelDelta < deltaThreshold) maxLabel.classList.add('hidden');
  else maxLabel.classList.remove('hidden');
}

function updateProgress(slider) {
  let progress = document.getElementById(slider.dataset.progressId);
  const percent = getSliderPercent(slider);

  progress.style.width = percent * 100 + '%';
}

function getSliderPercent(slider) {
  const range = slider.max - slider.min;
  const absValue = slider.value - slider.min;

  return absValue / range;
}

function setTicks(slider) {
  let container = document.getElementById(slider.dataset.tickId);
  const spacing = parseFloat(slider.dataset.tickStep);
  const sliderRange = slider.max - slider.min;
  const tickCount = sliderRange / spacing + 1; // +1 to account for 0

  for (let ii = 0; ii < tickCount; ii++) {
    let tick = document.createElement('span');

    tick.className = 'tick-slider-tick';

    container.appendChild(tick);
  }
}

function onResize() {
  const sliders = document.getElementsByClassName('tick-slider-input');

  for (let slider of sliders) {
    updateValuePosition(slider);
  }
}

window.onload = init;
window.addEventListener('resize', onResize);