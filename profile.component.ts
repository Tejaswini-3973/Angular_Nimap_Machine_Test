import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../user.service';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import { EditPhotoComponent } from '../edit-photo/edit-photo.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userData: any;

  constructor(private userService: UserService, public dialog: MatDialog) {}

  ngOnInit() {
    this.userService.getUserData().subscribe(data => {
      this.userData = data;
    });
  }

  openEditProfile() {
    const dialogRef = this.dialog.open(EditProfileComponent, {
      width: '600px',
      data: { userData: this.userData }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.userService.getUserData().subscribe(data => {
        this.userData = data;
      });
    });
  }

  openEditPhoto() {
    const dialogRef = this.dialog.open(EditPhotoComponent, {
      width: '600px',
      data: { userData: this.userData }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.userService.getUserData().subscribe(data => {
        this.userData = data;
      });
    });
  }
}