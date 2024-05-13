import React from "react";
import profile1 from '../../assests/google.png'
import profile2 from "../../assests/harley.png";
import profile3 from "../../assests/jio.png";
import profile4 from "../../assests/purple.png";
import DoctorCard from "../doctorcard/DoctorCard";
import './Doctors.css'

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <h2>Meet Our Partners</h2>
        </h3>

        <p className="dt-description">

        Discover our esteemed team of expert Partners committed to delivering premium Policies
        services at Policy Plus. Rely on their expertise and experience to guide you towards a
        healthier and more fulfilling life.
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}     
          name="Google Life Partners"
          title="Long-Term Care Insurance"
          stars="4.9"
          reviews="1800"
        />
        <DoctorCard
          img={profile2}
          name="Harley-Davidson"
          title="Auto Insurance Policy"
          stars="4.8"
          reviews="700"
        />
        <DoctorCard
          img={profile3}
          name="Jio : Reliance Partners"
          title="Family Protection Plan"
          stars="4.7"
          reviews="450"
        />
        <DoctorCard
          img={profile4}
          name="Together & Stronger"
          title="Life Insurance Coverage"
          stars="4.8"
          reviews="500"
        />
      </div>
    </div>
  );
}

export default Doctors;