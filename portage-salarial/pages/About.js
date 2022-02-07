import React from 'react';

const About = () => {
  return <div>
      <h3>INSCRIPTION FREELANCER</h3>
      <form class="row justify-content-md-center">
  <div class="col-md-3">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-3">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  </form>
  <form class="row justify-content-md-center">

  <div class="col-md-3">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="col-md-3">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  </form>
  <form class="row justify-content-md-center">

  <div class="col-md-3">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-3">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  </form>
  <form class="row justify-content-md-center">

  <div class="col-md-3">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>
  <br></br>
  </form>
  <form class="row justify-content-md-center">

  <div class="col-md-3">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  </form>
  <form class="row justify-content-md-center">

  <div class="col-md-3">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>

</div>;
};

export default About;
