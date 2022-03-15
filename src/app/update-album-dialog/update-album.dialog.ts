import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'update-album-dialog',
  templateUrl: 'update-album.dialog.html',
  styleUrls: ['./update-album.dialog.scss']
})

export class UpdateAlbumDialog implements OnInit {
  album = {
    title: '',
    year: 1900,
    artist: '',
    photoUrl: ''
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

   updateAlbum(album: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.put<any>('http://localhost:3000/album/create', JSON.stringify(album), httpOptions).subscribe();
  }

}