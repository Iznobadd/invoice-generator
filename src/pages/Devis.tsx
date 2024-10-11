import FormDevis from "../components/devis/FormDevis";
import PreviewDevis from "../components/devis/PreviewDevis";
import { z } from "zod";
import { devisSchema } from "../types/Devis";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export type DevisFormData = z.infer<typeof devisSchema>;

const Devis = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<DevisFormData>({ resolver: zodResolver(devisSchema) });

  const formData = watch();

  const onSubmit = (data: DevisFormData) => {
    console.log(data);
  };

  return (
    <div className="flex">
      <FormDevis
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
      />
      <div className="relative w-4/6 ">
        <PreviewDevis formData={formData} />
        <button className="absolute top-2 right-2 bg-blue-500 text-white p-2">
          Télécharger PDF
        </button>
      </div>
    </div>
  );
};

export default Devis;
