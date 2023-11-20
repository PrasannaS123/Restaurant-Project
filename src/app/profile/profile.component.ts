import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordMatchValidator } from './change-password/password';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profileImageUrl = 'https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg';

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input?.files && input.files[0]) {
      const selectedFile = input.files[0];
      const fileSize = selectedFile.size; 
      const fileSizeMB = fileSize / (1024 * 1024); 

      if (fileSizeMB >= 2 && fileSizeMB <= 3) {
        
        const reader = new FileReader();
        reader.onload = () => {
         
          const fileContent = reader.result as string;
          console.log('File content:', fileContent);
        };
        reader.readAsDataURL(selectedFile);
      } else {
        
        console.log('Please select a file between 2MB and 3MB.');
      }
    }
  }

}
