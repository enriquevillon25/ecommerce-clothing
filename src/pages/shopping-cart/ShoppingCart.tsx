import React from "react";

import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

export const ShoppingCart = () => {
  initMercadoPago("YOUR_PUBLIC_KEY", { locale: "es-PE" });
  return (
    <div>
      ShoppingCart
      <div>
        Comprar
        <Wallet
          initialization={{ preferenceId: "<PREFERENCE_ID>" }}
          customization={{ texts: { valueProp: "smart_option" } }}
        />
      </div>
    </div>
  );
};
