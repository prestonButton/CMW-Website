import React from "react";
import Footer from "../components/Footer";
import "./About.css"

export default function About() {
  return (
    <div>
      <div className="About--header_div">
        <div className="About--header_text">
          <h1 className="About--header">About Us</h1>
          <hr />
          <p>
            Community Metalworks is a Hudson Valley-based company that
            specializes in supplying metal parts proudly made in America. Our
            team is committed to providing high-quality metal fabrication
            services to meet the needs of a variety of industries. We offer
            competitive pricing, short lead times, and a quality-first approach
            to ensure that each project we undertake is completed to the highest
            standards.
          </p>

          <p>
            At Community Metalworks, we pride ourselves on our extensive
            capabilities and are continuously adding to our range of in-house
            processes. Our capabilities include design, engineering, CAD, tube
            bending (both draw bending and roll bending), tube cutting, and tube
            measuring using CMM technology. We also specialize in sheet metal,
            including press brake, deburring, punch press cutting, punching, and
            forming, as well as CNC machining with a vertical machining center.
          </p>

          <p>
            We understand that every client has unique needs, which is why we
            have a strong network of manufacturing partners that we collaborate
            with to provide additional services such as powder coating, turning,
            and welding. Our comprehensive solutions enable us to provide
            tailored services that meet our clients' specific requirements,
            ensuring that they receive a one-stop-shop service.
          </p>

          <p>
            Our team serves a variety of markets, including medical equipment
            components, furniture components, and agricultural equipment
            components. We understand the importance of precision and
            innovation, and we use state-of-the-art technology to ensure that we
            remain at the forefront of the industry.
          </p>

          <p>
            At Community Metalworks, we believe that our success depends on the
            satisfaction of our customers, which is why we are committed to
            building long-term relationships based on trust, reliability, and
            quality. Our team of experts takes pride in delivering work of the
            highest quality, and we strive to exceed expectations on every
            project we undertake.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
