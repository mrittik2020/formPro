import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './../models/Post';

@Injectable({
  providedIn: 'root'
})
export class UploadAPIService {

  URL = 'http://127.0.0.1:5000'

  constructor(private httpClient: HttpClient) { }





  //Simple Form Upload................................................................
  public upSimpleFrom(obj: Post){
    const { name, email, phone } = obj;
    const fData: FormData = new FormData();

    fData.append("name", name);
    fData.append("email", email);
    fData.append("phone", phone);

    console.log(name);
    console.log(email);
    console.log(phone);

    let HTTPreturn: Object={
      responseType:'text'
    }

    return this.httpClient.post<Post>(this.URL+"/uploadForm",fData,HTTPreturn);
  }




  //Single File Upload................................................
  public uploadSfile(objPost: Post, image: any) {

    const { name, email, phone } = objPost;
    const formData: FormData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("image", image[0], image["filename"]);



    let HTTPOptions: Object = {
      responseType: 'text'
    }
    return this.httpClient.post<Post>(this.URL+"/uploadSFile", formData, HTTPOptions);
  }


     //Multiple File Upload..............................................
     public uploadMfile(obj: Post, images:any){
      const { name, email, phone } = obj;
      const fData: FormData = new FormData();
  
      fData.append("name", name);
      fData.append("email", email);
      fData.append("phone", phone);

      for (let img of images ) {
        fData.append('files', img);
      }

      console.log(name);
      console.log(email);
      console.log(phone);
  
      let HTTPreturn: Object={
        responseType:'text'
      }
  
      return this.httpClient.post<Post>(this.URL+"/uploadMFile",fData,HTTPreturn);
    }



 

}
