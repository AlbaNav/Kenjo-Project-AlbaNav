import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { UpdateAlbumDialog } from '../update-album-dialog/update-album.dialog';
@Component({
  selector: 'album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {
  albumList: Array<any> = [];

  constructor( private http: HttpClient, public dialog: MatDialog) { }
  data: any; 
  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/album').subscribe((data: Array<any>) =>{
      this.albumList = data;
      console.log(data)
    }
    
    );
  }
  openDialogUpdateAlbum(album:any, i:any) { 
    this.dialog.open(UpdateAlbumDialog, {data: this.albumList[i]});
   
  }
  deleteAlbum(album: any, i: number) {
    this.http.delete(`http://localhost:3000/album/${album._id}`).subscribe();
    this.albumList.splice(i, 1);
  }
}