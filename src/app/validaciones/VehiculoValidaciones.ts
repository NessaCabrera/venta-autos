import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function validadorCodigo(): ValidatorFn{
    return (control:AbstractControl): ValidationErrors|null=>{
        const codigov=/^[A-Z]\d(4)$/;
        let value = control.value;
        if(codigov.test(value)){
            return null;
        }
        return{'codigoValidate':true};
    }
}