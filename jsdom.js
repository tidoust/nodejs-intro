var jsdom = require('jsdom');

jsdom.env({
  html: 'http://dotjs.eu',
  scripts: [
    'http://code.jquery.com/jquery.js'
  ],
  done: function (errors, window) {
    if (errors) {
      return console.error(errors);
    }
    var $ = window.$;
    console.log($('.speaker-name').get(0).textContent);
    $('.speaker-name').text('Francois Daoust');
    console.log(window.document.innerHTML);
  }
});