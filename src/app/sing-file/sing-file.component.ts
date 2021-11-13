import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Post } from '../models/Post';
import { UploadAPIService } from '../services/upload-api.service';

@Component({
  selector: 'app-sing-file',
  templateUrl: './sing-file.component.html',
  styleUrls: ['./sing-file.component.css']
})


export class SingFileComponent implements OnInit {

  public str: String = "Choose a file..."

  public image: any = null; //list of files

  restFrom = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl('')
  })


  constructor(private uploader: UploadAPIService) { }

  ngOnInit(): void {
  }

  // For Image Handelling................................................................
  public onFileSelected(event: any): void {
    this.image = event.target["files"];    
    let file = event.target.files[0];
    let txtLen: number = file.name.split('').length;
    if(txtLen > 20) {
      this.str = file.name.slice(0, 20) + "...";
    }else{
      this.str = file.name;
    }
  }


  // For Form Submit Data Handelling............................................................
  onSubmit(formData: Post){

    this.uploader.uploadSfile(formData, this.image).subscribe(res => {
      console.log(res);
    },
    error => {
      console.log(error);
    });

  }

}


