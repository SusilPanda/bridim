import { Component, OnInit, AfterViewInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/DataService';
import * as fileSaver from 'file-saver';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { FacebookService, InitParams } from 'ngx-facebook';

interface UserEnq {
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

interface VisaAppStatus {
  id;
  passport_num;
  name;
  visa_status;
  file_name;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private dataService: DataService,
              private facebookService: FacebookService) {
                let initParams: InitParams = {
                 // appId: '1234566778',
                  xfbml: true,
                  version: 'v2.8'
                };
                facebookService.init(initParams);
               }
  title = 'bridim';
  images1 = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  formdata;
  contactformdata;
  emailId;
  status;
  isSubmitted : any= false;
  submittedSuccess: any= false;
  isContactSubmitted: any = false;
  conFormSubmittedSuccess: any= false;
  users : UserEnq[];
  userEnq : any ;
  visaAppStatus: VisaAppStatus;
  selectedPassportNum : string;
  isVisaStatusCheckActive = false;
  visaAppStatusError: boolean = false;
  visaAppStatusErrorMessage: string;
  submitted:boolean=false;
  fileToBeDownload : File;
  
  visaStatus =
  { 
  passport_num : '1234',
  name : 'ssss',
  visa_status:'In Progress' } ;
  counter: any;

  @ViewChild("oneItem") oneItem: any;
  @ViewChildren("count") count: QueryList<any>;

  ngOnInit() { 
    this.formdata = new FormGroup({
      id : new FormControl(''),
      first_name : new FormControl('', Validators.required),
      last_name : new FormControl(''),
      email_id : new FormControl('', Validators.required),
      mobile_num : new FormControl('', Validators.required),
      date_of_birth : new FormControl(''),
      qualification : new FormControl('', Validators.required),
      applyingFor:new FormControl(''),
      prefCountry: new FormControl(''),
      engLangCertificates: new FormControl('', Validators.required),
      status: new FormControl('Requested')
    });

    

    this.isVisaStatusCheckActive = false;

    this.contactformdata = new FormGroup({
      id : new FormControl(''),
      name : new FormControl('', Validators.required),
      email : new FormControl('', Validators.required),
      mobileNumber : new FormControl('', Validators.required),
      subject : new FormControl('', Validators.required),
      message : new FormControl('', Validators.required)
    });
    var diff;
    var future;
    this.counter = interval(500).pipe(
      map((x) => {
         x = 100+1;
         return x;
     })
   );

  // this.initFacebookService();
 } 

 onContainerScroll(event) {
  console.log(event);
  this.animateCount();
 }

 ngAfterViewInit() {
  this.animateCount();
 }

animateCount() {
  let _this = this;

  let single = this.oneItem.nativeElement.innerHTML;

  this.counterFunc(single, this.oneItem, 7000);

  this.count.forEach(item => {
    _this.counterFunc(item.nativeElement.innerHTML, item, 2000);
  });
}

counterFunc(end: number, element: any, duration: number) {
  let range, current: number, step, timer;

  range = end - 0;
  current = 0;
  step = Math.abs(Math.floor(duration / range));

  timer = setInterval(() => {
    current += 1;
    element.nativeElement.textContent = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, step);
}


 private initFacebookService(): void {
  const initParams: InitParams = { xfbml:true, version:'v3.2'};
  this.facebookService.init(initParams);
}

 onClickSubmit(frmdata) {
   
  this.status = "Request Submitted ! We Will Get Back To You Soon.";
   console.log('Inside on click submit');
   console.log(frmdata);
   this.isSubmitted = true;
  
   if (this.formdata.invalid) {
    return;
   } else {   
     this.dataService.saveEnquiry(frmdata).subscribe(data => {
    // console.log(data);
    // this.userEnq = data;
     console.log(this.userEnq);
     this.submittedSuccess = true;
    });
  }
}

onContactClickSubmit(contactfrmdata) {
   
   console.log('Inside on click contact submit');
   console.log(contactfrmdata);
   this.isContactSubmitted = true;
   if (this.contactformdata.invalid) {
    return;
   } else { 
   this.dataService.bookAnAppointment(contactfrmdata).subscribe(data => {
     console.log(data);
     //this.contactformdata = data;
     console.log(this.contactformdata);
     this.conFormSubmittedSuccess =true;
    });
  }
}
clearAppointmentForm() {
  this.contactformdata.reset({
    'name': '',
    'email' : '',
    'mobileNumber': '',
    'subject' : '',
    'message' : ''
  });
  this.conFormSubmittedSuccess = false ;
  this.isContactSubmitted = false;
}

clearEnquiryForm() {
  this.formdata.reset({
    'first_name': '',
    'last_name': '',
    'mobile_num': '',
    'email_id' : '',
    'date_of_birth' : '',
    'qualification' : '',
    'applyingFor' : '',
    'prefCountry' : '',
    'engLangCertificates' : '',
    'status' : ''
   });
  this.submittedSuccess = false;
  this.isSubmitted = false; 
}

onSearchClickSubmit(data) {
  //alert("Entered passport id : " + data.passportId); 
  this.visaAppStatus = null;
  this.getVisaStatus(data.passportId);
}
getVisaStatus(passport : string) {
  console.log(passport);
  //console.log(this.selectedPassportNum);
  this.dataService.getVisaStatus(passport).subscribe(data => {
    if (null == data) {
      this.visaAppStatusError = true;
      this.visaAppStatusErrorMessage = "Passport number Incorrect Or Not yet Applied";
      this.isVisaStatusCheckActive = true;
    } else {
      this.visaAppStatus = data;
      this.isVisaStatusCheckActive = true;
      this.visaAppStatusError = false;
    }
   
    console.log(data);
  //  console.log('visa app status : ');
   // console.log(this.visaAppStatus);
});

}

downloadForm(passport: string, fileName: string ) {
  console.log(fileName);
  //console.log(this.selectedPassportNum);
  this.dataService.downloadVisaStatusForm(fileName).subscribe(data => {
    if (null == data) {
      this.visaAppStatusError = true;
      this.visaAppStatusErrorMessage = "Passport number Incorrect Or Not yet Applied";
      this.isVisaStatusCheckActive = true;
    } else {
      this.fileToBeDownload = data;
      this.isVisaStatusCheckActive = true;
      this.visaAppStatusError = false;
    }
   /* var blob = new Blob([data], {type: 'application/pdf'});

  var downloadURL = window.URL.createObjectURL(data);
  var link = document.createElement('a');
  link.href = downloadURL;
  link.download = "visaApprovedForm.pdf";
  link.click(); */

  // It is necessary to create a new blob object with mime-type explicitly set
      // otherwise only Chrome works like it should
      //const newBlob = new Blob([(data)], { type: 'application/text' });
      let blob:any = new Blob([data], { type: 'text/json; charset=utf-8' });

      // IE doesn't allow using a blob object directly as link href
      // instead it is necessary to use msSaveOrOpenBlob
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveOrOpenBlob(blob);
          return;
      }

      // For other browsers:
      // Create a link pointing to the ObjectURL containing the blob.
      const downloadURL = URL.createObjectURL(blob);
       // window.open(downloadURL);
       //window.location.href = downloadURL;
        fileSaver.saveAs(blob, fileName);
   
    //console.log(data);
  //  console.log('visa app status : ');
   // console.log(this.visaAppStatus);
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
