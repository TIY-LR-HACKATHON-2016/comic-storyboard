class ComicController {
  constructor($http) {
    this._$http = $http;
    this.show = false;

    this.getData();
  }

  getData() {
    this._$http
      .get(`http://tiycomicbook.azurewebsites.net/comicbooks/index`)
      .then((response) => {
        console.log(response);
        this.tiles = response.data;
        console.log(this.tiles);
      });
  }

  showButtons() {
    console.log("trying to show!");
    this.show = !this.show;
  }
}

export default ComicController;
