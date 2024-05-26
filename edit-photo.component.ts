import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-photo',
  templateUrl: './edit-photo.component.html',
  styleUrls: ['./edit-photo.component.css']
})
export class EditPhotoComponent {
  newPhoto: string | ArrayBuffer | null = null;

  constructor(
    public dialogRef: MatDialogRef<EditPhotoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService
  ) {}

  onPhotoUpload(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const img = new Image();
      img.onload = () => {
        if (img.width <= 310 && img.height <= 325) {
          const reader = new FileReader();
          reader.onload = () => {
            this.newPhoto = reader.result;
          };
          reader.readAsDataURL(file);
        } else {
          alert('Photo dimensions should be 310x325 pixels or less.');
        }
      };
      img.src = URL.createObjectURL(file);
    }
  }

  savePhoto() {
    if (this.newPhoto) {
      this.data.userData.photo = this.newPhoto;
      this.userService.setUserData(this.data.userData);
    }
    this.dialogRef.close();
  }
}