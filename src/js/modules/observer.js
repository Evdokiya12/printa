document.addEventListener("DOMContentLoaded", () => {
  // Настройки для Intersection Observer
  const options = {
    root: null, // отслеживаем элементы относительно области просмотра
    rootMargin: "0px", // область вокруг области просмотра
    threshold: 0.5 // процент элемента, который должен быть видимым для срабатывания
  };

  // Функция, которая будет вызываться при пересечении
  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  };

  // Создаём экземпляр Intersection Observer
  const observer = new IntersectionObserver(handleIntersection, options);


  const elementsToAnimate = document.querySelectorAll('.company-people, .motivation, .help-section_title-text-wrapper, .help-section_description-statistic-wrapper, .creation, .start_title, .case, .cases_text-wrapper, .our-team_text-wrapper, .our-team_list-row, .other-cases, .target-audience, .form-block');

  function animateNumbers(element, start = 0, end, duration = 600) {
    let startTime;
    function updateNumber(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      element.textContent = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      }
    }
    requestAnimationFrame(updateNumber);
  }

  function startCounting(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const number = entry.target;
        const endValue = parseInt(number.dataset.value, 10);
        animateNumbers(number, 0, endValue);
        observer.unobserve(number); // Остановить наблюдение после старта анимации
      }
    });
  }
  const numberObserver = new IntersectionObserver(startCounting, options);

  document.querySelectorAll(".help-section_numbers").forEach(el => numberObserver.observe(el));

  // Начинаем наблюдение за элементом .company-people
  elementsToAnimate.forEach(element => observer.observe(element));
});
