import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";

import { AlbumListComponent } from "./album-list/album-list.component";
import { HttpClientModule } from "@angular/common/http";
import { NewAlbumDialog } from "src/app/new-album-dialog/new-album.dialog";
import { UpdateAlbumDialog } from "./update-album-dialog/update-album.dialog";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RatingComponent } from "./rating/rating.component";

@NgModule({
  declarations: [
    AppComponent,
    AlbumListComponent,
    NewAlbumDialog,
    UpdateAlbumDialog,
    RatingComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    RouterModule.forRoot([
      {
        path: "",
        component: AlbumListComponent,
      },
    ]),
  ],
  providers: [],
})
export class AppModule {}
