import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";

function Inquire() {
  const { register, handleSubmit, formState, watch } = useForm();
  const { dirtyFields } = formState;
  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    console.log(watch());
  }, [formState]);

  console.log(
    dirtyFields["Email"] &&
      dirtyFields["First name"] &&
      dirtyFields["Last name"] &&
      dirtyFields["Mobile number"] &&
      dirtyFields["Title"]
  );

  return (
    <section className="section" id="contact">
      <Container>
        <p>
          Thank you for considering EstateMate Services for your front-end
          project. Please answer our questions so we may better assist you.
        </p>
        {/* <p>CONTINUE BUTTON</p>
        <h5>CAPTCHA TEST</h5> */}
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
                  <option></option>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Miss">Miss</option>
                  <option value="Dr">Dr</option>
                </select>

                <input
                  type="text"
                  placeholder="Name of business (optional)"
                  className="form-control mt-3"
                  {...register("Name of business", {
                    maxLength: 100,
                  })}
                />

                {dirtyFields["Email"] &&
                  dirtyFields["First name"] &&
                  dirtyFields["Last name"] &&
                  dirtyFields["Mobile number"] &&
                  dirtyFields["Title"] && (
                    <>
                      <p>What is the goal for your website?</p>
                      <select
                        {...register("Website goal", { required: true })}
                        className="form-control mt-3"
                      >
                        <option></option>
                        <option value="Client communication">
                          Client communication
                        </option>
                        <option value="Advertising and/or establish brand">
                          Advertising and/or establish brand
                        </option>
                        <option value="Sales">Sales</option>
                        <option value="Other">Other</option>
                      </select>

                      {watch()["Website goal"] === "Other" && (
                        <input
                          type="text"
                          placeholder="If other, please list (optional)"
                          className="form-control mt-3"
                          {...register("Website goal: other", {
                            maxLength: 100,
                          })}
                        />
                      )}
                      {dirtyFields["Website goal"] && (
                        <>
                          <p>
                            What type of business are you developing your site
                            for?
                          </p>
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
                            <input
                              type="text"
                              placeholder="What type of business is your website for? (if other)"
                              className="form-control mt-3"
                              {...register("Business type: other", {
                                maxLength: 100,
                              })}
                            />
                          )}
                          {watch()["Business type"] === "Real Estate" && (
                            <>
                              <p>
                                Would you like a portfolio for displaying your
                                properties? (if Real Estate)
                              </p>
                              <div style={{ display: "flex" }}>
                                <p>Yes</p>
                                <input
                                  {...register(
                                    "Property displaying portfolio",
                                    {
                                      required: true,
                                    }
                                  )}
                                  type="radio"
                                  value="Yes"
                                />
                                <p>No</p>
                                <input
                                  {...register(
                                    "Property displaying portfolio",
                                    {
                                      required: true,
                                    }
                                  )}
                                  type="radio"
                                  value="No"
                                />
                              </div>
                            </>
                          )}

                          {dirtyFields["Business type"] && (
                            <>
                              <p>I'm looking for a website that is...</p>

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
                              {dirtyFields["Website type"] && (
                                <>
                                  <p>
                                    Would you like your website to also be
                                    formatted for mobile?
                                  </p>
                                  <div style={{ display: "flex" }}>
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
                                  </div>

                                  {dirtyFields["Mobile website"] && (
                                    <>
                                      <p>
                                        The websites I'd most like to emulate
                                        are...
                                      </p>
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
                                      {dirtyFields["Emulated website 1"] &&
                                        dirtyFields["Emulated website 2"] &&
                                        dirtyFields["Emulated website 3"] && (
                                          <>
                                            <p>
                                              Some sections I'd like my website
                                              to have are...
                                            </p>
                                            <p>NavBar</p>

                                            <div style={{ display: "flex" }}>
                                              <p>Yes</p>
                                              <input
                                                {...register(
                                                  "Website section: Navbar"
                                                )}
                                                type="radio"
                                                value="Yes"
                                              />
                                              <p>No</p>
                                              <input
                                                {...register(
                                                  "Website section: Navbar"
                                                )}
                                                type="radio"
                                                value="No"
                                              />
                                            </div>
                                            <p>Button Links</p>
                                            <div style={{ display: "flex" }}>
                                              <p>Yes</p>
                                              <input
                                                {...register(
                                                  "Website section: Button links"
                                                )}
                                                type="radio"
                                                value="Yes"
                                              />
                                              <p>No</p>
                                              <input
                                                {...register(
                                                  "Website section: Button links"
                                                )}
                                                type="radio"
                                                value="No"
                                              />
                                            </div>
                                            <p>Picture Slides</p>
                                            <div style={{ display: "flex" }}>
                                              <p>Yes</p>
                                              <input
                                                {...register(
                                                  "Website section: Picture slides"
                                                )}
                                                type="radio"
                                                value="Yes"
                                              />
                                              <p>No</p>
                                              <input
                                                {...register(
                                                  "Website section: Picture slides"
                                                )}
                                                type="radio"
                                                value="No"
                                              />
                                            </div>
                                            <p>Modal (Popup Window)</p>
                                            <div style={{ display: "flex" }}>
                                              <p>Yes</p>
                                              <input
                                                {...register(
                                                  "Website section: Modal (Popup window)"
                                                )}
                                                type="radio"
                                                value="Yes"
                                              />
                                              <p>No</p>
                                              <input
                                                {...register(
                                                  "Website section: Modal (Popup window)"
                                                )}
                                                type="radio"
                                                value="No"
                                              />
                                            </div>
                                            <p>Dropdown Menu</p>
                                            <div style={{ display: "flex" }}>
                                              <p>Yes</p>
                                              <input
                                                {...register(
                                                  "Website section: Dropdown menu"
                                                )}
                                                type="radio"
                                                value="Yes"
                                              />
                                              <p>No</p>
                                              <input
                                                {...register(
                                                  "Website section: Dropdown menu"
                                                )}
                                                type="radio"
                                                value="No"
                                              />
                                            </div>

                                            <p>Other</p>
                                            <input
                                              type="text"
                                              placeholder="Other section..."
                                              className="form-control mt-3"
                                              {...register(
                                                "Website section: Other",
                                                {
                                                  maxLength: 100,
                                                }
                                              )}
                                            />
                                            {dirtyFields[
                                              "Website section: Navbar"
                                            ] &&
                                              dirtyFields[
                                                "Website section: Button links"
                                              ] &&
                                              dirtyFields[
                                                "Website section: Picture slides"
                                              ] &&
                                              dirtyFields[
                                                "Website section: Modal (Popup window)"
                                              ] &&
                                              dirtyFields[
                                                "Website section: Dropdown menu"
                                              ] && (
                                                <>
                                                  <p>
                                                    Is there anything else you'd
                                                    like us to know?
                                                  </p>
                                                  <div
                                                    style={{ display: "flex" }}
                                                  >
                                                    <p>Yes</p>
                                                    <input
                                                      {...register(
                                                        "Additional info",
                                                        {
                                                          required: true,
                                                        }
                                                      )}
                                                      type="radio"
                                                      value="Yes"
                                                    />
                                                    <p>No</p>
                                                    <input
                                                      {...register(
                                                        "Additional info",
                                                        {
                                                          required: true,
                                                        }
                                                      )}
                                                      type="radio"
                                                      value="No"
                                                    />
                                                  </div>
                                                  {watch()[
                                                    "Additional info"
                                                  ] === "Yes" && (
                                                    <textarea
                                                      placeholder="Additional information (if yes)"
                                                      className="form-control mt-3"
                                                      {...register(
                                                        "Additional info: content",
                                                        {
                                                          required: true,
                                                        }
                                                      )}
                                                    />
                                                  )}

                                                  {dirtyFields[
                                                    "Additional info"
                                                  ] && (
                                                    <>
                                                      <p>Provided URLs:</p>
                                                      <p>
                                                        {
                                                          watch()[
                                                            "Emulated website 1"
                                                          ]
                                                        }
                                                      </p>
                                                      <p>
                                                        {
                                                          watch()[
                                                            "Emulated website 2"
                                                          ]
                                                        }
                                                      </p>
                                                      <p>
                                                        {
                                                          watch()[
                                                            "Emulated website 3"
                                                          ]
                                                        }
                                                      </p>
                                                      <p>
                                                        <b>
                                                          I understand that the
                                                        </b>{" "}
                                                        <u>minimum</u> cost for
                                                        our web dev team is $
                                                        <u>6,000</u> and can
                                                        cost more with added
                                                        features.
                                                      </p>
                                                      <div
                                                        style={{
                                                          display: "flex",
                                                        }}
                                                      >
                                                        <p>Yes</p>
                                                        <input
                                                          {...register(
                                                            "Price understanding",
                                                            {
                                                              required: true,
                                                            }
                                                          )}
                                                          type="radio"
                                                          value="Yes"
                                                        />
                                                        <p>No</p>
                                                        <input
                                                          {...register(
                                                            "Price understanding",
                                                            {
                                                              required: true,
                                                            }
                                                          )}
                                                          type="radio"
                                                          value="No"
                                                        />
                                                      </div>

                                                      {watch()[
                                                        "Price understanding"
                                                      ] === "No" && (
                                                        <p>
                                                          No worries. We'll keep
                                                          your information on
                                                          hand in case you
                                                          change your mind.
                                                        </p>
                                                      )}

                                                      {watch()[
                                                        "Price understanding"
                                                      ] === "Yes" && (
                                                        <>
                                                          <p>
                                                            Excellent. Pick
                                                            three days that can
                                                            work for a video
                                                            consultation.
                                                          </p>
                                                          <input
                                                            type="datetime-local"
                                                            className="form-control mt-3"
                                                            placeholder="datetime-local"
                                                            {...register(
                                                              "datetime-local 1"
                                                            )}
                                                          />
                                                          <input
                                                            type="datetime-local"
                                                            className="form-control mt-3"
                                                            placeholder="datetime-local"
                                                            {...register(
                                                              "datetime-local 2"
                                                            )}
                                                          />
                                                          <input
                                                            type="datetime-local"
                                                            className="form-control mt-3"
                                                            placeholder="datetime-local"
                                                            {...register(
                                                              "datetime-local 3"
                                                            )}
                                                          />
                                                          {dirtyFields[
                                                            "datetime-local 1"
                                                          ] &&
                                                            dirtyFields[
                                                              "datetime-local 2"
                                                            ] &&
                                                            dirtyFields[
                                                              "datetime-local 3"
                                                            ] && (
                                                              <>
                                                                <p>
                                                                  In summary:
                                                                </p>
                                                                <p>
                                                                  Name:{" "}
                                                                  {
                                                                    watch()[
                                                                      "Title"
                                                                    ]
                                                                  }{" "}
                                                                  {
                                                                    watch()[
                                                                      "First name"
                                                                    ]
                                                                  }{" "}
                                                                  {
                                                                    watch()[
                                                                      "Last name"
                                                                    ]
                                                                  }
                                                                </p>
                                                                <p>
                                                                  Phone number:{" "}
                                                                  {
                                                                    watch()[
                                                                      "Mobile number"
                                                                    ]
                                                                  }
                                                                </p>
                                                                <p>
                                                                  Email:{" "}
                                                                  {
                                                                    watch()[
                                                                      "Email"
                                                                    ]
                                                                  }
                                                                </p>
                                                                <p>
                                                                  Name of
                                                                  Business:{" "}
                                                                  {
                                                                    watch()[
                                                                      "Name of business"
                                                                    ]
                                                                  }
                                                                </p>
                                                                <p>
                                                                  Type of
                                                                  Project:{" "}
                                                                  {
                                                                    watch()[
                                                                      "Website goal"
                                                                    ]
                                                                  }
                                                                </p>
                                                                <p>
                                                                  Page type:{" "}
                                                                  {
                                                                    watch()[
                                                                      "Website type"
                                                                    ]
                                                                  }
                                                                </p>
                                                                <p>
                                                                  Web
                                                                  inspirations
                                                                  URLs:
                                                                </p>
                                                                <p>
                                                                  {
                                                                    watch()[
                                                                      "Emulated website 1"
                                                                    ]
                                                                  }
                                                                </p>
                                                                <p>
                                                                  {
                                                                    watch()[
                                                                      "Emulated website 2"
                                                                    ]
                                                                  }
                                                                </p>
                                                                <p>
                                                                  {
                                                                    watch()[
                                                                      "Emulated website 3"
                                                                    ]
                                                                  }
                                                                </p>
                                                                <p>
                                                                  Website
                                                                  sections:{" "}
                                                                </p>
                                                                <p>
                                                                  Button links:{" "}
                                                                  {
                                                                    watch()[
                                                                      "Website section: Button links"
                                                                    ]
                                                                  }
                                                                </p>
                                                                <p>
                                                                  Dropdown menu:{" "}
                                                                  {
                                                                    watch()[
                                                                      "Website section: Dropdown menu"
                                                                    ]
                                                                  }
                                                                </p>
                                                                <p>
                                                                  Modal (Popup
                                                                  window):{" "}
                                                                  {
                                                                    watch()[
                                                                      "Website section: Modal (Popup window)"
                                                                    ]
                                                                  }
                                                                </p>
                                                                <p>
                                                                  Navbar:{" "}
                                                                  {
                                                                    watch()[
                                                                      "Website section: Navbar"
                                                                    ]
                                                                  }
                                                                </p>
                                                                <p>
                                                                  Picture
                                                                  slides:{" "}
                                                                  {
                                                                    watch()[
                                                                      "Website section: Picture slides"
                                                                    ]
                                                                  }
                                                                </p>
                                                                <p>
                                                                  other:{" "}
                                                                  {
                                                                    watch()[
                                                                      "Website section: Other"
                                                                    ]
                                                                  }
                                                                </p>
                                                                <input
                                                                  type="submit"
                                                                  className="submitBnt btn btn-primary mt-3"
                                                                />
                                                              </>
                                                            )}
                                                        </>
                                                      )}
                                                    </>
                                                  )}
                                                </>
                                              )}
                                          </>
                                        )}
                                    </>
                                  )}
                                </>
                              )}
                            </>
                          )}
                        </>
                      )}
                    </>
                  )}
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Inquire;
