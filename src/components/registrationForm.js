import React, {useState} from 'react';
import './style.css'
function RegistrationForm() {
    return(
      <div className="form">
          <div className="form-body">
              <div className="username">
                  <label className="form__label" for="id">User Name </label>
                  <input className="form__input" type="text" id="id" placeholder="Username"/>
              </div>
              <div className="displayname">
                  <label className="form__label" for="displayname">Display name </label>
                  <input  type="text" name="" id="displayname"  className="form__input"placeholder="DisplayName"/>
              </div>
              <div className="dateofbirth">
                <label className="form__label" for="Dateofbirth">Date of Birth</label>
                <input type="date" id="Dateofbirth" name="" className="form__input" value="" min="1900-01-01" max="2022-12-31"></input>
              </div>
              <div className="address">
                  <label className="form__label" for="address">Address </label>
                  <input  type="address" id="address" className="form__input" placeholder="Address"/>
              </div>
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Confirm Password </label>
                  <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
              </div>
          </div>
          <div class="footer">
              <button type="submit" class="btn">Register</button>
          </div>
      </div>      
    )       
}
export default RegistrationForm;