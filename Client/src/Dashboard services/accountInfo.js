import React from "react";

const accountInfo = () => {
  return (
    <div className="auth">
      <form className="row g-3 needs-validation" action="" noValidate>
        <div className="col-md-4">
          <label htmlFor="validationCustom01" className="form-label">
            {" "}
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            name="first_name"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>

        <div className="col-md-4">
          <label htmlFor="validationCustom02" className="form-label">
            {" "}
            Last Name{" "}
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom08"
            name="last_name"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>

        <div className="col-md-4">
          <label htmlFor="validationCustom03" className="form-label">
            {" "}
            Phone Number
          </label>
          <input
            type="number"
            className="form-control"
            id="validationCustom03"
            name="Contact_number"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustom04" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="validationCustom04"
            name="password"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>

        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input tick"
              type="checkbox"
              value=""
              id="invalidCheck"
              required
            />
            <label className="form-check-label" htmlFor="invalidCheck">
              Agree to terms and conditions
            </label>
            <div className="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <div className="col-12">
          <button className="btn " name="submit" type="submit">
            UPDATE
          </button>
        </div>
      </form>
    </div>
  );
};

export default accountInfo;
