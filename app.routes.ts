import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterPopupComponent } from './register-popup/register-popup.component';
import { ProfileComponent } from './profile/profile.component';
export const routes: Routes = [
    {path:'home', component:HomeComponent},

    {path:'register-popup', component:RegisterPopupComponent},

    {path:'profile', component:ProfileComponent}

];
