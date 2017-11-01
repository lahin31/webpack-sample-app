import '../css/style.css';

const showResult = document.querySelector('#showResult');

const outputLahin = () => {
    showResult.textContent = 'You selected Lahin';
};

const outputHussain = () => {
    showResult.textContent = 'You selected Hussain';
};

const buttonForLahin = document.querySelector('#lahin');
const buttonForHussain = document.querySelector('#hussain');

buttonForLahin.addEventListener('click', outputLahin);
buttonForHussain.addEventListener('click', outputHussain);