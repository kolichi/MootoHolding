import React from "react";
import {
  useFlutterwave,
  closePaymentModal,
  FlutterWaveButton,
} from "flutterwave-react-v3";
import Data from "../api/api";

const flutterwave = () => {
  const config = {
    public_key: "FLWPUBK-eeb9247cb630ced9bbd42230f5ee2cc4-X",
    tx_ref: Date.now(),
    amount: 100,
    currency: "ZMW",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "kolichitutu110@gmail.com",
      phonenumber: "07064586146",
      name: "TUTU",
    },
    customizations: {
      title: "MOOTO-FOOD",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const fwConfig = {
    ...config,
    text: "PROCCED",
    callback: (response) => {
      console.log(response);
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {},
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="Pay">
      <h3>
        You will recieve a onetime password from flutterwave via sms & whatsapp,
        input the code recieved and you will recieve a ussd prompt text, thank
        you!
      </h3>
      <FlutterWaveButton className="ps-btn btn " {...fwConfig} />
    </div>
  );
};

export default flutterwave;
