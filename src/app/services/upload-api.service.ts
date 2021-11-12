import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from './../models/Post';

@Injectable({
  providedIn: 'root'
})
export class UploadAPIService {

  URL = 'http://127.0.0.1:5000/upload'
  public image: any = null; //list of files

  constructor(private httpClient: HttpClient) { }

  public uploadAPI(objPost: Post, image: any) {

    const { name, email, phone } = objPost;
    const formData: FormData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("image", image[0], image["filename"]);



    let HTTPOptions: Object = {
      responseType: 'text'
    }
    return this.httpClient.post<Post>(this.URL, formData, HTTPOptions);


  }

}
