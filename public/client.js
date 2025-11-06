window.TrelloPowerUp.initialize({
  'card-back-section': function(t, options){
    return {
      title: 'Work Size',
      icon: 'https://deinbaum.github.io/trello-worksize/public/appicon.png',
      content: {
        type: 'iframe',
        url: t.absoluteUrl('index.html'),
        height: 230
      }
    };
  }
});