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
    let numFiles = event.target.files.length
    if (numFiles != 0) {
      if (numFiles > 1) {
        // console.log(numFiles + " Files Sellected");
        this.str = numFiles + " Files Selected";
        console.log(this.str);
      }
      else if (numFiles = 1) {
        let file = event.target.files[0];
        // console.log(file.name);
        this.str = file.name.slice(0, 40) + "...";
        console.log(this.str);

      }
    }

    this.image = event.target["files"];
    console.log(this.image);
  }


  // For Form Submit Data Handelling............................................................
  onSubmit(formData: Post){
    console.log(this.restFrom.value["name"]);
    console.log(this.restFrom.value["email"]);
    console.log(this.restFrom.value["phone"]);

    this.uploader.uploadAPI(formData, this.image).subscribe(res => {
      console.log(res);
    },
    error => {
      console.log(error);
    });

  }

}


