function config($stateProvider) {
  $stateProvider
    .state('index', {
      url: '/',
      controller: 'ComicController as comicCtrl',
      template: require('./views/comicView.html')
    })
    .state('tile', {
      url: '/:id',
      controller: 'TileController as tileCtrl',
      template: require('./views/tileView.html')
    });
}

export default config;
