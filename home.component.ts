import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterPopupComponent } from '../register-popup/register-popup.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public dialog: MatDialog) {}

  openRegisterPopup(): void {
    this.dialog.open(RegisterPopupComponent, {
      width: '600px',
      disableClose: true
    });
  }
}