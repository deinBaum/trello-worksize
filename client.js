window.TrelloPowerUp.initialize({
  'card-back-section': function(t, options) {
    return {
      title: 'Job Size',
      icon: 'https://deinbaum.github.io/trello-jobsize/appicon.png',
      content: {
        type: 'iframe',
        url: 'https://deinbaum.github.io/trello-jobsize/index.html',
        height: 230
      }
    };
  }
});
