'use strict';
const div = document.querySelector('#target');
let html = '';
const names = ['John','Paul','Jones'];
for (let i = 0; i < names.length; i++) {
  html += '<li>' + names[i] + '</li>';
}
div.innerHTML = html;