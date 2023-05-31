import React from "react";

export default function ProfileLangCertHobb(props) {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ margin: "5% 5%" }}>
      <div className="card" style={{ width: "90%" }}>
        <div className="card-header d-flex justify-content-center" style={{ backgroundColor: "#79C7C7" }}>
          {props.cert ? "CERTIFICACIONES" : props.lang ? "IDIOMAS" : props.hobb ? "HOBBIES" : ""}
        </div>
        <ul className="list-group list-group-flush">
          {props.cert && (
            <div>
              <li className="list-group-item">{props.user.cert_1}</li>
              <li className="list-group-item">{props.user.cert_2}</li>
            </div>
          )}

          {props.lang && (
            <div>
              <li className="list-group-item">{props.user.lang_1}</li>
              <li className="list-group-item">{props.user.lang_2}</li>
            </div>
          )}

          {props.hobb && (
            <div>
              <li className="list-group-item">{props.user.hobby_1}</li>
              <li className="list-group-item">{props.user.hobby_2}</li>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}
