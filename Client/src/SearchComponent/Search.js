import './Search.css'
import React, { useState } from 'react'

function Search() {

  const [SoilFactors, setSoilFactors] = useState({});
  const [cropResult, setCropResult] = useState()

  const Update = (e, factor) => {
    setSoilFactors({ ...SoilFactors, [factor]: e.target.value });
    // console.log(SoilFactors);
  }

  const Submit = async(e) => {
    e.preventDefault();
    console.log(SoilFactors);

     const res = await fetch("http://127.0.0.1:8000/prediction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(SoilFactors),
    });

    console.log(typeof(SoilFactors.ph));

    const result = await res.json();

    console.log(result.crop);
    setCropResult(result.crop)

  }

  return (
    <div>
      {/* Search Start */}
      <div class="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style={{ "padding": "35px" }}>
        {/* <div class="container">
                <div class="row g-2">
                    <div class="col-md-10">
                        <div class="row g-2">
                            <div class="col-md-4">
                                <input type="text" class="form-control border-0 py-3" placeholder="Search Keyword"/>
                            </div>
                            <div class="col-md-4">
                                <select class="form-select border-0 py-3">
                                    <option selected>XYZ Type</option>
                                    <option value="1">XYZ Type 1</option>
                                    <option value="2">XYZ Type 2</option>
                                    <option value="3">XYZ Type 3</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <select class="form-select border-0 py-3">
                                    <option selected>Location</option>
                                    <option value="1">Location 1</option>
                                    <option value="2">Location 2</option>
                                    <option value="3">Location 3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <button class="btn btn-dark border-0 w-100 py-3">Search</button>
                    </div>
                </div>
            </div> */}
        <div class="container1">
          <h2>Input Form</h2>
          <form >
            <div class="form-group">
              <label for="nitrogen">Nitrogen:</label>
              <input type="number" id="nitrogen" name="nitrogen" placeholder="Enter nitrogen value" onChange={(e) => Update(e, "N")} required />
            </div>
            <div class="form-group">
              <label for="phosphorus">Phosphorus:</label>
              <input type="number" id="phosphorus" name="phosphorus" placeholder="Enter phosphorus value" onChange={(e) => Update(e, "P")} required />
            </div>
            <div class="form-group">
              <label for="potassium">Potassium:</label>
              <input type="number" id="potassium" name="potassium" placeholder="Enter potassium value" onChange={(e) => Update(e, "K")} required />
            </div>
            <div class="form-group">
              <label for="ph">pH Value:</label>
              <input type="number" step="0.1" id="ph" name="ph" placeholder="Enter pH value" onChange={(e) => Update(e, "ph")} required />
            </div>
            <div class="form-group">
              <label for="moisture">Moisture:</label>
              <input type="number" id="moisture" name="moisture" placeholder="Enter moisture value" onChange={(e) => Update(e, "humidity")} required />
            </div>
            <div class="form-group">
              <label for="temperature">Temperature:</label>
              <input type="number" id="temperature" name="temperature" placeholder="Enter temperature value" onChange={(e) => Update(e, "temp")} required />
            </div>
            <div class="form-group">
              <label for="rainfall">Rainfall:</label>
              <input type="number" id="rainfall" name="rainfall" placeholder="Enter rainfall value" onChange={(e) => Update(e, "rainfall")} required />
            </div>
            <input type="submit" value="Submit" onClick={Submit} />
          </form>
        </div>


      </div>
      {/* Search End */}

      <div className="result">
        <sapn>
          {cropResult}
        </sapn>
      </div>

    </div>
  )
}
export default Search;