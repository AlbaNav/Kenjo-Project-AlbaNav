import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAlbumDialog } from './update-album.dialog';

describe('UpdateAlbumDialogComponent', () => {
  let component: UpdateAlbumDialog;
  let fixture: ComponentFixture<UpdateAlbumDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAlbumDialog ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAlbumDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
