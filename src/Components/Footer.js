import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <div className="footer">
      <MDBFooter className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="4">
              <h5 className="title">Etherdash</h5>
              <p>
                An Ethereum dashboard that displays both network statistics and
                Financial data all in a single application.
              </p>
            </MDBCol>
            <MDBCol md="4">
              <h5 className="title">Useful Links</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="https://ethereum.org/en/">Ethereum.org</a>
                </li>
                <li className="list-unstyled">
                  <a href="https://eips.ethereum.org/all">Ethereum EIP's</a>
                </li>
                <li className="list-unstyled">
                  <a href="https://defipulse.com/">DeFi Pulse</a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol md="4">
              <h5 className="title">API's</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="#!">Coin Gecko API</a>
                </li>
                <li className="list-unstyled">
                  <a href="https://docs.aleth.io/api">Alethio API</a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Brad Behrens
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
}

export default Footer;