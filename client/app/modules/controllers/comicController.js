class ComicController {
  constructor($http) {
    this._$http = $http;
    this.input = "";
    this.name = "";
    this.darkMode = false;
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
        "Title": this.name
      })
      .then((response) => {
        this.name = this.input;
        console.log(response);
      });
  }

  newTile() {
    this.tiles.push({
      box: 'small',
      img: '',
      caption: "here's a pic of nic cage. check out this huge comment."
    });

    console.log(this.tiles);

    this._$http
      .post(`http://tiycomicbook.azurewebsites.net/comicbookapi/createtile`, {
        "TileType": 'small',
        "Text": '',
        "Image": ''
      })
      .then((response) =>{
        console.log(response);
      });
  }

  deleteTile(tile) {
    this.tiles.splice(this.tiles.indexOf(tile), 1);

    this._$http
      .delete(`http://tiycomicbook.azurewebsites.net/comicbooks/index`)
      .then((response) => {
        console.log(response);
      });
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }
}

export default ComicController;
