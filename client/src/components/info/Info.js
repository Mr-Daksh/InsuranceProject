import React from "react";
import InformationCard from "../../informationcard/InformationCard";
import "./Info.css";
import { faTruckMedical } from "react-fontawesome";
import { faHeartPulse } from "react-fontawesome";
import { faTooth } from "react-fontawesome";
import VaccinesIcon from '@mui/icons-material/Vaccines';
import PolicyIcon from '@mui/icons-material/Policy';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <h2>What We Do</h2>
        </h3>
        <p className="info-description">
          We bring Safety to your convenience, offering a comprehensive range of
          on-demand Policies services tailored to your needs. Our platform
          allows you to connect with experienced Policies which provide expert
          medical advice, issue online insurances, and offer quick refills
          whenever you require them.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Policy1"
          description="
          Our Emergency Response service is structured to be your steadfast ally during
           urgent situations. Whether it's a sudden crisis, disaster, or any pressing issue that
            demands immediate action, our team of committed policy experts is accessible round-the-clock
             to offer swift and effective assistance."
             icons ={<VaccinesIcon/>}
        />


        <InformationCard
          title="Policy2"
          description="Our team of seasoned policy analysts and experts utilize cutting-edge methodologies to evaluate various 
          legislative measures and design tailored policy recommendations. From exhaustive policy assessments to innovative
           interventions, we are dedicated to aiding in the creation of effective governance frameworks and promoting 
           societal well-being."
          icons={<PolicyIcon/>}
        />

        <InformationCard
          title="Policy3"
          description="Radiate assurance as our Dental Policy services address all aspects of oral healthcare.
           Our proficient policy analysts offer a diverse array of solutions, from standard evaluations and
            preventive measures to cosmetic enhancements and rehabilitative interventions."
          icons={<AssuredWorkloadIcon/>}
        />
      </div>
    </div>
  );
}

export default Info;
