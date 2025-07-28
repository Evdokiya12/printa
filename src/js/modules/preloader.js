window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('main-content');

    document.documentElement.classList.add('modal-active');
    document.body.classList.add('modal-active');

    preloader.style.opacity = 1;
    preloader.style.visibility = 'visible';
    mainContent.style.opacity = 0;
    mainContent.style.visibility = 'hidden';

    setTimeout(() => {
        preloader.style.opacity = 0;
        preloader.style.visibility = 'hidden';

        mainContent.style.opacity = 1;
        mainContent.style.visibility = 'visible';

        document.documentElement.classList.remove('modal-active');
        document.body.classList.remove('modal-active');
    }, 1900);
});


let $last = $('.progress-radial');

let intervalId = setInterval(function(){
    let currentClass = $last.attr('class').split(' ')[1];
    let currentPercentage = parseInt(currentClass.substring(9,12));
    let newPercentage = currentPercentage + 1;

    if (newPercentage > 100) {
        newPercentage = 100;
        clearInterval(intervalId);
    }

    let newClass = 'progress-' + newPercentage;
    $last.removeClass(currentClass).addClass(newClass);
}, 15);