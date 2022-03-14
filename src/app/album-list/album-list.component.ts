import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})


export class AlbumListComponent implements OnInit {
  albumList: Array<any> = [];
    

  constructor( private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/album').subscribe((data: Array<any>) =>{
      this.albumList = data;
      console.log(data)
  }
    );
  }

  deleteAlbum(album: any, i: number) {
    this.http.delete(`http://localhost:3000/album/${album._id}`).subscribe();
    this.albumList.splice(i, 1);
  }

  updateAlbum (album: any) {
    this.http.put<any>(`http://localhost:3000/album/${album._id}`, JSON.stringify(album)).subscribe();
    console.log(album);
  }
}
  
      

    
  
