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
    }
  }

  .footer-content h6 {
    margin: 0;
    font-size: 1em;
    font-weight: bold;
    
    @media (max-width: 768px) {
      font-size: 12px; /* Font size 12px on mobile */
    }
  }

  .footer-content a {
    text-decoration: none;
    color: #ffffff;
    font-weight: 500;
    font-size: 0.67em;
    
    @media (max-width: 768px) {
      display: none; /* Hide all links on mobile */
    }
  }

  .footer-content a:hover {
    color: #ccc;
  }
`;
