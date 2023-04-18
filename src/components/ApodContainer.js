import React from "react";

export default function BiComponent(props) {
  const { data, dateChange, currentDate } = props;
  function dateChangeHandler(e) {
    console.log(e.target.value);
    dateChange(e.target.value);
  }
  if (!data) return <h3>Yükleniyor...</h3>;
  return (
    <div className="row App__Container">
      <div className="column grow2">
        <div className="row">
          <div className="column text--white">ASTRONOMY PICTURE OF THE DAY</div>
        </div>
        <div className="row grow2">
          <div className="column">
            <p>{data.title}</p>
            <label htmlFor="apodDate">
              <p>{data.date}</p>
            </label>
            <input
              onChange={(e) => dateChangeHandler(e)}
              type="date"
              value={currentDate}
              name="apodDate"
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <p>{data.explanation}</p>
          </div>
        </div>
      </div>
      <div className="column grow2 basis40">
        <div className="row">
          <div className="column image">
            <img
              src="https://apod.nasa.gov/apod/image/1203/IC2177Seagull_boren1500.jpg"
              alt=""
              width="400"
              height="200"
            />
          </div>
        </div>
        <div className="row">
          <div className="column image">
            {data.media_type === "image" && (
              <img src={data.hdurl} alt={data.title} width="400" height="200" />
            )}
            {data.media_type === "video" && (
              <iframe width="420" max-height="200" src={data.url}></iframe>
            )}
          </div>
        </div>
        <div className="row">
          <div className="column image">
            <img
              src="https://apod.nasa.gov/apod/image/1205/helene2_cassini_1024.png"
              alt=""
              width="400"
              height="200"
            />
          </div>
        </div>
      </div>
      <div className="column basis20">
        <div className="row">
          <div className="column">Archives</div>
        </div>
        <div className="row">
          <div className="column">
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>
        </div>
      </div>
    </div>
  );
}