import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class AppValidators {

    static mailFormat(control: FormControl): ValidationErrors | null {

        const EMAIL_REGEXP = /^([0-9]|[A-Z]|[a-z]|[$-_\.])+@([0-9]|[A-Z]|[a-z]|[_-])+\.([0-9]|[A-Z]|[a-z]|[_\.])+$/;

        if (control.value && control.value !== '' && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { 'mailFormat': true };
        }

        return null;
    }

    static complexPasswordValidator(control: FormControl): ValidationErrors | null {


        const password = control.value;

        if (!password) {
            return null;
        }

        let inValid = true;

        const str: string = password ? password.toString() : '';

        const reg = /^(?:(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?=.*\d)).{6,}$/;

        const regex = RegExp(reg);


        if (regex.test(str)) {
            inValid = false;
        } else {
            inValid = true;
        }

        return inValid ? { 'inValidPassword': true } : null;

    }

    static onlyTextWithoutNumbers({ value }: FormControl): ValidationErrors | null {
        let regex = /^[^0-9]+$/
        if (!value) return null;

        if (regex.test(value)) return null;

        return { textContainsNumbers: true };
    }

    static notOnlySpaces({ value }: FormControl): ValidationErrors | null {
        let regex = /^(?!\s*$).+/
        if (!value) return null;

        if (regex.test(value)) return null;

        return { notOnlySpaces: true };
    }

    static uppercaseValidator(control: FormControl): { [key: string]: any } | null {
        let value = control.value;
        let uppercaseRegex = new RegExp('(?=.*?[A-Z])')

        if (!uppercaseRegex.test(value)) return { uppercaseError: true }
        else return null;
    }

    static equalityValidator(controlName: string): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const value = control.value;
            const otherControl = control.parent?.get(controlName);

            if (otherControl && value !== otherControl.value) {
                return { 'equality': true }; // Validation failed; the two fields are not equal.
            } else {
                return null; // Validation passed; the two fields are equal.
            }
        };
    }

    static lowercaseValidator(control: FormControl): { [key: string]: any } | null {
        let value = control.value || "";
        let uppercaseRegex = new RegExp('(?=.*?[a-z])')

        if (!uppercaseRegex.test(value)) return { lowercaseError: true }
        else return null;
    }


    static digitsValidator(control: FormControl): { [key: string]: any } | null {
        let value = control.value;
        let uppercaseRegex = new RegExp('(?=.*?[0-9])')

        if (!uppercaseRegex.test(value)) return { digitsError: true }
        else return null;
    }

    static specialCharacterValidator(control: FormControl): { [key: string]: any } | null {
        let value = control.value;
        let uppercaseRegex = new RegExp('(?=.*?[#?!@$%^&*-])')

        if (!uppercaseRegex.test(value)) return { specialCharacterError: true }
        else return null;
    }

    static minimumLengthValidator(control: FormControl): { [key: string]: any } | null {
        let value = control.value;
        let uppercaseRegex = new RegExp('(.{8,})')

        if (!uppercaseRegex.test(value)) return { minimumLengthError: true }
        else return null;
    }
}




interface ValidationResult {
    [key: string]: boolean;
}
