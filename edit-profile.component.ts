import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  userData: any;
  newInterest = '';

  constructor(
    public dialogRef: MatDialogRef<EditProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService
  ) {
    this.userData = { ...data.userData };
  }

  ngOnInit(): void {}

  addInterest(event: Event) {
    event.preventDefault();
    if (this.newInterest && !this.userData.interests.includes(this.newInterest)) {
      this.userData.interests.push(this.newInterest);
      this.newInterest = '';
    }
  }

  removeInterest(interest: string) {
    this.userData.interests = this.userData.interests.filter((i: string) => i !== interest);
  }

  onAddressTypeChange(event: any) {
    this.userData.addressType = event.value;
  }

  onSubmit() {
    this.userService.setUserData(this.userData);
    this.dialogRef.close();
  }
}