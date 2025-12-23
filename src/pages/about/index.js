import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  education,
  skills,
  services,
  extras
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>



        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Experience</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.link ? (
                        <a href={data.link} target="_blank" rel="noopener noreferrer"  className="timeline-link">
                          {data.where}
                        </a>
                      ):(
                        data.where
                      )}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>

        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Education</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {education.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.degree}</th>
                      <td>{data.subject}</td>
                      <td>{data.link ? (
                        <a href={data.link} target="_blank" rel="noopener noreferrer"  className="timeline-link">
                          {data.institute}
                        </a>
                      ):(
                        data.institute
                      )}</td>
                      <td>{data.location}</td>
                      <td>{data.year}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>

      <Row className="sec_sp">
        <Col lg="5">
          <h3 className="color_sec py-4">Skills</h3>
        </Col>
        <Col lg="7">
          {skills.map((data, i) => (
            <p key={i}>
              <strong>{data.name}:</strong> {data.elements.join(", ")}
            </p>
          ))}
        </Col>
      </Row>

        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Awards & Achievements</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>

 <Row className="sec_sp">
  <Col lg="5">
    <h3 className="color_sec py-4">Extracurriculars</h3>
  </Col>
  <Col lg="7">
    <div className="extracurriculars-container">
      {extras.map((item, i) => (
        <span key={i} className="extracurricular-pill">
          {item}
        </span>
      ))}
    </div>
  </Col>
</Row>



      </Container>
    </HelmetProvider>
  );
};
