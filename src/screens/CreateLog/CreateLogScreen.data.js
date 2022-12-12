import * as Yup from "yup";

export function initialVales() {
  return {
    origin: "",
    destination: "",
    registration: "",
    plane: "",
    altitude: "",
  };
}

export function validationSchema() {
  return Yup.object({
    origin: Yup.string().required("Campo obligatorio"),
    destination: Yup.string().required("Campo obligatorio"),
    registration: Yup.string().required("Campo obligatorio"),
    plane: Yup.string().required("Campo obligatorio"),
    altitude: Yup.string(),
  });
}

/*
export function initialVales() {
  return {
    origin: "",
    destination: "",
    altitude: "",
    plane: "",
    registration: "",
    description: "",
    location: null,
    images: [],
  };
}

export function validationSchema() {
  return Yup.object({
    origin: Yup.string().required("Campo obligatorio"),
    destination: Yup.string().required("Campo obligatorio"),
    altitude: Yup.string(),
    plane: Yup.string().required("Campo obligatorio"),
    registration: Yup.string().required("Campo obligatorio"),
    description: Yup.string(),
    location: Yup.object(),
    images: Yup.array()
  });
}
*/