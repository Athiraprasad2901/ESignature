import React, { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

const SignatureComponent = () => {
  const signatureRef = useRef();


  const clearSignature = () => {
    if (signatureRef.current) {
      signatureRef.current.clear();
    }
  };


  const saveSignature = () => {
    if (signatureRef.current) {
      const dataURL = signatureRef.current.toDataURL();
      
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Signature Pad</h2>
      <SignatureCanvas
        ref={signatureRef}
        penColor="black"
        canvasProps={{
          style: styles.canvas,
          width: 500,
          height: 200,
        }}
      />
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={clearSignature}>
          Clear
        </button>
        <button style={styles.button} onClick={saveSignature}>
          Save
        </button>
      </div>
    </div>
  );
};


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    marginBottom: "20px",
    fontSize: "24px",
    color: "#333",
  },
  canvas: {
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "100%",
    height: "auto",
    maxWidth: "500px",
    marginBottom: "20px",
  },
  buttonContainer: {
    display: "flex",
    gap: "10px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default SignatureComponent;
