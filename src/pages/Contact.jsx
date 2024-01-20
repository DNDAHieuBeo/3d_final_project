import React from "react";
import { IonIcon } from "@ionic/react";
import "@ionic/react/css/core.css"; // Import Ionicons CSS
import { mail, logoWhatsapp, location } from "ionicons/icons";
const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "letrihieudnda@gmail.com" },
    { logo: "logoWhatsapp", text: "0983 126 926" },
    {
      logo: "location",
      text: "Da Nang, Vietnam",
    },
  ];
  return (
    <section id="contact" className=" px-3 text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 py-36">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form className="flex flex-col flex-1 gap-5">
            <input type="text" placeholder="Your Name" className="bg-gray-700 outline-none rounded-lg p-3"/>
            <input type="Email" placeholder="Your Email Address" className="bg-gray-700 outline-none rounded-lg p-3"/>
            <textarea placeholder="Your Message" rows={10} className="bg-gray-700 outline-none rounded-lg p-3"></textarea>
            <button className="bg-cyan-600 font-semibold text-white md:mx-0 mx-auto rounded-full py-3 px-6 flex items-center gap-2 w-fit">Send Message</button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                <IonIcon icon={contact.logo} />
                  
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;