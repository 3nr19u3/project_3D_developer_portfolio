import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black-100 px-4 py-16">
      <div className="bg-tertiary rounded-2xl shadow-lg max-w-2xl w-full p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Privacy Policy</h1>
        <p className="text-secondary mb-4 text-justify">
          Este sitio recopila información proporcionada voluntariamente por los usuarios a través de formularios de contacto, incluyendo nombre, correo electrónico y número de teléfono.
        </p>
        <p className="text-secondary mb-4 text-justify">
          La información recopilada se utiliza únicamente para responder consultas y enviar notificaciones relacionadas con el servicio solicitado.
        </p>
        <p className="text-secondary mb-4 text-justify">
          No compartimos información personal con terceros, excepto cuando sea necesario para cumplir con obligaciones legales o para el funcionamiento de servicios tecnológicos utilizados (por ejemplo, servicios de mensajería).
        </p>
        <p className="text-secondary mb-4 text-justify">
          Los datos no se utilizan para fines de marketing no solicitados.
        </p>
        <p className="text-secondary mb-4 text-justify">
          Para cualquier consulta relacionada con esta política, puede contactarnos en:
          contact@devpull.dev
        </p>
        <p className="text-secondary text-xs text-center mt-8">
          &copy; {new Date().getFullYear()} Luis | Software Engineer Portfolio
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
