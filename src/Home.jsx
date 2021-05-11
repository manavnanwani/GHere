import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Home = ({ isAuthenticated }) => {
  return (
    <div>
      <div className="d-flex align-items-center home-page">
        <div className="container-fluid cont-home">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="row">
                <div className="main col-md-5 pt-5 pt-lg-0 order-2 order-md-1 d-flex justify-content-center flex-column">
                  <h3 className="GH">
                    Welcome to the <br />
                    <span className="secondary"> HOME </span>
                    of
                    <span className="secondary"> GAMBLING!!</span>
                  </h3>
                  <p>
                    Anonymouse gambling experience. The easiest way to bet with
                    Bitcoin, Dogecoin and other crypto-coins.
                    <br />
                    Start betting in 5 minutes!
                  </p>
                  {isAuthenticated ? (
                    ""
                  ) : (
                    <Link className="go-to" to="/signup">
                      <Button
                        variant="contained"
                        color="primary"
                        className="get-started"
                      >
                        SIGN UP FOR FREE
                      </Button>
                    </Link>
                  )}
                </div>
                <div className="col-md-7 pt-5 pt-lg-0 order-1 order-md-2 d-flex justify-content-center">
                  {/* <img src="https://assets.coingecko.com/coins/images/738/large/eos-eos-logo.png?1547034481" className="img-fluid animated" alt="" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Home);
