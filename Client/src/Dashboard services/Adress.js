import React from 'react'

const Adress = () => {
  return (
    <div className="auth">
    <form className="row g-3 needs-validation" action="" noValidate>
     
      <div className="col-md-4">
        <label htmlFor="validationCustom01" className="form-label">
          {" "}
          Fullt Name *
        </label>
        <input
          type="text"
          className="form-control"
          id="validationCustom01"
          name ="first_name"
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>

      <div className="col-md-4">
        <label htmlFor="validationCustom02" className="form-label">
          {" "}
          Company name{" "}
        </label>
        <input
          type="text"
          className="form-control"
          id="validationCustom08"
          name ="company_name"
          required
        
        />
        <div className="valid-feedback">Looks good!</div>
      </div>

      <div className="col-md-4">
        <label htmlFor="validationCustom03" className="form-label">
          {" "}
          Plot / building number *
        </label>
        <input
          type="text"
          className="form-control"
          id="validationCustom03"
          name ="p/b_number"
          required
       
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-4">
        <label htmlFor="validationCustom04" className="form-label">
          Street *
        </label>
        <input
          type="text"
          className="form-control"
          id="validationCustom04"
          name ="street"
          required
         
        />
        <div className="valid-feedback">Looks good!</div>
      </div>

      <div className="col-12">
        <button className="btn " name="submit" type="submit">
          UPDATE
        </button>
      </div>
    </form>
  </div>
  )
}

export default Adress