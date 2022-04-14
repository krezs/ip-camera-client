import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StreamService {

  constructor(private http: HttpClient) { }


  public getStreams(): Promise<any> {
    const url = `http://localhost:8000/api/streams`;
    return this.http.get(url).toPromise();
  }



  // public getStreams(): Observable<any> {
  //   // const promise = new Promise<void>((resolve, reject) =>  {
  //   //   const apiURL = `http://localhost:8000/api/streams`;
  //   //   this.http.get<any[]>(apiURL).subscribe({
  //   //     next(res: any) => {}
  //   //   });
  //   // });
  //   return this.http.get(`http://localhost:8000/api/streams`);
  // }

  // getStreams() {
  //     const promise = this.httpClient.get(this.apiUrl).toPromise();
  //     console.log(promise);  
  //   // const promise = new Promise<void>((resolve, reject) => {
  //   //   const apiURL = `http://localhost:8000/api/streams`;
  //   //   this.http.get<any[]>(apiURL).subscribe({
  //   //     next: (res: any) => {
  //   //       return res;
  //   //       resolve();
  //   //     },
  //   //     error: (err: any) => {
  //   //       reject(err);
  //   //     },
  //   //     complete: () => {
  //   //       console.log('complete');
  //   //     },
  //   //   });
  //   // });
  //   // return promise;
  // }

}
