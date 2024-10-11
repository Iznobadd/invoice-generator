import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { DevisFormData } from "../../pages/Devis";

interface FormDevisProps {
  register: UseFormRegister<DevisFormData>;
  handleSubmit: any;
  onSubmit: any;
  errors: FieldErrors<DevisFormData>;
}

const FormDevis: React.FC<FormDevisProps> = ({
  register,
  handleSubmit,
  onSubmit,
  errors,
}) => {
  return (
    <aside className="w-2/6 h-screen bg-gray-300 p-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nom de mon entreprise</label>
        <input type="text" className="w-full" {...register("companyName")} />
        {errors.companyName && <span>{errors.companyName.message}</span>}
      </form>
    </aside>
  );
};

export default FormDevis;
