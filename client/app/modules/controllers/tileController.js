class TileController {
  constructor($http, $state, $stateParams) {
    this.id = $stateParams.id;
    this._$http = $http;
    this._$state = $state;
    this.input = "";
    this.carouselCategory = 0;
    this.carouselImage = 0;

    this.carousel = [
      [`http://vignette1.wikia.nocookie.net/p__/images/1/1a/Hong-kong-phooey.jpg/revision/latest?cb=20120115140257&path-prefix=protagonist`,

        `http://cdn.collider.com/wp-content/uploads/hong-kong-phooey-image.jpg`,

        `http://2.bp.blogspot.com/-xzhJSrNyDRI/T7Y35yYHSpI/AAAAAAAAAa8/5zQiE97lzwc/s1600/HONG+KONG+PHOOEY+PIC+(2).jpg`,

        `http://www.internationalhero.co.uk/h/hongkon2.jpg`,

        `http://static2.comicvine.com/uploads/original/6/68065/2648088-hong_kong_phooey_tribute_by_fourpanelhero.jpg`,

        `http://www.cartoonscrapbook.com/01pics-L/hong-kong-phooey_L65.jpg`,

        `https://s-media-cache-ak0.pinimg.com/236x/53/02/bd/5302bd023f6e1a0444cfc587510b00bc.jpg`,

        `http://www.cartoonscrapbook.com/01pics-L/hong-kong-phooey_L33.jpg`,

        `http://filmjunk.com/images/weblog/2011/08/hongkongphooeyeddie.jpg`,
      ],
      [`http://40.media.tumblr.com/6d849a537527cd121e5330c40bec2f6e/tumblr_nqhlobkO641ti6w8ko1_1280.png`,

        `https://i.ytimg.com/vi/TceUSHJ-N7I/maxresdefault.jpg`,

        `http://media.comicbook.com/wp-content/uploads/2013/02/archer-season-3.jpg`,

        `http://cinema-scope.com/wp-content/uploads/2013/06/Archer37a.png`,

        `http://cdn1.theodysseyonline.com/files/2016/02/03/635901271869386694-885876477_archer-14.jpg`,

        `http://vignette3.wikia.nocookie.net/archer/images/4/44/Cheryl_1.jpg/revision/latest?cb=20130221004653`,

        `http://archerfanpage.weebly.com/uploads/1/7/6/6/17665043/7125369.jpg`,

        `http://static-media.fxnetworks.com/img/FX_Networks/704/202/OPM_ARCHER_30_Certified_Cheryl_DayDateEP_clean_FXWEB_4500_1280x720_367961155662.jpg?resize=600:*`,

        `http://www.buzzfocus.com/wp-content/uploads/2014/02/Archer504_PamHulk.jpg`,

        `http://cupcakekadaver.com/wp-content/uploads/2015/09/pampoovey_body.jpg`,

        `http://vignette3.wikia.nocookie.net/archer/images/f/f9/Argument.jpg/revision/latest?cb=20140525235007`,

        `http://vignette1.wikia.nocookie.net/archer/images/6/6e/MiniSweaterDress.png/revision/latest?cb=20110411024820`,

        `http://wallpaperwind.com/thumbnails/detail/20131202/archer%20tv%20lana%20kane_wallpaperwind.com_89.jpg`,

        `http://dl9fvu4r30qs1.cloudfront.net/1b/b2/8976608c4b8a8f11581f0012f7a9/archer-season-6-episode-10-lana-and-archer.jpg`,
      ],
      [`http://static2.businessinsider.com/image/564cc42e2491f99d008b63b7/calvin-and-hobbes-just-turned-30--heres-the-history-of-the-strip-and-its-mysterious-creator-bill-watterson.jpg`,

        `https://lgsquirrel.files.wordpress.com/2014/07/calvinhobbesdartwargames.jpg`,

        `http://static.tumblr.com/f1a0eb51cc4eec9eaecf6cc6da0ece2c/p2ed0yu/p0Rmkzyq1/tumblr_static_tumblr_m4k21zrx8k1r3mr0io2_1280.jpg`,

        `http://media2.popsugar-assets.com/files/2016/01/07/687/n/1922398/83062de8_edit_img_cover_file_39694867_1452179933_main1Eng5bV.xxxlarge/i/Star-Wars-Calvin-Hobbes-Mashup.jpg`,

        `https://images2.alphacoders.com/270/270572.jpg`,

        `http://vignette4.wikia.nocookie.net/candh/images/3/3c/Dinosaurs.jpeg/revision/latest?cb=20120605140211`,

        `https://s-media-cache-ak0.pinimg.com/736x/a3/b5/d3/a3b5d3d2e78bb2802f24329b4a9f3157.jpg`,

        `https://s-media-cache-ak0.pinimg.com/236x/9b/a1/82/9ba1829084b2ff6374c0f0eb45f79056.jpg`,

        `https://i.ytimg.com/vi/fiu9Uud466s/hqdefault.jpg`,

        `https://themovierat.files.wordpress.com/2012/05/28864.jpg`,
      ],
      [`http://static4.comicvine.com/uploads/original/4/49448/2506745-1973_superfriends_1_0.jpg`,

        `http://www.dvdtalk.com/reviews/images/reviews/153/1201557600_1.jpg`,

        `https://s-media-cache-ak0.pinimg.com/736x/23/92/8b/23928b0f3b11a80d8fdcafb59f62b881.jpg`,

        `http://vignette1.wikia.nocookie.net/superfriends/images/d/d6/3Aquaman.png/revision/latest?cb=20090429224351`,

        `http://vignette4.wikia.nocookie.net/superfriends/images/8/87/2Aquaman.jpg/revision/latest?cb=20090429224351`,

        `http://static3.comicvine.com/uploads/original/4/49448/2506701-super_friends_aquaman_bumming_a_ride.jpg`,

        `http://vignette1.wikia.nocookie.net/fantendo/images/6/6a/Batman_Super_Friends.png/revision/latest?cb=20150213210659`,

        `https://antiscribe.files.wordpress.com/2012/07/batman-challenge-of-the-superfriends.jpg`,

        `http://static8.comicvine.com/uploads/original/4/49448/2506730-super_friends_73_l10.jpg`,

        `https://dailypop.files.wordpress.com/2010/01/superfriendslostepisodes2.jpg`,

        `http://static5.comicvine.com/uploads/original/4/49448/2506717-super_friends_73_l12.jpg`,

        `http://vignette4.wikia.nocookie.net/superfriends/images/e/eb/Infraredvision.jpg/revision/latest?cb=20101129224202`,

        `http://www.cannibalisticnerd.com/wp-content/uploads/2012/06/Super-Friends-Duck-and-Run.jpg`,

        `http://i142.photobucket.com/albums/r91/anjhuf/dollmaker%20image%203_zpsspp2ohbs.jpg~original`,

        `http://images3.wikia.nocookie.net/__cb20090625020639/superfriends/images/7/75/GL.png`,

        `http://vignette2.wikia.nocookie.net/superfriends/images/a/a6/Firestorm.jpg/revision/latest?cb=20080305222928`,

        `http://cdn.static.ovimg.com/episode/28055.jpg`,

        `http://www.cartoonscrapbook.com/02pics-L/super-powers-team_L16.jpg`,
      ],
      [`https://s-media-cache-ak0.pinimg.com/736x/8a/f7/96/8af79692013efffdf4519326d53ea5ec.jpg`,

        `http://trendingmag.co/wp-content/uploads/2015/08/Scooby-Doo-Monster.jpg`,

        `https://img.buzzfeed.com/buzzfeed-static/static/2014-01/enhanced/webdr02/30/23/enhanced-10878-1391142666-16.jpg`,

        `https://image.tmdb.org/t/p/w1280/cZ5dJRy2cdgDS57qR1fnoRyx6p3.jpg`,

        `http://orig00.deviantart.net/6f9e/f/2015/063/d/8/mexican_monster__scooby_doo_1001_animations__by_silvereagle91-d8kf4ag.jpg`,

        `https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Scooby-gang-1969.jpg/250px-Scooby-gang-1969.jpg`,

        `http://nerdist.com/wp-content/uploads/2014/06/3675-1.jpg`,

        `http://www.gunaxin.com/wp-content/uploads/2012/10/Scooby-Doo-Scared.png`,
      ],
      [`https://i.kinja-img.com/gawker-media/image/upload/anequa9iuummb657iyci.jpg`,

        `http://images-cdn.moviepilot.com/images/c_fill,h_936,w_1400/t_mp_quality/dss0kfpsudlpeqcbitdb/watch-the-attack-on-titan-season-2-trailer-succeed-where-the-movies-failed-647395.jpg`,

        `https://sleepinggeeks.files.wordpress.com/2015/12/attack-on-titan-season-2-mikasa.jpg`,

        `http://www.9thcx.com/wp-content/uploads/2015/08/Shingeki.jpg`,

        `http://images.christianpost.com/full/74712/attack-on-titan.jpg`,

        `https://assets.vg247.com/current//2014/05/attack_on_titan.jpg`,

        `http://images.hngn.com/data/thumbs/full/196698/650/0/0/0/attack-on-titan.png`,

        `http://static.comicvine.com/uploads/original/13/135592/3638103-1822846292-41266.jpg`,

        `http://i.kinja-img.com/gawker-media/image/upload/e8vj2jf9txjz3yvqt3e7.jpg`,
      ],
      [`http://img04.deviantart.net/1f41/i/2009/081/5/9/captain_caveman_classic_by_slappy427.jpg`,

        `http://vignette3.wikia.nocookie.net/boomerang-from-cartoon-network/images/c/cd/Captain_Caveman.jpg/revision/latest?cb=20130731162826`,

        `http://img2.timeinc.net/people/i/2014/sandbox/news/140203/captain/captain-600x450.jpg`,

        `http://orig06.deviantart.net/5001/f/2009/336/d/8/captaon_caveman_colored_by_gianmac.jpg`,
      ],
      [
        `https://s-media-cache-ak0.pinimg.com/236x/0a/2c/ff/0a2cff9b7ce7d48464b51d2215ce03ec.jpg`,

        `http://seveninchesofyourtime.com/wp-content/uploads/2015/03/UNDERDOG.jpg`,

        `https://michaelsfishbowl.files.wordpress.com/2010/12/simon-bar-sinister.jpg`,

        `https://s-media-cache-ak0.pinimg.com/236x/3e/1d/5f/3e1d5f2456e17ff1de734e4d63ebe57f.jpg`,

        `https://s-media-cache-ak0.pinimg.com/236x/47/19/0a/47190a13235af3d6f921a84029c3449e.jpg`,

        `http://static4.comicvine.com/uploads/scale_small/1/12075/593988-riffraff.jpg`,

        `http://36.media.tumblr.com/237a671364e3839687085ff8fa305aeb/tumblr_np5bgeJy8R1ta3x9ro7_500.jpg`,

        `http://freedom-muse.com/wp-content/uploads/2015/04/Villain.jpg`,

        `https://s-media-cache-ak0.pinimg.com/736x/04/7d/ed/047dede1dbe3852dea70ab387bf20c9a.jpg`,

        `https://jennzuko.files.wordpress.com/2014/11/villian.gif`,

        `http://i0.wp.com/listverse.com/wp-content/uploads/2008/01/cecilmad.jpg`,
      ],
      [`http://vignette2.wikia.nocookie.net/nickelodeon/images/1/14/Ren%2B%2BStimpy.jpg/revision/latest?cb=20130626035406`,

        `http://img11.deviantart.net/2420/i/2010/023/a/2/ren_and_stimpy_by_buttercupnergal.png`,

        `http://media.bigshinyrobot.com/uploads/2015/06/renstimpy_0.jpg`,

        `http://2.bp.blogspot.com/-oR5TfG_dajI/T0OlsyPJY7I/AAAAAAAAAOo/iXnW_auoyL4/s1600/145.jpg`,

        `http://vignette1.wikia.nocookie.net/renandstimpy/images/b/b6/Image-2.jpg/revision/latest?cb=20150916130346`,
      ],
      [`http://static.tvtropes.org/pmwiki/pub/images/jetsons.jpg`,

        `http://cbsnews1.cbsistatic.com/hub/i/r/2013/04/17/1e8cec98-c407-11e2-a43e-02911869d855/thumbnail/620x350/43ef4260f7c70bfc185badda38d327bd/Jetsons.jpg`,

        `https://blog.lookout.com/wp-content/uploads/2011/09/the-jetsons.jpg`,

        `http://public.media.smithsonianmag.com/legacy_blog/jetsons-tv-production-studio.jpeg`,

        `http://4.bp.blogspot.com/-neXhb0Aj7vM/TdtFuX69L9I/AAAAAAAAAdY/QUVCxCGzB8g/s1600/jet%2Bbank.jpg`,

        `https://s-media-cache-ak0.pinimg.com/originals/67/2b/10/672b106cb5214c1a2aab5b33239eec6e.jpg`,

        `https://rioforce.files.wordpress.com/2013/05/rosie-the-robot.png`,

        `http://cdn.smosh.com/sites/default/files/ftpuploads/bloguploads/0913/little-dipper-school-jetsons.jpg`,

        `http://cdn.freshome.com/wp-content/uploads/2013/03/what-you-can-learn-from-the-jetsons-about-home-automation-image-5.jpg`,

        `http://www.cartoonscrapbook.com/01pics-L/jetsons_L76.jpg`,

        `https://i.kinja-img.com/gawker-media/image/upload/oinmyiehw5qsahu0ozu6.jpg`,

        `http://public.media.smithsonianmag.com/legacy_blog/jetsons-rosey-mack.jpg`,

        `http://animatedviews.com/wp-content/uploads/2009/06/jetsonss1-3.jpg`,
      ],
      [
        `http://vignette2.wikia.nocookie.net/heman/images/c/c3/Heman83.jpg/revision/latest?cb=20090716165926`,

        `http://images-cdn.moviepilot.com/images/c_fill,h_478,w_850/t_mp_quality/ux2car5n820fwdulp2cd/the-strange-history-of-he-man-and-the-masters-of-the-universe-710937.jpg`,

        `http://vignette1.wikia.nocookie.net/heman/images/5/5a/200X-Battlecat.jpg/revision/latest?cb=20111102180257`,

        `http://i448.photobucket.com/albums/qq204/hawkeyeflame/he-man_beast_man_zpsc8445a40.jpg`,

        `http://www.bustatoons.com/blog_images/blog_bite_02.jpg`,

        `https://nerdymom61023.files.wordpress.com/2014/02/tt-heman-and-teela.jpg`,
      ],
      [`https://i.ytimg.com/vi/xXvBkwihOE8/hqdefault.jpg`,

        `https://s-media-cache-ak0.pinimg.com/236x/ee/0c/f5/ee0cf500d1b79048cae201014fb846e9.jpg`,

        `https://i.ytimg.com/vi/OsdPDbh0RYE/hqdefault.jpg`,

        `https://i.ytimg.com/vi/5r9vdqAFCY4/hqdefault.jpg`,

        `http://img.veehd.com/1984368_l2.jpg`,

        `http://www.cartoonsonnet.com/pink-arcade.jpg`,

        `http://www.cartoonsonnet.com/pink-arcade.jpg`,

        `https://i.ytimg.com/vi/m-6ir-gFpbA/hqdefault.jpg`,

        `https://i.ytimg.com/vi/bZsqdTrr1eM/hqdefault.jpg`,

        `https://i.ytimg.com/vi/16YG9qZQIJE/hqdefault.jpg`,

        `https://i.ytimg.com/vi/-dh4fUi-pds/hqdefault.jpg`,

        `http://s1.dmcdn.net/E7hhj/1280x720-rjj.jpg`,
      ],
      [
        `http://vignette1.wikia.nocookie.net/thundercats/images/4/4a/Lionowronghand.jpg/revision/latest?cb=20110902124831`,

        `http://vignette4.wikia.nocookie.net/thundercats/images/1/18/Vlcsnap-2014-03-12-22h15m32s140.jpg/revision/latest?cb=20140313043108`,

        `http://vignette2.wikia.nocookie.net/thundercats/images/8/80/Cheetara.jpg/revision/20111126090637`,

        `http://vignette2.wikia.nocookie.net/thundercatslair/images/8/80/Cheetara.jpg/revision/latest/scale-to-width-down/290?cb=20140627151308`,

        `https://upload.wikimedia.org/wikipedia/en/b/bc/Screenshot_Snarf.jpg`,

        `http://vignette3.wikia.nocookie.net/thundercatslair/images/b/b2/Snarf.jpg/revision/latest/scale-to-width-down/290?cb=20140627151310`,

        `http://www.geocities.ws/lady1venus10/panthro4.jpg`,

        `http://media.boingboing.net/wp-content/uploads/2015/06/2525087-thundercats05.jpg`,

        `http://vignette3.wikia.nocookie.net/thundercatslair/images/1/1c/Tygra.jpg/revision/latest?cb=20140627151309`,

        `http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/char_66827.jpg`,

        `http://grimbor.isperilo.us/images12/ThundercatsSeasonTwo01-ThunderCatsHoPart2-24.JPG`,
      ],
      [`http://images2.fanpop.com/images/photos/5500000/Fred-and-Wlima-Flintstone-the-flintstones-5540906-445-472.jpg`,

        `http://img.timeinc.net/time/photoessays/2008/10_cars/flintstones.jpg`,

        `https://images8.alphacoders.com/430/430669.jpg`,

        `http://orig07.deviantart.net/0a76/f/2015/206/3/1/the_flintstones_n_wwe_stone_age_smackdown_wilma_by_neverb4-d92s442.png`,

        `https://blog.etsy.com/en/files/2010/09/Wilma_cactus.jpg`,

        `http://img.sharetv.com/shows/episodes/standard/201799.jpg`,

        `http://content.internetvideoarchive.com/content/photos/5366/22540625_.jpg`,

        `http://vignette4.wikia.nocookie.net/hanna-barbera/images/8/80/Vlcsnap-2015-07-27-03h41m25s479.png/revision/latest?cb=20150727084336`,

        `http://images2.fanpop.com/images/photos/5500000/Bamm-Bamm-Rubble-the-flintstones-5539944-400-287.jpg`,

        `http://www.quizz.biz/uploads/quizz/161120/1_a9CFM.jpg`,

        `http://4.bp.blogspot.com/-ycoWE_BMbkU/VR7UJYD-c5I/AAAAAAAAB1U/BFq5V05y1NQ/s1600/flintstones_L23.jpg`,
      ],
      [
        `http://www.tatteredcover.com/sites/tatteredcover.com/files/capt_underpants.jpg`,

        `http://vignette3.wikia.nocookie.net/p__/images/0/09/Underpants.png/revision/latest?cb=20120727092134&path-prefix=protagonist`,

        `http://i1.ytimg.com/vi/HzfwAAHt4wY/hqdefault.jpg`,

        `http://i.kinja-img.com/gawker-media/image/upload/s--sr6id8FR--/18paughr7rkcgjpg.jpg`
      ],
      [`http://static4.comicvine.com/uploads/scale_small/11/111746/3053717-7368626610-jabbe.jpg`,

        `http://www.anthonynotes.com/wp-content/uploads/2015/02/jabberjaw.jpg`,

        `http://www.cartoonscrapbook.com/02pics/laffalympics01.jpg`
      ],
      [
        `http://vignette3.wikia.nocookie.net/epic-rap-battles-of-fictional-culture/images/2/24/Johnny_Bravo.jpg/revision/latest?cb=20160127021912`,

        `http://vignette3.wikia.nocookie.net/hanna-barbera/images/2/24/Johnny_Bravo.jpg/revision/latest?cb=20120423033926`,

        `http://static6.comicvine.com/uploads/original/5/57715/1937888-johnny_bravo_001.jpg`,

        `http://assets1.ignimgs.com/2016/02/05/johnnylistjpg-0d7b8a.jpg`,

        `http://www.zastavki.com/pictures/originals/2013/Cartoons_Johnny_Bravo_and_his_mother_051765_.jpg`,

        `http://www.kinomania.ru/images/frames/304738.jpg`,
      ],
      [`http://content.randomenthusiasm.com/Yf7Cp7JyT.png`,

        `http://www.dvdizzy.com/images/t-v/tick1-22.jpg`,

        `http://www.smashinglists.com/wp-content/uploads/2012/08/The-Tick-Top-Ten-Animated-TV-Series_thumb.jpg`,

        `http://i55.tinypic.com/2e0tgfb.jpg`,

        `https://comiclists.files.wordpress.com/2012/10/animal_arthur.jpg`,

        `http://animatedviews.com/wp-content/uploads/2006/12/tick5.jpg`,

        `https://s-media-cache-ak0.pinimg.com/236x/10/71/f2/1071f25c482aabedfbb37608bfdcd3ea.jpg`,
      ],
      [`http://i.cdn.turner.com/asfix/repository//8a25c3920eec2495010eed62293217c8/thumbnail_6221607127373002759.jpg`,

        `http://www.chud.com/articles/content_images/117/squidbillies2.JPG`,

        `http://geekadelphia.com/wp-content/uploads/2012/08/Snapz-Pro-XScreenSnapz001.jpg`,

        `http://vignette2.wikia.nocookie.net/squidbillies/images/7/77/Lil.jpg/revision/latest?cb=20100303060951`,

        `http://i.cdn.turner.com/adultswim/big/video/episode-thumbs-16x9/squidbillies_cc_603_pt1-05.jpg`,

        `http://i.cdn.turner.com/asfix/repository//8a25c3920eec2495010eed62293217c8/thumbnail_6390106704091126433.jpg`,

        `http://i.cdn.turner.com/asfix/repository//8a25c3920eec2495010eed62293217c8/thumbnail_7789786193802320356.jpg`,

        `http://ia.media-imdb.com/images/M/MV5BMjA5MzIxMDUwNV5BMl5BanBnXkFtZTgwMjM4MDU1MjE@._V1_UY268_CR87,0,182,268_AL_.jpg`,
      ]
    ];
  }

  previousImage() {
    if (this.carouselImage === 0) {
      this.carouselImage = this.carousel[this.carouselCategory].length - 1;
    } else {
      this.carouselImage -= 1;
    }
  }

  nextImage() {
    if (this.carouselImage === this.carousel[this.carouselCategory].length - 1) {
      this.carouselImage = 0;
    } else {
      this.carouselImage += 1;
    }
  }

  captionTile() {
    this.caption = this.input;
  }

  selectImage() {
    this.image = this.carousel[this.carouselCategory][this.carouselImage];
  }

  saveData() {
    this._$state.go('index');

    this._$http
      .post(`http://tiycomicbook.azurewebsites.net/comicbookapi/EditTile/${this.id}`, {
        comicbookid: this.id,
        TileType: 'small',
        img: this.carousel[this.carouselCategory][this.carouselImage],
        text: this.caption
      })
      .then((response) => {
        console.log(response);
      });
  }
}

export default TileController;
