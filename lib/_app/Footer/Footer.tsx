import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";

export const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#142138e0", color: "white" }}>
      <div className="footer-container">
        <div className="footer-left">
          <Image
            width={50}
            height={50}
            alt="Hollowverse"
            src="/images/letter-logo.png"
          />
        </div>
        <div className="footer-center">
          <p>
            Hollowverse is about the important <br />
            people and their beliefs.
          </p>
        </div>
        <div className="footer-right">
          <a
            style={{ color: "white" }}
            href="mailto:hollowverse@hollowverse.com"
          >
            <div className="wrapper">
              Email us <EmailIcon sx={{ padding: "0 5px 0 5px" }} />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};
