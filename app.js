const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');

function PageTransitions() {
    // Button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function() {                       // transition wasn't taking place when used with () => {} function
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    // Sections Active
    allSections.forEach((section) => {
        section.addEventListener('click', (e) => {
            const id = e.target.dataset.id;     // returns values from data-id like about, portfolio, contact etc.
            if (id) {
                // remove selected from the other btns
                sectBtns.forEach((btn) => {
                    btn.classList.remove('active');
                })
                e.target.classList.add('active');

                // hide other sections
                sections.forEach((section) => {
                    section.classList.remove('active')
                })
                
                const element = document.getElementById(id)
                element.classList.add('active');
            }
        })
    });

    // Toggle Theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode');
    });

}
PageTransitions();