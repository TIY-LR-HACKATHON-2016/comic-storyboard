class ComicController {
  constructor($http, $stateParams) {
    console.log($stateParams);
    this._$http = $http;
    this.input = "";
    this.name = "";
    this.id = $stateParams.id;
    this.darkMode = false;
    this.comicId;

    this.tiles = [];
    this.getData();
  }

  getData() {
    this._$http
      .get(`http://tiycomicbook.azurewebsites.net/comicbookapi/index`)
      .then((response) => {
        console.log(response.data);
        this.comic = response.data.filter((comic) => comic.ComicBookId === Number(this.id))[0]
        console.log(this.comic);
        this.name = this.comic.ComicBookName;
      });

    this._$http
      .get(`http://tiycomicbook.azurewebsites.net/comicbookapi/tiles?comicbookid=${this.id}`)
      .then((response) => {
        console.log(response);
        this.tiles = response.data;
      });
  }

  newTile() {

    this._$http
      .post(`http://tiycomicbook.azurewebsites.net/comicbookapi/createtile`, {
        comicbookid: this.id,
        TileType: 'small',
        Text: '',
        Image: ''
      })
      .then((response) => {
        this.tiles.push(response.data);
        console.log(response.data);
      });
  }

  findTileId(tile) {
    if (tile.Id !== undefined) {
      return tile.Id;
    }
    else {
      return tile.TileId;
    }
  }

  deleteTile(tile) {
    console.log(tile);
    this._$http
      .post(`http://tiycomicbook.azurewebsites.net/comicbookapi/DeleteTile/${this.findTileId(tile)}`)
      .then((response) => {
        this.tiles.splice(this.tiles.indexOf(tile), 1);
      });
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }
}

export default ComicController;
