import EmailSender from "@/component/EmailSender";
import React from "react";

const Home: React.FC = () => {
  const template = `
   <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <title>NAINER: projects that match your speciality profile</title>
    <style>
      * {
        font-family: 'Inter', sans-serif;
      }
      /* Styles for small screens */
      @media only screen and (max-width: 480px) {
        .card {
          width: 98% !important;
        }
      }
    </style>
  </head>
  <body
    style="
      background-color: #fff;
      color: #1e1f21;
      line-height: 25px;
      font-size: 14px;
      max-width: 800px;
      margin: 0 auto;
      padding-top: 10px;
      padding-bottom: 10px;
    "
  >
    <div
      style="
        background-color: #ffefdd;
        padding: 20px 0;
        border: 1px solid #ffb55e;
      "
    >
      <!-- Header -->
      <table style="width: 100%; border-collapse: collapse">
        <tr>
          <td style="padding: 20px; font-size: 24px">
            <a
              href="https://nainer.com/speciality-profile"
              style="display: block; text-align: left"
            >
              <img
                src="https://nainer.com/assets/images/nainerlogo.png"
                alt="logo"
                style="width: 50px; height: 23px"
              />
            </a>
          </td>
          <td style="padding: 20px; text-align: right; font-weight: 600">
            <a
              href="https://nainer.com/speciality-profile"
              style="text-decoration: none; color: #000"
              >Log In</a
            >
          </td>
        </tr>
      </table>

      <!-- Image -->
      <div style="display: grid; padding: 20px 0">
        <div style="display: grid">
          <div style="margin: auto">
            <img
              src="https://nainer.com/assets/images/nainerlogo.png"
              alt="logo"
              style="width: 250px; height: 115px; margin: auto"
            />
          </div>
        </div>
      </div>
      <div style="width: 90%; margin: auto; font-size: 16px; line-height: 22px">
        <div style="margin-top: 5px; font-weight: bold">
          Dear {{investorName}},
        </div>
        <div style="margin-top: 5px; font-weight: bold">
          {{projectMatchingCount}}+ high-potential projects on Nainer closely
          match the investment goals you're focused on
        </div>
        <div
          class="container"
          style="
            width: 100%;
            max-width: 100vw;
            margin: 0 auto;
            box-sizing: border-box;
            height: 100%;
            margin-top: -20px;
          "
        >
          {{#each cards}}
          <table
            style="
              width: 100%;
              border-collapse: collapse;
              box-sizing: border-box;
              margin-top: 40px;
            "
          >
            <!-- Title Section -->

<tr>
  <td align="center" background="https://nainer.com/assets/images/matchingbg.png"
      style="
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        width: 100%;
        min-height: 300px;
      ">
    <div style="
          min-height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px;">
      <table cellpadding="0" cellspacing="0" align="center" style="margin: 0 auto; width: 90%; max-width: 600px;">
        <tbody>
          <tr>
            <td align="center">
              <h2 style="
                    color: white;
                    font-weight: bold;
                    font-size: 2rem;
                    line-height: 2.5rem;
                    text-transform: capitalize;
                    margin: 0;
                    width: 100%;
                    word-wrap: break-word;
                    text-align: center;
                    white-space: normal;
                  ">
                {{title}}
              </h2>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </td>
</tr>


            <!-- Founder Section -->
            <tr>
              <td
                colspan="2"
                style="
                  text-align: center;
                  font-weight: bold;
                  font-size: 1.25rem;
                  color: #fd9b27;
                  text-transform: capitalize;
                  padding: 15px 0;
                  padding-top: 30px;
                "
              >
                Founder - {{name}}
              </td>
            </tr>

            <!-- Title -->
            <tr>
              <td colspan="2" style="text-align: center">
                <h2
                  style="
                    font-weight: bold;
                    font-size: 2.25rem;
                    line-height: 2.5rem;
                    text-transform: capitalize;
                    margin: 0;
                  "
                >
                  {{title}}
                </h2>
              </td>
            </tr>

            <!-- Description -->
            <tr>
              <td
                colspan="2"
                style="
                  padding: 16px;
                  text-align: justify;
                  font-size: 1.125rem;
                  line-height: 1.75rem;
                  font-weight: 400;
                "
              >
                {{description}}
              </td>
            </tr>

            <!-- Button -->
            <table role="presentation" align="center">
  <tr>
    <td>
      <a href="{{viewSplProfileMatchingUrl}}" style="text-decoration: none;">
        <div style="background-color: #fd9b27; padding: 10px 16px; border-radius: 5px; font-size: 1.125rem; color: white; text-align: center;">
          View Project
          <img src="http://nainer.com/assets/images/rightarrow.png" alt="" style="width: 18px; height: 8px;" />
        </div>
      </a>
    </td>
  </tr>
</table>
          </table>

          <!-- Add HR Line Except for Last Item -->
          {{#unless @last}}
          <hr style="margin: 50px auto; color: #000000" />
          {{/unless}} {{/each}}
        </div>
        <div style="margin-top: 25px; font-weight: bold; font-size: 16px">
          Feel free to explore and invest in projects that interest you.
        </div>
        <div style="margin-top: 25px; font-weight: bold; font-size: 16px">
          Warm Regards,<br />Team Nainer
        </div>

        <div style="border: 1px solid #ffffff; margin: 40px 0"></div>

        <table
          role="presentation"
          style="margin-top: 50px; margin-left: auto; margin-right: auto"
          align="center"
        >
          <tr>
            <td style="padding: 0 10px">
              <a
                href="https://twitter.com/nainercom"
                target="_blank"
                rel="noreferrer"
                style="text-decoration: none"
              >
                <img
                  src="http://nainer.com/assets/images/socialIcon/twitter.png"
                  alt="Twitter"
                  style="width: 30px; height: 30px; display: block"
                />
              </a>
            </td>
            <td style="padding: 0 10px">
              <a
                href="https://www.instagram.com/nainerllc/"
                target="_blank"
                rel="noreferrer"
                style="text-decoration: none"
              >
                <img
                  src="http://nainer.com/assets/images/socialIcon/instagram.png"
                  alt="Instagram"
                  style="width: 30px; height: 30px; display: block"
                />
              </a>
            </td>
            <td style="padding: 0 10px">
              <a
                href="https://www.facebook.com/profile.php?id=100063497502322"
                target="_blank"
                rel="noreferrer"
                style="text-decoration: none"
              >
                <img
                  src="http://nainer.com/assets/images/socialIcon/facebook.png"
                  alt="Facebook"
                  style="width: 30px; height: 30px; display: block"
                />
              </a>
            </td>
            <td style="padding: 0 10px">
              <a
                href="https://www.linkedin.com/company/nainercom/"
                target="_blank"
                rel="noreferrer"
                style="text-decoration: none"
              >
                <img
                  src="http://nainer.com/assets/images/socialIcon/linkdin.png"
                  alt="LinkedIn"
                  style="width: 31px; height: 32px; display: block"
                />
              </a>
            </td>
          </tr>
        </table>

        <div
          style="
            text-align: center;
            margin-bottom: 5px;
            margin-top: 20px;
            font-size: 15px;
            line-height: 28px;
            font-weight: 600;
          "
        >
          <a
            href="https://www.nainer.com/account/contactus"
            target="_blank"
            rel="noreferrer"
            style="text-decoration: none; color: #232323"
            ><span>Contact us</span></a
          >
          <span> | </span>
          <a
            href="https://www.nainer.com/home/termsofuse"
            target="_blank"
            rel="noreferrer"
            style="text-decoration: none; color: #232323"
            ><span> Terms of use </span></a
          >
          <span> | </span>
          <a
            href="https://www.nainer.com/home/privacypolicy"
            target="_blank"
            rel="noreferrer"
            style="text-decoration: none; color: #232323"
          >
            <span>Privacy Policy</span></a
          >
        </div>

        <div
          style="
            text-align: center;
            margin-bottom: 5px;
            margin-top: 25px;
            font-size: 1rem;
            line-height: 1.5rem;
            font-weight: 400;
          "
        >
          PO Box 241102, Anchorage, AK 99524.
        </div>

        <table style="width: 100%; border-collapse: collapse">
          <tr>
            <td style="padding-top: 20px; text-align: center">
              <img
                src="https://nainer.com/assets/images/logo.png"
                alt="logo"
                style="width: 116px; height: 53px"
              />
            </td>
          </tr>
          <tr>
            <td
              style="
                text-align: center;
                padding-top: 20px;
                padding-bottom: 20px;
              "
            >
              <a href="mailto:info@nainer.com" style="font-size: 12px; line-height: 13px; color: #fd9b27">info@nainer.com</a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </body>
</html>
  `;

  const data = {
    investorName: "Faizan Gul",
    projectMatchingCount: 534,
    nainerLogoImageUrl: "http://nainer.com/assets/images/nainerlogo.png",
    twitterIconUrl: "http://nainer.com/assets/images/socialIcon/twitter.png",
    instagramIconUrl:
      "http://nainer.com/assets/images/socialIcon/instagram.png",
    facebookIconUrl: "http://nainer.com/assets/images/socialIcon/facebook.png",
    linkedinIconUrl: "http://nainer.com/assets/images/socialIcon/linkdin.png",
    twitterUrl: "https://twitter.com/nainercom",
    instagramUrl: "https://www.instagram.com/nainerllc/",
    facebookUrl: "https://www.facebook.com/profile.php?id=100063497502322",
    linkedinUrl: "https://www.linkedin.com/company/nainercom/",
    contactUsUrl: "https://www.nainer.com/account/contactus",
    termsOfUseUrl: "https://www.nainer.com/home/termsofuse",
    privacyPolicyUrl: "https://www.nainer.com/home/privacypolicy",
    rightArrowIcon: "http://nainer.com/assets/images/rightarrow.png",
    cards: [
      {
        _id: "6484904f811240db1ba6e0cc",
        title: "video gaming sdfsdfsdfsfsdfsdfsddfsdfsdfdsfsdfsdfsfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsf sssdasdasdasdasdasdasdasdadasdassdasdadasdadasdassdassdassdassdasdasdasdassdassdasdasdadassdasdassdasdassdasdasdasdasdasdasdasdasdas",
        description:
          "The business is about opening up a video gaming centre in the city of Masvingo in Zimbabwe . The shop will act as an entertainment center in the city and will be the first shop which offers such a service",
        matchingPercentage: 100,
        userId: "6484904f811240db1ba6e0cc",
        viewProjectUrl:
          "https://nainer.com/founder/projects/6484904f811240db1ba6e0cc",
        name: "Vikas",
      },
      {
        _id: "64807b9861110543f429d1c3",
        title: "Smart Hotel Genius",
        description:
          "We are currently developing a property management system that will be the first cloud system in the Balkan region.\nAs a team of 12 people we have been working really hard on this project.\nWe need an investment to make the product even better.",
        matchingPercentage: 8,
        userId: "64807b9861110543f429d1c3",
        viewProjectUrl:
          "https://nainer.com/founder/projects/64807b9861110543f429d1c3",
        name: "Uttam",
      },
      {
        _id: "6484904f811240db1ba6e0cc",
        title: "video gaming",
        description:
          "The business is about opening up a video gaming centre in the city of Masvingo in Zimbabwe . The shop will act as an entertainment center in the city and will be the first shop which offers such a service",
        matchingPercentage: 8,
        userId: "6484904f811240db1ba6e0cc",
        viewProjectUrl:
          "https://nainer.com/founder/projects/6484904f811240db1ba6e0cc",
        name: "Ram",
      },
      {
        _id: "64807b9861110543f429d1c3",
        title: "Smart Hotel Genius",
        description:
          "We are currently developing a property management system that will be the first cloud system in the Balkan region.\nAs a team of 12 people we have been working really hard on this project.\nWe need an investment to make the product even better.",
        matchingPercentage: 8,
        userId: "64807b9861110543f429d1c3",
        viewProjectUrl:
          "https://nainer.com/founder/projects/64807b9861110543f429d1c3",
        name: "Vinay",
      },
    ],
    url: "https://nainer.com/speciality-profile",
    imageLink: "https://nainer.com/assets/images/logo.png",
  };
  return (
    <div>
      <h1>Email Sender Demo</h1>
      <EmailSender
        template={template}
        data={data}
        subject="NAINER: Projects that match your speciality profile"
        recipientEmail="essitco.react@gmail.com"
      />
    </div>
  );
};

export default Home;
