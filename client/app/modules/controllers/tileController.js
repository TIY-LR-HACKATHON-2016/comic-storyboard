class TileController {
  constructor($http) {
    this._$http = $http;

    this.carousel = [
      'http://www.placecage.com/200/200',
      'http://www.placecage.com/c/200/200',
      'http://www.placecage.com/gif/200/200'];
    this.carouselImage = 0;

    this.getData();

  }
  getData() {
    this._$http
      .get(``)
      .then((respnse) => {
        console.log(response);
      });
  }

  previousImage() {
    if (this.carouselImage === 0) {
      this.carouselImage = this.carousel.length - 1;
    }
    else {
      this.carouselImage -= 1;
    }
  }

  nextImage() {
    if (this.carouselImage === this.carousel.length - 1) {
      this.carouselImage = 0;
    }
    else {
      this.carouselImage += 1;
    }
  }
}

export default TileController;
