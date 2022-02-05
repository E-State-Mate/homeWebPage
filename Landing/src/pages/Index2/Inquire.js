import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { useForm } from "react-hook-form";
import FadeIn from "react-fade-in";

import SectionTitle from "../../components/common/section-title";

function Inquire() {
  const { register, handleSubmit, formState, watch } = useForm();
  const { dirtyFields } = formState;
  const [FormData, setFormData] = useState({});
  const onSubmit = (data) => {
    setFormData(data);
  };

  useEffect(() => {
    console.log("Submitted form data: ", FormData);
  }, [FormData]);

  //   Form conditionals
  const ifContact =
    dirtyFields["Email"] &&
    dirtyFields["First name"] &&
    dirtyFields["Last name"] &&
    dirtyFields["Mobile number"] &&
    dirtyFields["Title"];

  const ifWebsiteGoal =
    dirtyFields["Website goal: other"] || (dirtyFields["Website goal"] && watch()["Website goal"] !== "Other");
  const ifWebsiteGoalOther = watch()["Website goal"] === "Other";
  const ifWebsiteType = dirtyFields["Website type"];
  const ifWebsiteSections =
    dirtyFields["Website section: Navbar"] &&
    dirtyFields["Website section: Button links"] &&
    dirtyFields["Website section: Picture slides"] &&
    dirtyFields["Website section: Modal (Popup window)"] &&
    dirtyFields["Website section: Dropdown menu"];

  const ifBusinessType =
    (watch()["Business type"] === "Real Estate" && dirtyFields["Property displaying portfolio"]) ||
    (watch()["Business type"] === "Other" && dirtyFields["Business type: other"]) ||
    watch()["Business type"] === "Personal";
  const ifBusinessTypeOther = watch()["Business type"] === "Other";

  const ifAnythingElse =
    watch()["Additional info"] === "No" ||
    (watch("Additional info") === "Yes" && dirtyFields["Additional info: content"]);
  const ifAdditionalInfo = watch()["Additional info"] === "Yes";

  const ifRealEstate = watch()["Business type"] === "Real Estate";

  const ifEmulatedSites =
    dirtyFields["Emulated website 1"] && dirtyFields["Emulated website 2"] && dirtyFields["Emulated website 3"];

  const ifMobileWebsite = dirtyFields["Mobile website"];

  const ifPriceUnderstandingNo = watch()["Price understanding"] === "No";
  const ifPriceUnderstandingYes = watch()["Price understanding"] === "Yes";

  const ifDateTime =
    dirtyFields["datetime-local 1"] && dirtyFields["datetime-local 2"] && dirtyFields["datetime-local 3"];

  //   Form inputs
  const formInputsContact = ["First name", "Last name", "Name of business", "Email", "Mobile number"];
  const formInputsDateTime = ["datetime-local 1", "datetime-local 2", "datetime-local 3"];
  const formInputsEmulatedSites = ["Emulated website 1", "Emulated website 2", "Emulated website 3"];

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
                  <h6 className="mb-3">Please provide contact information we can reach you at.</h6>
                  <select {...register("Title")} className="form-control">
                    <option></option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                    <option value="Dr">Dr</option>
                  </select>

                  {formInputsContact.map((text, i) => (
                    <input key={i} type="text" placeholder={text} className="form-control mt-3" {...register(text)} />
                  ))}

                  <SectionTitle />
                  {ifContact && (
                    <FadeIn>
                      <h6 className="mt-3">What is the goal for your website?</h6>
                      <select {...register("Website goal")} className="form-control mt-3">
                        <option></option>
                        <option value="Client communication">Client communication</option>
                        <option value="Advertising and/or establish brand">Advertising and/or establish brand</option>
                        <option value="Sales">Sales</option>
                        <option value="Other">Other</option>
                      </select>

                      {ifWebsiteGoalOther && (
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
                      {ifWebsiteGoal && (
                        <FadeIn>
                          <h6 className="mt-3">What type of business are you developing your site for?</h6>
                          <select {...register("Business type")} className="form-control mt-3">
                            <option></option>
                            <option value="Real Estate">Real Estate</option>
                            <option value="Personal">Personal</option>
                            <option value="Other">Other</option>
                          </select>

                          {ifBusinessTypeOther && (
                            <FadeIn>
                              <input
                                type="text"
                                placeholder="What type of business is your website for?"
                                className="form-control mt-3"
                                {...register("Business type: other")}
                              />
                            </FadeIn>
                          )}
                          {ifRealEstate && (
                            <FadeIn>
                              <h6 className="mt-3 mb-3">Would you like a portfolio for displaying your properties?</h6>
                              <div className="d-flex">
                                <div className="d-flex align-items-baseline">
                                  <p className="mr-1">Yes</p>
                                  <input
                                    {...register("Property displaying portfolio")}
                                    type="radio"
                                    value="Yes"
                                    className="mr-5"
                                  />
                                </div>
                                <div className="d-flex align-items-baseline">
                                  <p className="mr-1">No</p>
                                  <input {...register("Property displaying portfolio")} type="radio" value="No" />
                                </div>
                              </div>
                            </FadeIn>
                          )}
                          <SectionTitle />
                          {ifBusinessType && (
                            <FadeIn>
                              <h6 className="mt-3">I'm looking for a website that is...</h6>

                              <select {...register("Website type")} className="form-control mt-3">
                                <option></option>
                                <option value="Singlepage">Singlepage</option>
                                <option value="Multipage">Multipage</option>
                              </select>

                              <SectionTitle />
                              {ifWebsiteType && (
                                <FadeIn>
                                  <h6 className="mt-3 mb-3">
                                    Would you like your website to also be formatted for mobile?
                                  </h6>
                                  <div className="d-flex">
                                    <div className="d-flex align-items-baseline">
                                      <p className="mr-1">Yes</p>
                                      <input
                                        {...register("Mobile website")}
                                        type="radio"
                                        value="Yes"
                                        className="mr-5"
                                      />
                                    </div>
                                    <div className="d-flex align-items-baseline">
                                      <p className="mr-1">No</p>
                                      <input {...register("Mobile website")} type="radio" value="No" />
                                    </div>
                                  </div>
                                  <SectionTitle />

                                  {ifMobileWebsite && (
                                    <FadeIn>
                                      <h6 className="mt-3">The websites I'd most like to emulate are...</h6>

                                      {formInputsEmulatedSites.map((text, i) => (
                                        <input
                                          key={i}
                                          type="text"
                                          placeholder="URL"
                                          className="form-control mt-3"
                                          {...register(text)}
                                        />
                                      ))}

                                      <SectionTitle />
                                      {ifEmulatedSites && (
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
                                              <input {...register("Website section: Navbar")} type="radio" value="No" />
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
                                          {ifWebsiteSections && (
                                            <FadeIn>
                                              <h6 className="mt-3">Is there anything else you'd like us to know?</h6>
                                              <div className="d-flex">
                                                <div className="d-flex align-items-baseline">
                                                  <p className="mr-1">Yes</p>
                                                  <input
                                                    {...register("Additional info")}
                                                    type="radio"
                                                    value="Yes"
                                                    className="mr-5"
                                                  />
                                                </div>
                                                <div className="d-flex align-items-baseline">
                                                  <p className="mr-1">No</p>
                                                  <input {...register("Additional info")} type="radio" value="No" />
                                                </div>
                                              </div>
                                              {ifAdditionalInfo && (
                                                <FadeIn>
                                                  <textarea
                                                    placeholder="Additional information"
                                                    rows="4"
                                                    className="form-control mt-3"
                                                    {...register("Additional info: content")}
                                                  />
                                                </FadeIn>
                                              )}
                                              <SectionTitle />
                                              {ifAnythingElse && (
                                                <FadeIn>
                                                  <h6 className="mt-3">
                                                    <b>I understand that the</b> <u>minimum</u> cost for our web dev
                                                    team is $<u>6,000</u> and can cost more with added features.
                                                  </h6>
                                                  <div className="d-flex">
                                                    <div className="d-flex align-items-baseline">
                                                      <p className="mr-1">Yes</p>
                                                      <input
                                                        {...register("Price understanding")}
                                                        type="radio"
                                                        value="Yes"
                                                        className="mr-5"
                                                      />
                                                    </div>
                                                    <div className="d-flex align-items-baseline">
                                                      <p className="mr-1">No</p>
                                                      <input
                                                        {...register("Price understanding")}
                                                        type="radio"
                                                        value="No"
                                                      />
                                                    </div>
                                                  </div>

                                                  <SectionTitle />

                                                  {ifPriceUnderstandingNo && (
                                                    <FadeIn>
                                                      <p className="mt-3">
                                                        No worries. We'll keep your information on hand in case you
                                                        change your mind.
                                                      </p>

                                                      <input
                                                        className="mt-3"
                                                        type="submit"
                                                        className="submitBnt btn btn-primary mt-3"
                                                      />
                                                    </FadeIn>
                                                  )}

                                                  {ifPriceUnderstandingYes && (
                                                    <FadeIn>
                                                      <h6 className="mt-3">
                                                        Excellent. Pick three days that can work for a video
                                                        consultation.
                                                      </h6>

                                                      {formInputsDateTime.map((text, i) => (
                                                        <input
                                                          key={i}
                                                          type="datetime-local"
                                                          className="form-control mt-3"
                                                          placeholder="datetime-local"
                                                          {...register(text)}
                                                        />
                                                      ))}

                                                      <SectionTitle />

                                                      {ifDateTime && (
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
                                                              <p className="mt-3">{watch()["Emulated website 1"]}</p>
                                                              <p className="mt-3">{watch()["Emulated website 2"]}</p>
                                                              <p className="mt-3">{watch()["Emulated website 3"]}</p>
                                                              <SectionTitle />
                                                              <h6 className="mt-3">Website features: </h6>
                                                              <p>
                                                                ∙
                                                                {watch()["Website section: Button links"] === "Yes" &&
                                                                  " Button links ∙"}
                                                                {watch()["Website section: Dropdown menu"] === "Yes" &&
                                                                  " Dropdown menu ∙"}
                                                                {watch()["Website section: Modal (Popup window)"] ===
                                                                  "Yes" && " Modal ∙"}
                                                                {watch()["Website section: Navbar"] === "Yes" &&
                                                                  " Navbar ∙"}
                                                                {watch()["Website section: Picture slides"] === "Yes" &&
                                                                  " Picture slides ∙"}
                                                                {watch()["Website section: Other"] !== "" &&
                                                                  " " + watch()["Website section: Other"] + " ∙"}
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
