import React from "react";

export default function Map() {
  return (
    <div className=" h-64 md:h-96 mt-10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13541.01412751905!2d115.83464784253316!3d-31.954017965493673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32bb9ed8a13729%3A0xda6c300e588b2a8e!2sThe%20Outsource%20Pro!5e0!3m2!1sen!2sin!4v1717611849303!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
