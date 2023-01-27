import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [skill, setSkill] = useState([]);

  const filterData = (parameter) => {
    let x = data.filter((item) => {
      if (item.skills.includes(parameter)) return item;
    });
    setSkill(x);
  };

  const getData = () => {
    fetch("http://localhost:3000/data")
      .then((res) => res.json())
      .then((items) => {
        setData(items);
        setSkill(items);
      });
  };

  const allData = () => {
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <div id="btn-div">
        <button onClick={() => filterData("Frontend")}>Frontend</button>
        <button onClick={() => filterData("Backend")}>Backend</button>
        <button onClick={() => filterData("CSS")}>CSS</button>
        <button onClick={() => filterData("HTML")}>HTML</button>
        <button onClick={allData}>All</button>
      </div>

      <div>
        {skill.map((item) => (
          <div key={item.id} id="main-div">
            <div id="second-main-div">
              <div>
                <img src={item.image} alt="image-url" id="logo" />
              </div>
              <div className="flex-div">
                <div className="title-div">
                  <p className="title">{item.title}</p>
                  <p className="new-text">{item.new}</p>
                  <p className="feature">{item.feature}</p>
                </div>

                <h3 className="heading">{item.designation}</h3>

                <div className="work-div">
                  <p>{item.last}</p>
                  <p>{item.work}</p>
                  <p> {item.job}</p>
                </div>
              </div>
            </div>
            <div id="skills-div">
              {item.skills.map((skill, index) => (
                <p key={index}>{skill}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
