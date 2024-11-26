import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, FormBuilder} from '@angular/forms';
import { UploadAPIService } from '../services/upload-api.service';
import { Post } from './../models/Post';



@Component({
    selector: 'app-one-from',
    templateUrl: './one-from.component.html',
    styleUrls: ['./one-from.component.css'],
    standalone: false
})




export class OneFromComponent implements OnInit {

  restFrom = new UntypedFormGroup({
    name:new UntypedFormControl(''),
    email:new UntypedFormControl(''),
    phone:new UntypedFormControl('')
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
