import "../Styles/Auth.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function Tracking() {

    return (
    <form className="col-md-4">
    
    <label htmlFor="validationCustom010" className="form-label">
      TRACKING NUMBER
    </label>
    <input
      type="string"
      className="form-control"
      id="validationCustom010"
      name ="password"
      required
      
    />
    <div className="valid-feedback">Looks good!</div>

<button className="btn"
type="submit">
  Track
</button>
     
  </form> 
  );
  };
  
  