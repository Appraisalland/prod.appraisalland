import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import Header from "../common/header/DefaultHeader_01";
import MobileMenu from "../common/header/MobileMenu";
import Partners from "../common/Partners";
import WhyChoose from "../common/WhyChoose";
import Testimonial from "../home-7/Testimonial";
import BreadCrumbBanner from "./BreadCrumbBanner";
import Team from "./Team";
import OurMission from "./OurMission";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const [lastActivityTimestamp, setLastActivityTimestamp] = useState(
    Date.now()
  );

  useEffect(() => {
    const activityHandler = () => {
      setLastActivityTimestamp(Date.now());
    };

    // Attach event listeners for user activity
    window.addEventListener("mousemove", activityHandler);
    window.addEventListener("keydown", activityHandler);
    window.addEventListener("click", activityHandler);

    // Cleanup event listeners when the component is unmounted
    return () => {
      window.removeEventListener("mousemove", activityHandler);
      window.removeEventListener("keydown", activityHandler);
      window.removeEventListener("click", activityHandler);
    };
  }, []);

  useEffect(() => {
    // Check for inactivity every minute
    const inactivityCheckInterval = setInterval(() => {
      const currentTime = Date.now();
      const timeSinceLastActivity = currentTime - lastActivityTimestamp;

      // Check if there has been no activity in the last 10 minutes (600,000 milliseconds)
      if (timeSinceLastActivity > 600000) {
        localStorage.removeItem("user");
        router.push("/login");
      }
    }, 60000); // Check every minute

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(inactivityCheckInterval);
  }, [lastActivityTimestamp]);
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Inner Page Breadcrumb --> */}
      <BreadCrumbBanner />

      <div className="about-section">
        {/* <div className="container"> */}
        <div className="row">
          <div className="col-lg-12">
            <div
              className="main-title text-center mt-2"
              style={{
                backgroundColor: "#2e008b",
                color: "white",
                paddingTop: "10px",
                paddingBottom: "2px"
              }}
            >
              <h2 className="mt0 text-light">
								Our Mission
              </h2>
							<p style={{ color: "#fff", fontWeight: "bold", fontSize: "18px", margin: "0 0 10px" }} className="fz18 color-white">To simplify and strengthen appraisal and mortgage operations by providing dependable, <br/>high-quality support that ensures precision and peace of mind.</p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <OurMission />
          </div>
        </div>
        {/* End .row */}

        {/* <div className="row mt80">
          <div className="col-lg-12">
            <div className="main-title text-center">
              <h2 className="text-light" style={{
                backgroundColor: "#2e008b",
                color: "white",
                padding: "20px",
              }}>Why Choose Us</h2>
              <p>We provide full service at every step.</p>
            </div>
          </div>
        </div> */}
        {/* End .row */}

        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-xl-12">
              <div className="terms_condition_grid">
                <div className="grids mb30">
                  {/* <h4>{item.title}</h4> */}
                  <p className="mb20">
										As a Canadian company, we serve as a centralized hub for the real estate appraisal industry, connecting mortgage brokers and brokerages with appraisers and appraisal companies to enable efficient and effective collaboration. Our mission is to simplify the appraisal process by creating seamless connections that improve speed, communication, and overall outcomes.
                  </p>
                  <p>
										We focus on fostering strong, long-term relationships by promoting transparency, open communication, and a proactive, solutions-driven approach. By bringing together key industry professionals on a single platform, we help streamline workflows, reduce friction, and support better decision-making.{" "}
                  </p>
                  <p>
										Our team is committed to maintaining a high standard of coordination, reliability, and service, ensuring that every connection we facilitate adds value to all parties involved.{" "}
                  </p>
                  <p>
										More than just a connector, we are a strategic partner—bridging the gap between mortgage professionals and appraisal experts while driving efficiency and innovation across the real estate appraisal landscape.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End .row */}
        {/* </div> */}
      </div>

      {/* <!-- Property Search --> */}
      <section
        id="property-search"
        className="property-search home1-overlay bg-img5"
      >
        <div className="row">
          <div className="col-lg-12">
            <div className="search_smart_property text-center">
              <h2 className="text-light">
								Need help choosing the right plan?
              </h2>
              <p className="text-light">
								Connect with a product consultant to explore available plans and customize your Appraisal Land membership for maximum earning potential.
              </p>
              <Link href="/contact">
                <button className="btn ssp_btn">Contact Us</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Our Team --> */}
      {/* <section className="our-team bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Our Team</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="team_slider gutter-x15">
                <Team />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <!-- Our Testimonials --> */}
      {/* <section className="our-testimonials">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center mb20">
                <h2>Testimonials</h2>
                <p>Here could be a nice sub title</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="testimonial_grid_slider style2 gutter-x15">
                <Testimonial />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <!-- Our Partners --> */}
      {/* <section id="our-partners" className="our-partners">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Our Partners</h2>
                <p>We only work with the best companies around the globe</p>
              </div>
            </div>
          </div>
          <div className="row">
            <Partners />
          </div>
        </div>
      </section> */}

      {/* <!-- Start Call to Action --> */}
      {/* <section className="start-partners bgc-thm pt50 pb50">
        <div className="container">
          <CallToAction />
        </div>
      </section> */}

      {/* <!-- Our Footer --> */}
      <section className="footer_one p20">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      <div className="footer_middle_area">
        <div className="container">
          <CopyrightFooter />
        </div>
      </div>
    </>
  );
};

export default Index;
