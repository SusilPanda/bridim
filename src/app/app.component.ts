import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from 'src/DataService';

interface User {
  id;
  name;
  emailid;
  password;
  mobilenumber;
  dob;
  qualification;
  applyingFor;
  prefCountry;
  engLangCertificates;
  status;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private dataService: DataService) { }
  title = 'bridim';
  images1 = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  formdata;
  emailId;
  status;
  isSubmitted : any= false;
  users : User[];

  ngOnInit() { 
    this.formdata = new FormGroup({
      id : new FormControl(''),
      name : new FormControl(''),
      emailid : new FormControl(''),
      password : new FormControl(''),
      mobilenumber : new FormControl(''),
      dob : new FormControl(''),
      qualification : new FormControl(''),
      applyingFor:new FormControl(''),
      prefCountry: new FormControl(''),
      engLangCertificates: new FormControl(''),
      status: new FormControl('')
    });
 } 

 onClickSubmit(data) {
   
  this.status = "Request Submitted ! We Will Get Back To You Soon.";
   console.log('Inside on click submit');
   console.log(data);
   this.isSubmitted = true;
   this.dataService.getAllUsers().subscribe(data => {
    // console.log(data);
     this.users = data;
     console.log(this.users);

   });
}

  carouselOptions = {
    margin: 10,
    nav: true,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    responsiveClass: true,
    items:1,
    loop:true,
    // For Image Autoplay
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,

    //video:true,
    lazyLoad:true,
    center:true,
    /*responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 2,
        nav: true,
        loop: false
      },
      1500: {
        items: 3,
        nav: true,
        loop: false
      }
    }*/
  }
 
  images = [
    {
      text: "I registered my case for Australia PR Visa with VisasOnBoard few months ago. Since then, I am being very well assisted on my case for Subclass 189. I am carrying more than 5 years of working experience in the field of Automobile Engineering but was not sure if I can successfully prepare my documentations for the Assessment authority of Australia. But on Mrs.Kiran’s advice I submitted my case and he took care of all the documentation part very nicely. Recently I received a positive skill assessment from the Immigration department of Australia and soon am going to apply for Australia PR visa"
      +"Thanks to Visa On Board Overseas Education Consultant Team, Keep up the good work!!"      
      +"Sarabjit Singh"
      + "Punjab (INDIA)",
      
      image: "../assets/img/testimonial/testimonial1.png"
    },
    {
      text: "I registered my case for Australia PR Visa with VisasOnBoard few months ago. Since then, I am being very well assisted on my case for Subclass 189. I am carrying more than 5 years of working experience in the field of Automobile Engineering but was not sure if I can successfully prepare my documentations for the Assessment authority of Australia. But on Mrs.Kiran’s advice I submitted my case and he took care of all the documentation part very nicely. Recently I received a positive skill assessment from the Immigration department of Australia and soon am going to apply for Australia PR visa"
      +"Thanks to Visa On Board Overseas Education Consultant Team, Keep up the good work!!"      
      +"Sarabjit Singh"
      + "Punjab (INDIA)",
      image: "../assets/img/testimonial/testimonial2.png"
    },
    {
      text: "I registered my case for Australia PR Visa with VisasOnBoard few months ago. Since then, I am being very well assisted on my case for Subclass 189. I am carrying more than 5 years of working experience in the field of Automobile Engineering but was not sure if I can successfully prepare my documentations for the Assessment authority of Australia. But on Mrs.Kiran’s advice I submitted my case and he took care of all the documentation part very nicely. Recently I received a positive skill assessment from the Immigration department of Australia and soon am going to apply for Australia PR visa"
      +"Thanks to Visa On Board Overseas Education Consultant Team, Keep up the good work!!"      
      +"Sarabjit Singh"
      + "Punjab (INDIA)",
      image: "../assets/img/testimonial/testimonial3.png"
    },
    {
      text: "I registered my case for Australia PR Visa with VisasOnBoard few months ago. Since then, I am being very well assisted on my case for Subclass 189. I am carrying more than 5 years of working experience in the field of Automobile Engineering but was not sure if I can successfully prepare my documentations for the Assessment authority of Australia. But on Mrs.Kiran’s advice I submitted my case and he took care of all the documentation part very nicely. Recently I received a positive skill assessment from the Immigration department of Australia and soon am going to apply for Australia PR visa"
      +"Thanks to Visa On Board Overseas Education Consultant Team, Keep up the good work!!"      
      +"Sarabjit Singh"
      + "Punjab (INDIA)",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/4.jpg"
    },
    {
      text: "I registered my case for Australia PR Visa with VisasOnBoard few months ago. Since then, I am being very well assisted on my case for Subclass 189. I am carrying more than 5 years of working experience in the field of Automobile Engineering but was not sure if I can successfully prepare my documentations for the Assessment authority of Australia. But on Mrs.Kiran’s advice I submitted my case and he took care of all the documentation part very nicely. Recently I received a positive skill assessment from the Immigration department of Australia and soon am going to apply for Australia PR visa"
      +"Thanks to Visa On Board Overseas Education Consultant Team, Keep up the good work!!"      
      +"Sarabjit Singh"
      + "Punjab (INDIA)",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/5.jpg"
    },
    {
      text: "I registered my case for Australia PR Visa with VisasOnBoard few months ago. Since then, I am being very well assisted on my case for Subclass 189. I am carrying more than 5 years of working experience in the field of Automobile Engineering but was not sure if I can successfully prepare my documentations for the Assessment authority of Australia. But on Mrs.Kiran’s advice I submitted my case and he took care of all the documentation part very nicely. Recently I received a positive skill assessment from the Immigration department of Australia and soon am going to apply for Australia PR visa"
      +"Thanks to Visa On Board Overseas Education Consultant Team, Keep up the good work!!"      
      +"Sarabjit Singh"
      + "Punjab (INDIA)",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/7.jpg"
    },
    {
      text: "I registered my case for Australia PR Visa with VisasOnBoard few months ago. Since then, I am being very well assisted on my case for Subclass 189. I am carrying more than 5 years of working experience in the field of Automobile Engineering but was not sure if I can successfully prepare my documentations for the Assessment authority of Australia. But on Mrs.Kiran’s advice I submitted my case and he took care of all the documentation part very nicely. Recently I received a positive skill assessment from the Immigration department of Australia and soon am going to apply for Australia PR visa"
      +"Thanks to Visa On Board Overseas Education Consultant Team, Keep up the good work!!"      
      +"Sarabjit Singh"
      + "Punjab (INDIA)",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/8.jpg"
    },
    {
      text: "I registered my case for Australia PR Visa with VisasOnBoard few months ago. Since then, I am being very well assisted on my case for Subclass 189. I am carrying more than 5 years of working experience in the field of Automobile Engineering but was not sure if I can successfully prepare my documentations for the Assessment authority of Australia. But on Mrs.Kiran’s advice I submitted my case and he took care of all the documentation part very nicely. Recently I received a positive skill assessment from the Immigration department of Australia and soon am going to apply for Australia PR visa"
      +"Thanks to Visa On Board Overseas Education Consultant Team, Keep up the good work!!"      
      +"Sarabjit Singh"
      + "Punjab (INDIA)",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/9.jpg"
    },
    {
      text: "I registered my case for Australia PR Visa with VisasOnBoard few months ago. Since then, I am being very well assisted on my case for Subclass 189. I am carrying more than 5 years of working experience in the field of Automobile Engineering but was not sure if I can successfully prepare my documentations for the Assessment authority of Australia. But on Mrs.Kiran’s advice I submitted my case and he took care of all the documentation part very nicely. Recently I received a positive skill assessment from the Immigration department of Australia and soon am going to apply for Australia PR visa"
      +"Thanks to Visa On Board Overseas Education Consultant Team, Keep up the good work!!"      
      +"Sarabjit Singh"
      + "Punjab (INDIA)",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/10.jpg"
    }
  ]

  id = 'qDuKsiwS5xw';
  playerVars = {
    cc_lang_pref: 'en'
  };
  private player;
  private ytEvent;

  onStateChange(event) {
    this.ytEvent = event.data;
    console.log('player state', event.data);
  }
  savePlayer(player) {
    this.player = player;
  }

  playVideo() {
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }

  sendQuery() {
    console.log("User :" +this.users);
  }
}


