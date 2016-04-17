function config($stateProvider) {
  $stateProvider
    .state('index', {
      url: '/',
      controller: 'ListController as listCtrl',
      template: require('./views/listView.html')
    })
    .state('comic', {
      url: '/:comicId',
      controller: 'ComicController as comicCtrl',
      template: require('./views/comicView.html')
    })
    .state('tile', {
      url: '/:comicId/tiles',
      controller: 'TileController as tileCtrl',
      template: require('./views/tileView.html')
    });
}

export default config;
