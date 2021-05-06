import * as Yup from "yup";

export const ValidationSchema = Yup.object().shape({
    title: Yup.string().required('Title Required')

});
