import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../models/Post';
import { UploadAPIService } from '../services/upload-api.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {

  public str: String = "Choose a file..."

  public images: any = []; //list of files


  
  restFrom = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl('')
  })

  constructor(private uploader: UploadAPIService) { }

  ngOnInit(): void {
  }

  public onMultiFileSelected(event: any): void {
    let numFiles = event.target.files.length


    if (numFiles != 0) {
      if (numFiles > 1) {
        // console.log(numFiles + " Files Sellected");
        this.str = numFiles + " Files Selected";
        console.log(this.str);
        // console.log(this.images);
      }

      else if (numFiles = 1 ) {

        let file = event.target.files[0];
        let txtLen: number = file.name.split('').length;
        // console.log(txtLen);
        if(txtLen > 20) {
          this.str = file.name.slice(0, 20) + "...";
        }else{
          this.str = file.name;
        }
        // console.log(file.name);

        // console.log(this.str);
      }


      let files = event.target.files;
      this.images=files;
    }
  }


  onSubmit(formData: Post){


    this.uploader.uploadMfile(formData, this.images).subscribe(res => {
      console.log(res);
    },
    error => {
      console.log(error);
    });

  }

}
