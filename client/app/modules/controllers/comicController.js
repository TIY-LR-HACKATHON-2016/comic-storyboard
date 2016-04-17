class ComicController {
  constructor($http) {
    this._$http = $http;
    this.input = "";
    this.name = "";
    this.darkMode = false;
    this.comicId;

    this.tiles = [
      {
        id: '3452345',
        box: 'small',
        img: 'http://www.placecage.com/gif/300/300',
        caption: 'words here.  check it out'
      },
      {
        id: 'coolStuff',
        box: 'small',
        img: 'http://www.placecage.com/300/300',
        caption: "here's a pic of nic cage"
      },
      {
        id: 'checkItOut',
        box: 'small',
        img: 'http://www.placecage.com/c/300/300',
        caption: "here's another pic of nic cage. check out this huge comment."
      }
    ];

    this.getData();
  }

  getData() {
    this._$http
      .get(`http://tiycomicbook.azurewebsites.net/comicbookapi/index`)
      .then((response) => {
        console.log(response);
        // this.name = response.data[4].ComicBookName;
        // this.tiles = response.data.TileCount;
        console.log(this.tiles);
      });
  }

  newComic() {

    this._$http
      .post(`http://tiycomicbook.azurewebsites.net/comicbookapi/create`, {
        Title: this.input
      })
      .then((response) => {
        this.name = this.input;
        this.comicId = response.data.Id;
      });
  }

  newTile() {

    this._$http
      .post(`http://tiycomicbook.azurewebsites.net/comicbookapi/createtile`, {
        comicbookid: this.comicId,
        TileType: 'small',
        Text: '',
        Image: ''
      })
      .then((response) =>{
        this.tiles.push(response.data)
        console.log(response);
      });
  }

  deleteTile(tile) {
    console.log(tile);
    this._$http
      .post(`http://tiycomicbook.azurewebsites.net/comicbookapi/Delete/${tile.Id}`)
      .then((response) => {
        this.tiles.splice(this.tiles.indexOf(tile), 1);
      });
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }
}

export default ComicController;
