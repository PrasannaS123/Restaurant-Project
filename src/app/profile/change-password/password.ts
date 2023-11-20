import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('cpassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
        confirmPassword.setErrors({ passwordMisMatch: true });
        return { passwordMisMatch: true };
    } else {
        if (confirmPassword) {
            confirmPassword.setErrors(null);
        }
        return null;
    }
}
