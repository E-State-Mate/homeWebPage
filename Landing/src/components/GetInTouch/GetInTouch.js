import React, { Component } from "react";
import { Container, Row, Col, Media, FormGroup } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

import { useForm } from "react-hook-form";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Images
import map from "../../assets/images/features/map.png";

function GetInTouch() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <>
      <section className="section" id="contact">
        <Container>
          <SectionTitle
            title="Get In Touch"
            subtitle="Contact"
            desc="Porttitor dolor donec pulvinar tortor nisi quis dapibus tortor commodo sed Pellentesque hendrerit pellentesque libero nec sollicitudin."
          />
          <Row className="mt-5 pt-2">
            <Col lg={5}>
              <div className="contact-info">
                <div
                  style={{
                    backgroundImage: `url(${map})`,
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <Media>
                    <i className="mdi mdi-map-marker text-primary h4"></i>
                    <Media body className=" ml-4">
                      <p className="text-muted">
                        2276 Lynn Ogden Lane Beaumont
                        <br />
                        Lodgeville Road TX 77701
                      </p>
                    </Media>
                  </Media>

                  <Media className="mt-4">
                    <i className="mdi mdi-phone text-primary h4"></i>
                    <Media body className="ml-4">
                      <p className="text-muted">
                        Phone: +71 612-234-4023
                        <br />
                        Fax: +954-627-9727
                      </p>
                    </Media>
                  </Media>

                  <Media className="media mt-4">
                    <i className="mdi mdi-calendar-clock text-primary h4"></i>
                    <Media body className="ml-4">
                      <p className="text-muted">
                        Monday-friday: 9.00-19.00
                        <br />
                        Saturday-Sunday: Holiday
                      </p>
                    </Media>
                  </Media>

                  <Media className="media mt-4">
                    <i className="mdi mdi-email text-primary h4"></i>
                    <Media body className="ml-4">
                      <p className="text-muted">Email: FredVWeaver@rhyta.com</p>
                    </Media>
                  </Media>
                </div>
              </div>
            </Col>

            <Col lg={7}>
              <div className="custom-form">
                <div id="message"></div>
                <AvForm name="contact-form" id="contact-form">
                  <Row>
                    <Col lg={12}>
                      <FormGroup className="mt-3">
                        <AvField
                          name="name"
                          id="name"
                          type="text"
                          className="form-control"
                          placeholder="Your name"
                          errorMessage="Enter Your Name"
                          validate={{ required: { value: true } }}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={6}>
                      <FormGroup className="mt-3">
                        <AvField
                          name="email"
                          id="email"
                          type="email"
                          className="form-control"
                          placeholder="Your email"
                          errorMessage="Enter Your email"
                          validate={{
                            required: { value: true },
                            email: { value: true },
                          }}
                        />
                      </FormGroup>
                    </Col>

                    <Col lg={6}>
                      <FormGroup className="mt-3">
                        <AvField
                          name="number"
                          id="number"
                          type="number"
                          className="form-control"
                          placeholder="Phone number"
                          errorMessage="Enter Your Phone number"
                          validate={{
                            required: { value: true },
                          }}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={12}>
                      <FormGroup className="mt-3">
                        <textarea
                          name="comments"
                          id="comments"
                          rows="5"
                          className="form-control"
                          placeholder="Your message"
                        ></textarea>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12}>
                      <div className="mt-3">
                        <input
                          type="submit"
                          id="submit"
                          name="send"
                          className="submitBnt btn btn-primary"
                          value="Send Message"
                        />
                        <div id="simple-msg"></div>
                      </div>
                    </Col>
                  </Row>
                </AvForm>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/*  */}

      {/*  */}
      <section className="section" id="contact">
        <Container>
          <SectionTitle
            title="react-hook-form"
            subtitle="Dynamic Form"
            desc="Check out this super cool dynamic form."
          />

          <p>
            Thank you for considering EstateMate Services for your front-end
            project. Please answer our questions so we may better assist you.
          </p>
          <p>CONTINUE BUTTON</p>
          <h5>CAPTCHA TEST</h5>
          <p>Please provide contact information we can reach you at.</p>
          <Row className="mt-5 pt-2">
            <Col lg={7}>
              <div className="custom-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    type="text"
                    placeholder="First name"
                    className="form-control mt-3"
                    {...register("First name", {
                      required: true,
                      maxLength: 80,
                    })}
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="form-control mt-3"
                    {...register("Last name", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    className="form-control mt-3"
                    {...register("Email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                  <input
                    type="tel"
                    placeholder="Mobile number"
                    className="form-control mt-3"
                    {...register("Mobile number", {
                      required: true,
                      minLength: 6,
                      maxLength: 12,
                    })}
                  />
                  <select
                    {...register("Title", { required: true })}
                    className="form-control mt-3"
                  >
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                    <option value="Dr">Dr</option>
                  </select>

                  {/* <input
                    {...register("Developer", { required: true })}
                    type="radio"
                    value="Yes"
                    className="form-control mt-3"
                  />
                  <input
                    {...register("Developer", { required: true })}
                    type="radio"
                    value="No"
                    className="form-control mt-3"
                  /> */}

                  <input
                    type="text"
                    placeholder="Name of business (optional)"
                    className="form-control mt-3"
                    {...register("Name of business", {
                      maxLength: 100,
                    })}
                  />
                  <p>What is the goal for your website?</p>
                  <select
                    {...register("Website goal", { required: true })}
                    className="form-control mt-3"
                  >
                    <option value="Client communication">
                      Client communication
                    </option>
                    <option value="Advertising and/or establish brand">
                      Advertising and/or establish brand
                    </option>
                    <option value="Sales">Sales</option>
                    <option value="Other">Other</option>
                  </select>
                  <input
                    type="text"
                    placeholder="If other, please list (optional)"
                    className="form-control mt-3"
                    {...register("Website goal: other", {
                      maxLength: 100,
                    })}
                  />

                  <p>What type of business are you developing your site for?</p>
                  <select
                    {...register("Business type", { required: true })}
                    className="form-control mt-3"
                  >
                    <option value="Real Estate">Real Estate</option>
                    <option value="Personal">Personal</option>
                    <option value="Other">Other</option>
                  </select>
                  <input
                    type="text"
                    placeholder="What type of business is your website for? (if other)"
                    className="form-control mt-3"
                    {...register("Website goal: other", {
                      maxLength: 100,
                    })}
                  />
                  <p>
                    Would you like a portfolio for displaying your properties?
                    (if Real Estate)
                  </p>
                  <p>Yes</p>
                  <input
                    {...register("Property displaying portfolio", {
                      required: true,
                    })}
                    type="radio"
                    value="Yes"
                  />
                  <p>No</p>
                  <input
                    {...register("Property displaying portfolio", {
                      required: true,
                    })}
                    type="radio"
                    value="No"
                  />

                  <p>I'm looking for a website that is...</p>

                  <select
                    {...register("Website type", { required: true })}
                    className="form-control mt-3"
                  >
                    <option value="Singlepage">Singlepage</option>
                    <option value="Multipage">Multipage</option>
                  </select>

                  <p>
                    Would you like your website to also be formatted for mobile?
                  </p>

                  <p>Yes</p>
                  <input
                    {...register("Mobile website", {
                      required: true,
                    })}
                    type="radio"
                    value="Yes"
                  />
                  <p>No</p>
                  <input
                    {...register("Mobile website", {
                      required: true,
                    })}
                    type="radio"
                    value="No"
                  />

                  <p>The websites I'd most like to emulate are...</p>
                  <input
                    type="text"
                    placeholder="URL"
                    className="form-control mt-3"
                    {...register("Emulated website 1", {
                      maxLength: 100,
                    })}
                  />
                  <input
                    type="text"
                    placeholder="URL"
                    className="form-control mt-3"
                    {...register("Emulated website 2", {
                      maxLength: 100,
                    })}
                  />
                  <input
                    type="text"
                    placeholder="URL"
                    className="form-control mt-3"
                    {...register("Emulated website 3", {
                      maxLength: 100,
                    })}
                  />

                  <p>Some sections I'd like my website to have are...</p>
                  <p>NavBar</p>
                  <p>Yes</p>
                  <input
                    {...register("Website section: Navbar")}
                    type="radio"
                    value="Yes"
                  />
                  <p>No</p>
                  <input
                    {...register("Website section: Navbar")}
                    type="radio"
                    value="No"
                  />
                  <p>Button Links</p>
                  <p>Yes</p>
                  <input
                    {...register("Website section: Button links")}
                    type="radio"
                    value="Yes"
                  />
                  <p>No</p>
                  <input
                    {...register("Website section: Button links")}
                    type="radio"
                    value="No"
                  />
                  <p>Picture Slides</p>
                  <p>Yes</p>
                  <input
                    {...register("Website section: Picture slides")}
                    type="radio"
                    value="Yes"
                  />
                  <p>No</p>
                  <input
                    {...register("Website section: Picture slides")}
                    type="radio"
                    value="No"
                  />
                  <p>Modal (Popup Window)</p>
                  <p>Yes</p>
                  <input
                    {...register("Website section: Modal (Popup window)")}
                    type="radio"
                    value="Yes"
                  />
                  <p>No</p>
                  <input
                    {...register("Website section: Modal (Popup window)")}
                    type="radio"
                    value="No"
                  />
                  <p>Dropdown Menu</p>
                  <p>Yes</p>
                  <input
                    {...register("Website section: Dropdown menu")}
                    type="radio"
                    value="Yes"
                  />
                  <p>No</p>
                  <input
                    {...register("Website section: Dropdown menu")}
                    type="radio"
                    value="No"
                  />
                  <p>Other</p>
                  <input
                    type="text"
                    placeholder="Other section..."
                    className="form-control mt-3"
                    {...register("Website section: Other", {
                      maxLength: 100,
                    })}
                  />

                  <p>Is there anything else you'd like us to know?</p>
                  <p>Yes</p>
                  <input
                    {...register("Additional info", {
                      required: true,
                    })}
                    type="radio"
                    value="Yes"
                  />
                  <p>No</p>
                  <input
                    {...register("Additional info", {
                      required: true,
                    })}
                    type="radio"
                    value="No"
                  />
                  {/* <input
                    type="text"
                    placeholder="Additional information (if yes)"
                    className="form-control mt-3"
                    {...register("Additional info: content", {
                      maxLength: 100,
                    })}
                  /> */}

                  <textarea
                    placeholder="Additional information (if yes)"
                    className="form-control mt-3"
                    {...register("Additional info: content", {
                      required: true,
                    })}
                  />

                  <input
                    type="submit"
                    className="submitBnt btn btn-primary mt-3"
                  />
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default GetInTouch;
