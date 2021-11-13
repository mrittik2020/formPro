import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { UploadAPIService } from '../services/upload-api.service';
import { Post } from './../models/Post';



@Component({
  selector: 'app-one-from',
  templateUrl: './one-from.component.html',
  styleUrls: ['./one-from.component.css']
})




export class OneFromComponent implements OnInit {

  restFrom = new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    phone:new FormControl('')
  })
  constructor(private uploader: UploadAPIService) { }
  

  // For Form Submit Data Handelling............................................................
  onSubmit(formData: Post){

    // this.uploader.upSimpleFrom(formData)

    this.uploader.upSimpleFrom(formData).subscribe(res => {
      console.log(res);
    },
    error => {
      console.log(error);
    });

  }



  ngOnInit(): void  {
  }

  

}
