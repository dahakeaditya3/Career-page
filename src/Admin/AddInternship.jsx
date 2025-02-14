import React, { useState } from "react";
import AdminNavbar from "../Components/AdminNavbar"; //  import

const AddInternship = () => {
  const [formData, setFormData] = useState({
    Internship_id: "",
    Title: "",
    Description: "",
    Requirement: "",
    Duration: "",
    Stipend: "",
    Location: "",
    Posted_Date: "",
    Application_Deadline: "",
  });

  const [showPopup, setShowPopup] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setShowPopup(true);
      };
    
      const closePopup = () => {
        setShowPopup(false);
      };

  return (
    <div>
      <AdminNavbar /> {/*  Navbar added here */}
      <div style={styles.body}>
        <div style={styles.formContainer}>
          <h2 style={styles.heading}>Internship Application Form</h2>
          <form onSubmit={handleSubmit}>
            {[
              { id: "Internship_id", label: "Employee ID", type: "text" },
              { id: "Title", label: "Internship Title", type: "text" },
              { id: "Description", label: "Description", type: "textarea" },
              { id: "Requirement", label: "Requirements", type: "textarea" },
              { id: "Duration", label: "Duration", type: "text" },
              { id: "Stipend", label: "Stipend", type: "text" },
              { id: "Location", label: "Location", type: "text" },
              { id: "Posted_Date", label: "Posted Date", type: "date" },
              {
                id: "Application_Deadline",
                label: "Application Deadline",
                type: "date",
              },
            ].map(({ id, label, type }) => (
              <div key={id} style={styles.formGroup}>
                <label htmlFor={id} style={styles.label}>
                  {label}
                </label>
                {type === "textarea" ? (
                  <textarea
                    id={id}
                    name={id}
                    style={styles.textarea}
                    value={formData[id]}
                    onChange={handleChange}
                    placeholder={`Enter ${label}`}
                    rows="3"
                    required
                  />
                ) : (
                  <input
                    id={id}
                    name={id}
                    type={type}
                    style={styles.input}
                    value={formData[id]}
                    onChange={handleChange}
                    placeholder={`Enter ${label}`}
                    required
                  />
                )}
              </div>
            ))}

            <div style={styles.formGroup}>
              <button type="submit" style={styles.button}>
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
      {showPopup && (
        <div style={styles.popup}>  
          <p>registration successful!</p>
          <button onClick={closePopup} style={styles.okButton}>OK</button>
        </div>
      )}
    </div>
  );
};

const styles = {
  body: {
    fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
    margin: 0,
    padding: "10px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f0f0f0",
    background: "linear-gradient(to bottom right, #f2d8d8, #cce7eb)",
    boxSizing: "border-box",
  },
  formContainer: {
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    maxWidth: "500px",
    width: "90%",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
    fontSize: "1.5rem",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    fontWeight: "bold",
    marginBottom: "5px",
    fontSize: "1rem",
  },
  input: {
    width: "96%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "1rem",
  },
  textarea: {
    width: "96%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "1rem",
    resize: "none",
  },
  button: {
    background: "#f97902",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    width: "100%",
  },
  popup: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "#fff",
    color: "#000",
    padding: "20px 30px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    fontSize: "1.2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "300px",
  },
 
  okButton: {
    marginTop: "10px",
    background: "#f97902",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  },
};

export default AddInternship;
