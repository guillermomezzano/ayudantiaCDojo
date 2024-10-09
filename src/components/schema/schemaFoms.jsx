import * as Yup from "yup";

export const formSchema = Yup.object().shape({
    firstName: Yup.string()
        .required("Campo Requerido")
        .min(5, `Mínimo 5 caracteres`)
        .max(255, `Máximo 255 caracteres`),
    lastName: Yup.string()
        .min(5, `Mínimo 5 caracteres`)
        .max(25, `Máximo 25 caracteres`)
        .required("Campo Requerido"),
    age: Yup.number()
        .required("Campo Requerido"),
    password: Yup.string()
        .required("Campo Requerido")
        .test('minLength', 'Debe tener al menos 8 caracteres', value => value.length >= 8)
        .test('oneUppercase', 'Debe incluir al menos una letra mayúscula', value => /[A-Z]/.test(value)),
    rePassword: Yup.string()
        .required("Campo Requerido")
        .oneOf([Yup.ref("password"), ''], 'Las contraseñas no coinciden')
});