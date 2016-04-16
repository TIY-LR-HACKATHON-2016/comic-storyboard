class ComicController {
  constructor($http) {
    this._$http = $http;
    this.input = "";
    this.name = "";
    this.show = false;
    this.tiles = [
      {
        box: 'small',
        img: 'http://www.placecage.com/gif/300/300',
        caption: 'words here.  check it out'
      },
      {
        box: 'small',
        img: 'http://www.placecage.com/300/300',
        caption: "here's a pic of nic cage"
      },
      {
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

  showButtons(tile) {
    console.log("trying to show!");
    this.show = !this.show;
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
}

export default ComicController;
