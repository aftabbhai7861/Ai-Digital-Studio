const navLink = document.querySelectorAll('header nav a');
const logolink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon'); // ❌ mistake corrected
const navbar = document.querySelector('header nav'); // ❌ mistake corrected

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});

const activePage = () => {
  const header = document.querySelector('header');
  const barsBox = document.querySelector('.bars-box');

  header.classList.remove('active');
  setTimeout(() => {
    header.classList.add('active');
  }, 1100);

  navLink.forEach(link => {
    link.classList.remove('active');
  });

  if (barsBox) {
    barsBox.classList.remove('active');
    setTimeout(() => {
      barsBox.classList.add('active');
    }, 1100);
  }

  sections.forEach(section => {
    section.classList.remove('active');
  });

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active'); // changed from toggle to remove to close menu
};

navLink.forEach((link, idx) => {
  link.addEventListener('click', () => {
    if (!link.classList.contains('active')) {
      activePage();
      link.classList.add('active');
      setTimeout(() => {
        sections[idx].classList.add('active');
      }, 1100);
    }
  });
});

logolink.addEventListener('click', () => {
  if (!navLink[0].classList.contains('active')) {
    activePage();
    navLink[0].classList.add('active');
    setTimeout(() => {
      sections[0].classList.add('active');
    }, 1100);
  }
});

// Resume section tab switching
const resumeBtns = document.querySelectorAll('.resume-btn');
resumeBtns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    const resumeDetails = document.querySelectorAll('.resume-detail');

    resumeBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    resumeDetails.forEach(detail => detail.classList.remove('active'));
    resumeDetails[idx].classList.add('active');
  });
});
