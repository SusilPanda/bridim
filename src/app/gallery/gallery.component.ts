import { Component, OnInit } from '@angular/core';

interface Videos {
  id,
  link
  }
  

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})


export class GalleryComponent implements OnInit {

  public videosList : any[] = [ 
  {id: 1, link : 'https://www.youtube.com/embed/aof75SAvd-g'},
  {id: 2, link : 'https://www.youtube.com/embed/crmfKpcVYWw'},
  {id: 3, link : 'https://www.youtube.com/embed/hfdpOZIUVgU'},
  {id: 4, link : 'https://www.youtube.com/embed/rT4K-62P150'},
  {id: 5, link : 'https://www.youtube.com/embed/2kWAHI0mWHE'},
  {id: 6, link : 'https://www.youtube.com/embed/I-lw28Hgwfk'},
  {id: 7, link : 'https://www.youtube.com/embed/N_BwAuqsNH4'},
  {id: 8, link : 'https://www.youtube.com/embed/aQnjypwcWB0'},
  {id: 9, link : 'https://www.youtube.com/embed/Z1FIgtIlaAM'},
  {id: 10, link : 'https://www.youtube.com/embed/RwYHVcdzkNc'},
  {id: 11, link : 'https://www.youtube.com/embed/ypxYVFORn1s'},
  {id: 12, link : 'https://www.youtube.com/embed/sLGsDLru5VY'},
  {id: 13, link : 'https://www.youtube.com/embed/wzqudMw0Rys'},
  {id: 14, link : 'https://www.youtube.com/embed/3lg63at-ejw'},
  {id: 15, link : 'https://www.youtube.com/embed/iAA4L-ou4p0'},
  {id: 16, link : 'https://www.youtube.com/embed/UtBUlGegjxI'},
  {id: 17, link : 'https://www.youtube.com/embed/-_HgK0-HwJM'},
  {id: 18, link : 'https://www.youtube.com/embed/lRL9IEmhQEc'},
  {id: 19, link : 'https://www.youtube.com/embed/AtoIjG6wsKE'},
  {id: 20, link : 'https://www.youtube.com/embed/1DTXhrrmn_A'},
  {id: 21, link : 'https://www.youtube.com/embed/yXJ35rrmqxw'},

  ]

  

  constructor() { 
    var videosarray = this.videosList;
    console.log('inside gallery consructor');
    console.log(videosarray);
  }

  
  ngOnInit() {

 
  }

}
