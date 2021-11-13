import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Post } from '../models/Post';
import { UploadAPIService } from '../services/upload-api.service';

@Component({
  selector: 'app-multi-file',
  templateUrl: './multi-file.component.html',
  styleUrls: ['./multi-file.component.css']
})

export class MultiFileComponent implements OnInit {

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

  // For Image Handelling................................................................
  public onMultiFileSelected(event: any): void {
    let numFiles = event.target.files.length
    if (numFiles != 0) {
      if (numFiles > 1) {
        this.str = numFiles + " Files Selected";
        console.log(this.str);
      }

      else if (numFiles = 1) {
        let file = event.target.files[0];
        let txtLen: number = file.name.split('').length;
        if(txtLen > 20) {
          this.str = file.name.slice(0, 20) + "...";
        }else{
          this.str = file.name;
        }
      }

      let files = event.target.files;
      this.images=files;

    }
  }


  // For Form Submit Data Handelling............................................................
  onSubmit(formData: Post){

    this.uploader.uploadMfile(formData, this.images).subscribe(res => {
      console.log(res);
    },
    error => {
      console.log(error);
    });

  }

}
