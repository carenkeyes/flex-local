import _ from 'lodash';
import './style.css';
import printMe from './print.js';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  //displays stsate for outer app
  const stateWrapper = document.createElement('div');
  const heading = document.createElement('h2');
  heading.innerText = "Wrapper Application"
  stateWrapper.classList.add("half");
  stateWrapper.classList.add("wrapper");
  stateWrapper.appendChild(heading);
  element.classList.add('page-wrapper');

  //displays react app
  const reactWrapper = document.createElement('div');
  const frame = document.createElement('iframe');
  frame.src = "http://localhost:3000"
  reactWrapper.classList.add('half');
  reactWrapper.appendChild(frame);

  // btn.innerHTML = 'Click me and check the console!';
  // btn.onclick = printMe;

  // element.appendChild(btn);
  element.appendChild(stateWrapper);
  element.appendChild(reactWrapper);
  return element;
}

document.body.appendChild(component());