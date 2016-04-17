import angular from 'angular';

import config from './config';
import comicController from './controllers/comicController';
import tileController from './controllers/tileController';
import listController from './controllers/listController';

let comic = angular.module('tiy.comic', []);

comic.config(config);
comic.controller('ComicController', comicController);
comic.controller('TileController', tileController);
comic.controller('ListController', listController);

export default comic;
