import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register-popup',
  templateUrl: './register-popup.component.html',
  styleUrls: ['./register-popup.component.css']
})
export class RegisterPopupComponent {
  @Output() close = new EventEmitter<void>();

  age = 18;
  interests: string[] = [];
  newInterest = '';
  addressType = 'home';
  photo: string | ArrayBuffer | null = null;

  constructor(private userService: UserService, private router: Router) {}

  onPhotoUpload(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const img = new Image();
      img.onload = () => {
        if (img.width <= 310 && img.height <= 325) {
          const reader = new FileReader();
          reader.onload = () => {
            this.photo = reader.result;
          };
          reader.readAsDataURL(file);
        } else {
          alert('Photo dimensions should be 310x325 pixels or less.');
        }
      };
      img.src = URL.createObjectURL(file);
    }
  }

  addInterest(event: Event) {
    event.preventDefault();
    if (this.newInterest && !this.interests.includes(this.newInterest)) {
      this.interests.push(this.newInterest);
      this.newInterest = '';
    }
  }

  removeInterest(interest: string) {
    this.interests = this.interests.filter(i => i !== interest);
  }

  onAddressTypeChange(event: any) {
    this.addressType = event.value;
  }

  onSubmit() {
    const userData = {
      username: (document.getElementById('username') as HTMLInputElement).value,
      firstName: (document.getElementById('firstName') as HTMLInputElement).value,
      email: (document.getElementById('email') as HTMLInputElement).value,
      password: (document.getElementById('password') as HTMLInputElement).value,
      age: this.age,
      interests: this.interests,
      addressType: this.addressType,
      address1: this.addressType === 'home' ? (document.getElementById('address1') as HTMLInputElement).value : (document.getElementById('companyAddress1') as HTMLInputElement).value,
      address2: this.addressType === 'home' ? (document.getElementById('address2') as HTMLInputElement).value : (document.getElementById('companyAddress2') as HTMLInputElement).value,
      photo: this.photo
    };
    this.userService.setUserData(userData);
    this.router.navigate(['/profile']);
    this.close.emit();
  }
}