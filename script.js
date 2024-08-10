document.addEventListener('DOMContentLoaded', function() {
    const scalaPoints = document.querySelectorAll('.cardBoxRatingScalaPoint');

    let currentValue = '0';

    scalaPoints.forEach(point => {
        point.addEventListener('click', selectPoint);
        point.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                selectPoint.call(this);
                event.preventDefault();
            }
        });
    });

    function selectPoint() {
        currentValue = this.textContent;
        scalaPoints.forEach(point => {
            if (point.textContent !== currentValue) {
                point.classList.remove('selected');
            }
        });
        this.classList.add('selected');
    }

    const button = document.querySelector('button');
    button.addEventListener('click', showResult);
    button.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' '){
            showResult.call(this);
            event.preventDefault();
        }
    });

    const cardBoxRating = document.querySelector('.cardBoxRating');
    const cardBoxResult = document.querySelector('.cardBoxResult');
    const cardBoxResultScore = document.querySelector('.cardBoxResultScore');

    function showResult() {
        if (currentValue === '0') {
            this.blur();
            return;
        }
        cardBoxRating.style.display = 'none';
        cardBoxResult.style.display = 'flex';
        cardBoxResultScore.textContent = currentValue;
    }
});