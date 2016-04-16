class ComicController {
  constructor($http) {
    this._$http = $http;
    this.input = "";
    this.name = "";
    this.show = false;
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
        caption: "here's a pic of nic cage"
      }
    ];

    this.getData();
  }

  getData() {
    this._$http
      .get(`http://tiycomicbook.azurewebsites.net/comicbooks/index`)
      .then((response) => {
        console.log(response);
        // this.tiles = response.data;
        console.log(this.tiles);
      });
  }

  newComic() {
    this.name = this.input;

    this._$http
      .post(`http://tiycomicbook.azurewebsites.net/comicbooks/index`, {
        Name: this.name
      })
      .then((response) => {
        console.log(response);
      });
  }

  newTile() {
    this.tiles.push({
      box: 'small',
      img: '',
      caption: "here's a pic of nic cage"
    });

    console.log(this.tiles);

    this._$http
      .post(`http://tiycomicbook.azurewebsites.net/comicbooks/index`, {
        TileType: 'small',
        Text: '',
        Image: ''
      })
      .then((response) =>{
        console.log(response);
      })
  }

  deleteTile(tile) {
    this.tiles.splice(this.tiles.indexOf(tile), 1);

    this._$http
      .delete(`http://tiycomicbook.azurewebsites.net/comicbooks/index`)
      .then((response) => {
        console.log(response);
      });
  }
}

export default ComicController;
