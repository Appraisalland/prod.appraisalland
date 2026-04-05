import BreadCrumb from "../common/BreadCrumb";

const BreadCrumbBanner = () => {
  return (
    <section className="inner_page_breadcrumb">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="breadcrumb_content">
              {/* <BreadCrumb title="Membership" /> */}
              <h4 className="breadcrumb_title">
                <span style={{ color: "#7030A0", fontWeight: "bold" }}>Appraisal</span>{" "}
                <span style={{ color: "#92D050", fontWeight: "bold" }}>Land</span>{" "}
                Subscription Plan
              </h4>
            </div>
          </div>
          {/* End .col */}
        </div>
      </div>
    </section>
  );
};

export default BreadCrumbBanner;
