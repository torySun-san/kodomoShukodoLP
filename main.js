const dashedpath = document.getElementById('animatedPath');
const dashedpathDesktop = document.getElementById('animatedPathDesktop');
const scrollingDiv = document.getElementById('footer');
const navDiv = document.getElementById('nav');

const questions = document.querySelectorAll('.question');
const lengthM = dashedpath.getTotalLength();
const lengthD = dashedpathDesktop.getTotalLength();

dashedpath.style.strokeDasharray = lengthM;
dashedpath.style.strokeDashoffset = lengthM;

dashedpathDesktop.style.strokeDasharray = lengthD;
dashedpathDesktop.style.strokeDashoffset = lengthD;

dashedpath.addEventListener('animationiteration', () => {
    dashedpath.style.strokeDashoffset = lengthM;
    dashedpathDesktop.style.strokeDashoffset = lengthD;
});

let lastScrollPosition = 0;

     function handleScroll() {
       const currentScrollPosition = window.scrollY;
 
       if (currentScrollPosition > lastScrollPosition) {
         scrollingDiv.style.display = 'block';
        //  navDiv.style.position = "fixed";
        //  navDiv.style.background = "#242348";
        //  scrollingDiv.classList.add('show');
       } else {
         scrollingDiv.style.display = 'none';
        //  navDiv.style.position = "relative";
        //  navDiv.style.background = "none";
        //  scrollingDiv.classList.remove('show');
       }
 
       lastScrollPosition = currentScrollPosition;
     }
window.addEventListener('scroll', handleScroll);



questions.forEach(function(question) {
  question.addEventListener('click', function() {
    const answerId = this.getAttribute('data-answer-id');
    const answer = document.getElementById(answerId);

    if (answer) {
      answer.classList.toggle('answerdisplaynone');
    }
  });
});


document.addEventListener('DOMContentLoaded', function () {
  var animatedElements = document.querySelectorAll('.animated-element');

  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function handleScroll() {
    animatedElements.forEach(function (element) {
      if (isInViewport(element)) {
        var animation = element.dataset.animation || 'show';
        element.classList.add(animation);
      }
    });
  }

  window.addEventListener('scroll', handleScroll);
});