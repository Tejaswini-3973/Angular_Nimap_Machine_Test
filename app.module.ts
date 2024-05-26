import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; 
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterPopupComponent } from './register-popup/register-popup.component';
import { ProfileComponent } from './profile/profile.component';
import { UserService } from './user.service';
import { AppRoutingModule } from './app-routing.module';
import { SafeUrlPipe } from './safe-url.pipe';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditPhotoComponent } from './edit-photo/edit-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterPopupComponent,
    ProfileComponent,
    SafeUrlPipe,
    EditProfileComponent,
    EditPhotoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatSliderModule,
    MatSelectModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }