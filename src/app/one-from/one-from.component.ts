import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UploadAPIService } from '../services/upload-api.service';
import { Post } from './../models/Post';



@Component({
  selector: 'app-one-from',
  templateUrl: './one-from.component.html',
  styleUrls: ['./one-from.component.css']
})
export class OneFromComponent implements OnInit {

  public image:any = null; //list of files

  restFrom = new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    phone:new FormControl(''),
    image:new FormControl(''),
  })
  constructor(private uploader: UploadAPIService) { }

  public fileInput($event: any) {
    this.image=$event.target["files"];
    console.log(this.image);
  }

  onSubmit(formData: Post){
    console.log(this.restFrom.value["name"]);
    console.log(this.restFrom.value["email"]);
    console.log(this.restFrom.value["phone"]);
    console.log(this.image["filename"]);

    this.uploader.uploadAPI(formData, this.image).subscribe(res => {
      console.log(res);
    },
    error => {
      console.log(error);
    });

  }

  ngOnInit(): void {
  }

}
