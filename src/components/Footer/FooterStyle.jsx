import styled from "styled-components";
export const FooterContainer = styled.div`
  .footer-content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px; /* Adjust padding as needed */
    color: #ffffff;
    text-align: center;
    width: 100%;
    gap: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;

      /* Hide LinkedIn and Dribbble links on mobile */
      a[href*="linkedin"],
      a[href*="dribbble"] {
        display: none;
      }
    }
  }

  .footer-content h6 {
    margin: 0;
    font-size: 1em;
    font-weight: bold;
  }

  .footer-content a {
    text-decoration: none;
    color: #ffffff;
    font-weight: 500;
    font-size: 0.67em;
  }

  .footer-content a:hover {
    color: #ccc;
  }
`;
