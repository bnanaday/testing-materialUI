import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ContactListComponent } from '../contact-list/contact-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatCommonModule,
    MatInputModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatCardModule,
    MatDividerModule,
    FlexLayoutModule,
  ],
  declarations: [AppComponent, HelloComponent, ContactListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
