import Link from "next/link";

const TermsCondions = () => {
  const termsContent = [
    {
      id: 1,
      title: "Privacy Policy",
      text1: `Effective Date: 10-April-2026

AppraisalLand.ca respects your privacy and is committed to protecting your personal information in accordance with Canadian privacy laws, including PIPEDA.

Information We Collect:
We may collect personal information such as name, email address, phone number, business details, and licensing information. We also collect professional data such as appraisal orders, property details, and uploaded documents. Technical data such as IP address, browser type, and usage behavior may also be collected.

How We Use Information:
We use your information to operate the platform, facilitate communication between users, process transactions, improve services, and send updates or notifications.

Sharing of Information:
Your information may be shared with other users as required to complete transactions, with service providers such as hosting or payment processors, or with legal authorities if required by law. We do not sell your personal data.

Data Security:
We implement industry-standard security measures including encryption and access controls. However, no system is completely secure.

Data Retention:
We retain your information as long as your account is active or as required by law.

Your Rights:
You have the right to access, update, or request deletion of your personal data, subject to legal obligations.

Cookies:
We use cookies to enhance user experience and analyze platform usage. You can disable cookies in your browser settings.

Children's Privacy:
This platform is not intended for individuals under 18 years of age.

Contact:
Email: info@apprisalland.ca`,
      text2: `By using AppraisalLand.ca, you consent to this Privacy Policy. We may update this policy from time to time, and continued use of the platform constitutes acceptance of any changes.`,
    },
    {
      id: 2,
      title: "Our Terms",
      text1: `Effective Date: 10-April-2026

Acceptance of Terms:
By accessing or using AppraisalLand.ca, you agree to be bound by these Terms and Conditions. If you do not agree, you must not use the platform.

About the Platform:
AppraisalLand.ca is a digital platform connecting appraisers, appraisal companies, mortgage brokers, and mortgage brokerages. The platform facilitates communication and order management but does not provide appraisal or financial services.

Eligibility:
Users must be at least 18 years old and legally authorized to operate in their jurisdiction. Users must hold valid professional licenses where required.

User Accounts:
Users are responsible for maintaining accurate account information and keeping login credentials secure. All activity under your account is your responsibility.

Platform Role Disclaimer:
AppraisalLand.ca acts only as a technology platform and does not guarantee work, payments, or accuracy of services provided by users.

User Responsibilities:
Users agree to comply with all applicable laws, maintain proper licensing, provide accurate information, and avoid fraudulent or illegal activities.

Payments:
Any payments between users are independent agreements. AppraisalLand.ca may charge service or subscription fees but is not responsible for disputes between users.

Intellectual Property:
All content, branding, and software on the platform are owned by AppraisalLand.ca and may not be copied or reused without permission.`,
      text2: `Limitation of Liability:
AppraisalLand.ca is not liable for any loss of business, financial damages, service delays, or disputes between users. Use of the platform is at your own risk.

Indemnification:
You agree to indemnify and hold AppraisalLand.ca harmless from any claims arising from your use of the platform or violation of these terms.

Termination:
We reserve the right to suspend or terminate accounts for violations, fraudulent activity, or failure to maintain required licenses.

Governing Law:
These Terms are governed by the laws of the Province of Ontario, Canada.

Contact:
Email: info@apprisalland.ca

By continuing to use the platform, you agree to these Terms and Conditions.`,
    },
  ];

  const navigationList = [
    { id: 1, routeLink: "#", name: "Welcome Text" },
    { id: 2, routeLink: "#", name: "Our Terms" },
    { id: 3, routeLink: "#", name: "Conditions" },
    { id: 4, routeLink: "#", name: "Your Privacy" },
    { id: 5, routeLink: "#", name: "Informations We Collect" },
  ];

  return (
    <div className="row">
      <div className="col-lg-8 col-xl-8">
        <div className="terms_condition_grid">
          {termsContent.map((item) => (
            <div className="grids mb30" key={item.id}>
              <h4>{item.title}</h4>
              <p className="mb20">{item.text1}</p>
              <p>{item.text2}</p>
            </div>
          ))}
        </div>
      </div>
      {/* End .col */}

      {/* <div className="col-lg-4 col-xl-4">
        <div className="terms_condition_widget">
          <h4 className="title">Navigation</h4>
          <div className="widget_list">
            <ul className="list_details">
              {navigationList.map((list) => (
                <li key={list.id}>
                  <Link href={list.routeLink}>
                    <i className="fa fa-caret-right mr10"></i>
                    {list.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default TermsCondions;
