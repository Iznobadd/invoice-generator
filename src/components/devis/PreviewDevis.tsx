import React from "react";
import { DevisFormData } from "../../pages/Devis";

interface PreviewDevisProps {
  formData: DevisFormData;
}

const PreviewDevis: React.FC<PreviewDevisProps> = ({ formData }) => {
  return (
    <div className="m-8 p-8 relative bg-gray-200" id="previewDevis">
      <p>{formData.companyName}</p>
      <h1 className="text-5xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        bonjour
      </h1>
    </div>
  );
};

export default PreviewDevis;
