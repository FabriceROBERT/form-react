import React, { useState } from "react";

export default function Form() {
  // Creation des etats
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
    const [pswd, setPswd] = useState("");
    const [confirmPswd,setConfirmPswd] = useState("");

  // Verifiication des erreurs
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  //Gerer le changement de nom
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  //Gerer le changement d'email
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  //Gerer le changement de mot de passe
  const handlePswd = (e) => {
    setPswd(e.target.value);
    setSubmitted(false);
  };
  const handleConfirmPswd = (e) => {
    setConfirmPswd(e.target.value);
    setSubmitted(false);
  };
  //Gerer l'envoi du formulaire
    const handleSubmit = (e) => {
        // const { id, value } = e.target
        // if (id === name) {
        //     setName(value)
        // }
        // if (id === email) {
        //     setEmail(value)
        // }
        // if (id === pswd) {
        //     setPswd(value)
        // }
        // if (id === confirmPswd) {
        //     setConfirmPswd(value)
        // }
        e.preventDefault();
          if (name === "" || email === "" || pswd === "" || confirmPswd === "") {
              setError(true);
              setSubmitted(false)
    } else {
      setError(false);
        }
        
        if (pswd !== confirmPswd) {
            setError(true)
            setSubmitted(false)
           alert("Les mots de passe ne correspondent pas. Veuillez réessayer.")
        } else if (name === "" || email === "" || pswd === "" || confirmPswd === "") {
            setError(true)
            setSubmitted(false)
            console.log({ name }, { email }, { pswd }, { confirmPswd });
        }
        else {
            setError(false)
            setSubmitted(true)
        }
  };

  // Message avec succes
  const successMessage = () => {
    return (
      <div
        className="success"
        // display "" = display "none"
        style={{ display: submitted ? "" : "none" }}
      >
        <h1>User {name} successfully registered :)</h1>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="error" style={{ display: error ? "" : "none" }}>
        <h1>{name===""|| email===""|| pswd ===""|| confirmPswd==="" ? "Veuillez remplir les champs" : "Les mots de passe ne correspondent pas"} </h1>
      </div>
    );
  };

  // const errorMessage = () => {
  //   if (error) {
  //     alert("Veuilez remplir les champs manquant");
  //   }
  //   return null;
  // };

  return (
    <div className="form">
      <div className="title">
        <h1>Enregistrement</h1>
        </div>
     

      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form >
        <label className="label" htmlFor="name">Nom : </label>
        <input
          type="text"
          value={name}
          className="input"
          onChange={handleName}
        />

        <label className="label"  htmlFor="emal">Email :</label>
        <input
          className="input"
          type="email"
          value={email}
          onChange={handleEmail}
        />

        <label className="label" htmlFor="pswd">Mot de passe :</label>
        <input
          value={pswd}
          onChange={handlePswd}
          className="input"
          type="current-password"
        />
        <label className="label" htmlFor="pswd">Confirmez le mot de passe :</label>
        <input
          value={confirmPswd}
          onChange={handleConfirmPswd}
          className="input"
          type="current-password"
        />
        <button onClick={handleSubmit} className="btn" type="submit">
          Valider
        </button>
              </form>
              </div>
          
  );
}
