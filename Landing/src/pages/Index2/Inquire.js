import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { useForm } from "react-hook-form";
import FadeIn from "react-fade-in";

import SectionTitle from "../../components/common/section-title";
import map from "../../assets/images/features/map.png";

function Inquire() {
  const { register, handleSubmit, formState, watch } = useForm();
  const { dirtyFields } = formState;
  const onSubmit = (data) => console.log(data);
  console.log("errors");

  const websiteGoal =
    dirtyFields["Website goal: other"] || (dirtyFields["Website goal"] && watch()["Website goal"] !== "Other");
  const businessType =
    (watch()["Business type"] === "Real Estate" && dirtyFields["Property displaying portfolio"]) ||
    (watch()["Business type"] === "Other" && dirtyFields["Business type: other"]) ||
    watch()["Business type"] === "Personal";

  const anythingElse =
    watch()["Additional info"] == "No" ||
    (watch("Additional info") === "Yes" && dirtyFields["Additional info: content"]);

  useEffect(() => {
    console.log(watch());
  }, [formState]);

  console.log(dirtyFields);

  return (
    <FadeIn>
      <section className="section row justify-content-center" id="contact">
        <Container className="col-7">
          <SectionTitle
            title="Get In Touch"
            subtitle="Business Enquiry"
            desc="Thank you for considering EstateMate Services for your front-end
            project. Please answer our questions so we may better assist you."
          />

          <Row className="row mt-5 pt-2 justify-content-center">
            <Col lg={7}>
              <div className="custom-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <h6>Please provide contact information we can reach you at.</h6>
                  <select {...register("Title", { required: true })} className="form-control">
                    <option></option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                    <option value="Dr">Dr</option>
                  </select>
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
                    placeholder="Name of business (optional)"
                    className="form-control mt-3"
                    {...register("Name of business", {
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
                  <SectionTitle />
                  {dirtyFields["Email"] &&
                    dirtyFields["First name"] &&
                    dirtyFields["Last name"] &&
                    dirtyFields["Mobile number"] &&
                    dirtyFields["Title"] && (
                      <FadeIn>
                        <h6 className="mt-3">What is the goal for your website?</h6>
                        <select {...register("Website goal", { required: true })} className="form-control mt-3">
                          <option></option>
                          <option value="Client communication">Client communication</option>
                          <option value="Advertising and/or establish brand">Advertising and/or establish brand</option>
                          <option value="Sales">Sales</option>
                          <option value="Other">Other</option>
                        </select>

                        {watch()["Website goal"] === "Other" && (
                          <FadeIn>
                            <input
                              type="text"
                              placeholder="What is the goal of your website?"
                              className="form-control mt-3"
                              {...register("Website goal: other", {
                                maxLength: 100,
                              })}
                            />
                          </FadeIn>
                        )}
                        <SectionTitle />
                        {websiteGoal && (
                          <FadeIn>
                            <h6 className="mt-3">What type of business are you developing your site for?</h6>
                            <select
                              {...register("Business type", {
                                required: true,
                              })}
                              className="form-control mt-3"
                            >
                              <option></option>
                              <option value="Real Estate">Real Estate</option>
                              <option value="Personal">Personal</option>
                              <option value="Other">Other</option>
                            </select>

                            {watch()["Business type"] === "Other" && (
                              <FadeIn>
                                <input
                                  type="text"
                                  placeholder="What type of business is your website for?"
                                  className="form-control mt-3"
                                  {...register("Business type: other", {
                                    maxLength: 100,
                                  })}
                                />
                              </FadeIn>
                            )}
                            {watch()["Business type"] === "Real Estate" && (
                              <FadeIn>
                                <h6 className="mt-3 mb-3">
                                  Would you like a portfolio for displaying your properties?
                                </h6>
                                <div className="d-flex">
                                  <div className="d-flex align-items-baseline">
                                    <p className="mr-1">Yes</p>
                                    <input
                                      {...register("Property displaying portfolio", {
                                        required: true,
                                      })}
                                      type="radio"
                                      value="Yes"
                                      className="mr-5"
                                    />
                                  </div>
                                  <div className="d-flex align-items-baseline">
                                    <p className="mr-1">No</p>
                                    <input
                                      {...register("Property displaying portfolio", {
                                        required: true,
                                      })}
                                      type="radio"
                                      value="No"
                                    />
                                  </div>
                                </div>
                              </FadeIn>
                            )}
                            <SectionTitle />
                            {businessType && (
                              <FadeIn>
                                <h6 className="mt-3">I'm looking for a website that is...</h6>

                                <select
                                  {...register("Website type", {
                                    required: true,
                                  })}
                                  className="form-control mt-3"
                                >
                                  <option></option>
                                  <option value="Singlepage">Singlepage</option>
                                  <option value="Multipage">Multipage</option>
                                </select>

                                <SectionTitle />
                                {dirtyFields["Website type"] && (
                                  <FadeIn>
                                    <h6 className="mt-3 mb-3">
                                      Would you like your website to also be formatted for mobile?
                                    </h6>
                                    <div className="d-flex">
                                      <div className="d-flex align-items-baseline">
                                        <p className="mr-1">Yes</p>
                                        <input
                                          {...register("Mobile website", {
                                            required: true,
                                          })}
                                          type="radio"
                                          value="Yes"
                                          className="mr-5"
                                        />
                                      </div>
                                      <div className="d-flex align-items-baseline">
                                        <p className="mr-1">No</p>
                                        <input
                                          {...register("Mobile website", {
                                            required: true,
                                          })}
                                          type="radio"
                                          value="No"
                                        />
                                      </div>
                                    </div>
                                    <SectionTitle />

                                    {dirtyFields["Mobile website"] && (
                                      <FadeIn>
                                        <h6 className="mt-3">The websites I'd most like to emulate are...</h6>
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
                                        <SectionTitle />
                                        {dirtyFields["Emulated website 1"] &&
                                          dirtyFields["Emulated website 2"] &&
                                          dirtyFields["Emulated website 3"] && (
                                            <FadeIn>
                                              <h6 className="mt-3">Some sections I'd like my website to have are...</h6>
                                              <p className="mt-3 mb-2">
                                                <b>NavBar</b>
                                              </p>

                                              <div className="d-flex">
                                                <div className="d-flex align-items-baseline">
                                                  <p className="mr-1">Yes</p>
                                                  <input
                                                    {...register("Website section: Navbar")}
                                                    type="radio"
                                                    value="Yes"
                                                    className="mr-5"
                                                  />
                                                </div>
                                                <div className="d-flex align-items-baseline">
                                                  <p className="mr-1">No</p>
                                                  <input
                                                    {...register("Website section: Navbar")}
                                                    type="radio"
                                                    value="No"
                                                  />
                                                </div>
                                              </div>
                                              <p className="mt-3 mb-2">
                                                <b>Button Links</b>
                                              </p>

                                              <div className="d-flex">
                                                <div className="d-flex align-items-baseline">
                                                  <p className="mr-1">Yes</p>
                                                  <input
                                                    {...register("Website section: Button links")}
                                                    type="radio"
                                                    value="Yes"
                                                    className="mr-5"
                                                  />
                                                </div>

                                                <div className="d-flex align-items-baseline">
                                                  <p className="mr-1">No</p>
                                                  <input
                                                    {...register("Website section: Button links")}
                                                    type="radio"
                                                    value="No"
                                                  />
                                                </div>
                                              </div>
                                              <p className="mt-3 mb-2">
                                                <b>Picture Slides</b>
                                              </p>
                                              <div className="d-flex">
                                                <div className="d-flex align-items-baseline">
                                                  <p className="mr-1">Yes</p>
                                                  <input
                                                    {...register("Website section: Picture slides")}
                                                    type="radio"
                                                    value="Yes"
                                                    className="mr-5"
                                                  />
                                                </div>

                                                <div className="d-flex align-items-baseline">
                                                  <p className="mr-1">No</p>
                                                  <input
                                                    {...register("Website section: Picture slides")}
                                                    type="radio"
                                                    value="No"
                                                  />
                                                </div>
                                              </div>
                                              <p className="mt-3 mb-2">
                                                <b>Modal (Popup Window)</b>
                                              </p>
                                              <div className="d-flex">
                                                <div className="d-flex align-items-baseline">
                                                  <p className="mr-1">Yes</p>
                                                  <input
                                                    {...register("Website section: Modal (Popup window)")}
                                                    type="radio"
                                                    value="Yes"
                                                    className="mr-5"
                                                  />
                                                </div>
                                                <div className="d-flex align-items-baseline">
                                                  <p className="mr-1">No</p>
                                                  <input
                                                    {...register("Website section: Modal (Popup window)")}
                                                    type="radio"
                                                    value="No"
                                                  />
                                                </div>
                                              </div>
                                              <p className="mt-3 mb-2">
                                                <b>Dropdown Menu</b>
                                              </p>
                                              <div className="d-flex">
                                                <div className="d-flex align-items-baseline">
                                                  <p className="mr-1">Yes</p>
                                                  <input
                                                    {...register("Website section: Dropdown menu")}
                                                    type="radio"
                                                    value="Yes"
                                                    className="mr-5"
                                                  />
                                                </div>
                                                <div className="d-flex align-items-baseline">
                                                  <p className="mr-1">No</p>
                                                  <input
                                                    {...register("Website section: Dropdown menu")}
                                                    type="radio"
                                                    value="No"
                                                  />
                                                </div>
                                              </div>

                                              <p className="mt-3 mb-2">
                                                <b>Other</b>
                                              </p>
                                              <input
                                                type="text"
                                                placeholder="Other section..."
                                                className="form-control mt-3"
                                                {...register("Website section: Other", {
                                                  maxLength: 100,
                                                })}
                                              />
                                              <SectionTitle />
                                              {dirtyFields["Website section: Navbar"] &&
                                                dirtyFields["Website section: Button links"] &&
                                                dirtyFields["Website section: Picture slides"] &&
                                                dirtyFields["Website section: Modal (Popup window)"] &&
                                                dirtyFields["Website section: Dropdown menu"] && (
                                                  <FadeIn>
                                                    <h6 className="mt-3">
                                                      Is there anything else you'd like us to know?
                                                    </h6>
                                                    <div className="d-flex">
                                                      <div className="d-flex align-items-baseline">
                                                        <p className="mr-1">Yes</p>
                                                        <input
                                                          {...register("Additional info", {
                                                            required: true,
                                                          })}
                                                          type="radio"
                                                          value="Yes"
                                                          className="mr-5"
                                                        />
                                                      </div>
                                                      <div className="d-flex align-items-baseline">
                                                        <p className="mr-1">No</p>
                                                        <input
                                                          {...register("Additional info", {
                                                            required: true,
                                                          })}
                                                          type="radio"
                                                          value="No"
                                                        />
                                                      </div>
                                                    </div>
                                                    {watch()["Additional info"] === "Yes" && (
                                                      <FadeIn>
                                                        <textarea
                                                          placeholder="Additional information"
                                                          rows="4"
                                                          className="form-control mt-3"
                                                          {...register("Additional info: content", {
                                                            required: true,
                                                          })}
                                                        />
                                                      </FadeIn>
                                                    )}
                                                    <SectionTitle />
                                                    {anythingElse && (
                                                      <FadeIn>
                                                        <h6 className="mt-3">
                                                          <b>I understand that the</b> <u>minimum</u> cost for our web
                                                          dev team is $<u>6,000</u> and can cost more with added
                                                          features.
                                                        </h6>
                                                        <div className="d-flex">
                                                          <div className="d-flex align-items-baseline">
                                                            <p className="mr-1">Yes</p>
                                                            <input
                                                              {...register("Price understanding", {
                                                                required: true,
                                                              })}
                                                              type="radio"
                                                              value="Yes"
                                                              className="mr-5"
                                                            />
                                                          </div>
                                                          <div className="d-flex align-items-baseline">
                                                            <p className="mr-1">No</p>
                                                            <input
                                                              {...register("Price understanding", {
                                                                required: true,
                                                              })}
                                                              type="radio"
                                                              value="No"
                                                            />
                                                          </div>
                                                        </div>

                                                        <SectionTitle />

                                                        {watch()["Price understanding"] === "No" && (
                                                          <FadeIn>
                                                            <p className="mt-3">
                                                              No worries. We'll keep your information on hand in case
                                                              you change your mind.
                                                            </p>

                                                            <input
                                                              className="mt-3"
                                                              type="submit"
                                                              className="submitBnt btn btn-primary mt-3"
                                                            />
                                                          </FadeIn>
                                                        )}

                                                        {watch()["Price understanding"] === "Yes" && (
                                                          <FadeIn>
                                                            <h6 className="mt-3">
                                                              Excellent. Pick three days that can work for a video
                                                              consultation.
                                                            </h6>
                                                            <input
                                                              type="datetime-local"
                                                              className="form-control mt-3"
                                                              placeholder="datetime-local"
                                                              {...register("datetime-local 1")}
                                                            />
                                                            <input
                                                              type="datetime-local"
                                                              className="form-control mt-3"
                                                              placeholder="datetime-local"
                                                              {...register("datetime-local 2")}
                                                            />
                                                            <input
                                                              type="datetime-local"
                                                              className="form-control mt-3"
                                                              placeholder="datetime-local"
                                                              {...register("datetime-local 3")}
                                                            />
                                                            <SectionTitle />

                                                            {dirtyFields["datetime-local 1"] &&
                                                              dirtyFields["datetime-local 2"] &&
                                                              dirtyFields["datetime-local 3"] && (
                                                                <FadeIn>
                                                                  <div className="bg-light ml-2 mr-2 rounded">
                                                                    <h5 className="pt-3 d-flex justify-content-center">
                                                                      Summary:
                                                                    </h5>
                                                                    <div className="pl-5">
                                                                      <h6>Name:</h6>
                                                                      <p>
                                                                        {watch()["Title"]} {watch()["First name"]}{" "}
                                                                        {watch()["Last name"]}
                                                                      </p>

                                                                      <h6 className="mt-3">Phone number:</h6>
                                                                      <p> {watch()["Mobile number"]}</p>
                                                                      <h6 className="mt-3">Email:</h6>
                                                                      <p> {watch()["Email"]}</p>
                                                                      <h6 className="mt-3">Name of Business:</h6>
                                                                      <p> {watch()["Name of business"]}</p>
                                                                      <SectionTitle />
                                                                      <h6 className="mt-3">Type of Project:</h6>
                                                                      <p>
                                                                        {watch()["Website goal"] !== "Other"
                                                                          ? watch()["Website goal"]
                                                                          : watch()["Website goal: other"]}
                                                                      </p>
                                                                      <h6 className="mt-3">Page type:</h6>
                                                                      <p> {watch()["Website type"]}</p>
                                                                      <SectionTitle />
                                                                      <h6 className="mt-3">Web inspirations URLs:</h6>
                                                                      <p className="mt-3">
                                                                        {watch()["Emulated website 1"]}
                                                                      </p>
                                                                      <p className="mt-3">
                                                                        {watch()["Emulated website 2"]}
                                                                      </p>
                                                                      <p className="mt-3">
                                                                        {watch()["Emulated website 3"]}
                                                                      </p>
                                                                      <SectionTitle />
                                                                      <h6 className="mt-3">Website features: </h6>
                                                                      <p>
                                                                        ∙
                                                                        {watch()["Website section: Button links"] ===
                                                                          "Yes" && " Button links ∙"}
                                                                        {watch()["Website section: Dropdown menu"] ===
                                                                          "Yes" && " Dropdown menu ∙"}
                                                                        {watch()[
                                                                          "Website section: Modal (Popup window)"
                                                                        ] === "Yes" && " Modal ∙"}
                                                                        {watch()["Website section: Navbar"] === "Yes" &&
                                                                          " Navbar ∙"}
                                                                        {watch()["Website section: Picture slides"] ===
                                                                          "Yes" && " Picture slides ∙"}
                                                                        {watch()["Website section: Other"] !== "" &&
                                                                          " " +
                                                                            watch()["Website section: Other"] +
                                                                            " ∙"}
                                                                      </p>
                                                                    </div>
                                                                    <div className="d-flex justify-content-center">
                                                                      <input
                                                                        type="submit"
                                                                        className="submitBnt btn btn-primary mt-4 mb-5"
                                                                      />
                                                                    </div>
                                                                  </div>
                                                                </FadeIn>
                                                              )}
                                                          </FadeIn>
                                                        )}
                                                      </FadeIn>
                                                    )}
                                                  </FadeIn>
                                                )}
                                            </FadeIn>
                                          )}
                                      </FadeIn>
                                    )}
                                  </FadeIn>
                                )}
                              </FadeIn>
                            )}
                          </FadeIn>
                        )}
                      </FadeIn>
                    )}
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </FadeIn>
  );
}

export default Inquire;
