import React, { useEffect, useState } from "react";
import { useAppContext } from "../global/AppContext";
import "../App.css";
import muz1 from "../music/muz.mp3";
import muz2 from "../music/muz2.mp3";
import muz3 from "../music/muz3.mp3";
import muz4 from "../music/muz4.mp3";
import muz5 from "../music/muz5.mp3";
import muz6 from "../music/muz6.mp3";
import muz7 from "../music/muz7.mp3";
import muz8 from "../music/muz8.mp3";

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function Wednesday({ disableAudioDays, setDisableAudioDays }) {
  const {
    selectedAudio,
    currentTime,
    activeInput,
    disableAudio,
    audioRef,
    handleSelectChange,
    handleStopAudio,
    handleInputFocus,

    // disableAudioDays,

    handleDisableAudioChange,
    setActiveInput,
    handleCheckboxChange,
  } = useAppContext();

  const handleInputChange = (inputName, event) => {
    const { value } = event.target;
    setWednesdayInputs((prevInputs) => ({
      ...prevInputs,
      [inputName]: value,
    }));
  };

  useEffect(() => {
    const savedInputs = localStorage.getItem("wednesdayInputs");
    if (savedInputs) {
      setWednesdayInputs(JSON.parse(savedInputs));
    }
  }, []);

  const [wednesdayInputs, setWednesdayInputs] = useState(() => {
    const savedInputs = localStorage.getItem("wednesdayInputs");
    return savedInputs
      ? JSON.parse(savedInputs)
      : {
          input1: "07:45",
          input2: "08:30",
          input3: "08:35",
          input4: "09:20",
          input5: "09:25",
          input6: "10:10",
          input7: "10:20",
          input8: "11:05",
          input9: "11:10",
          input10: "11:55",
          input11: "12:00",
          input12: "12:45",
          input15: "13:00",
          input16: "13:45",
          input17: "13:50",
          input18: "14:35",
          input19: "14:40",
          input20: "15:25",
          input21: "15:35",
          input22: "16:20",
          input23: "16:25",
          input24: "17:10",
          input25: "17:15",
          input26: "18:00",
        };
  });

  useEffect(() => {
    localStorage.setItem("wednesdayInputs", JSON.stringify(wednesdayInputs));
  }, [wednesdayInputs]);

  useEffect(() => {
    const currentDayOfWeek = daysOfWeek[new Date().getDay()];
    if (currentDayOfWeek === "Wednesday") {
      const inputs = document.querySelectorAll("input[type='time']");
      inputs.forEach((input, index) => {
        if (
          input.value === currentTime &&
          !disableAudio &&
          !disableAudioDays.wednesday
        ) {
          setActiveInput(index);
          if (selectedAudio) {
            handlePlayAudio(selectedAudio);
            setTimeout(handleStopAudio, 60000);
          }
        }
      });
    }
  }, [currentTime, selectedAudio, disableAudio, disableAudioDays.wednesday]);

  const handlePlayAudio = (audioFile) => {
    audioRef.current.src = audioFile;
    audioRef.current.play();
  };

  return (
    <div>
      <center>
        <div className="card">
          <p className="card__name">
            {currentTime && <h2 className="title">{currentTime}</h2>}
            <h3 className="subtitle">Среда</h3>
          </p>
          <select
            style={{
              background: "white",
              color: "black",
              padding: "5px 10px",
              border: "none",
              position: "absolute",
              marginLeft: "-498px",
              marginTop: "75px",
            }}
            onChange={handleSelectChange}
            value={selectedAudio}
          >
            <option value="">Выберите аудио</option>

            <option value={muz1}>Обон 1</option>
            <option value={muz2}>Обон 2</option>
            <option value={muz3}>Обон 3</option>
            <option value={muz4}>Обон 4</option>
            <option value={muz5}>Обон 5</option>
            <option value={muz6}>Обон 6</option>
            <option value={muz7}>Обон 7</option>
            <option value={muz8}>Обон 8</option>
          </select>
          <div className="ParentValue">
            <div className="defaultValue">
              <h3
                style={{
                  margin: "10px 0",
                }}
              >
                1-смена
              </h3>
              <div className="">
                <div className="">
                  <div className="grid">
                    <input
                      type="time"
                      defaultValue={wednesdayInputs.input1}
                      onFocus={() => handleInputFocus(0)}
                      onChange={(e) => handleInputChange("input1", e)}
                    />
                    <input
                      type="time"
                      defaultValue={wednesdayInputs.input2}
                      onFocus={() => handleInputFocus(1)}
                      onChange={(e) => handleInputChange("input2", e)}
                    />
                  </div>
                  <div className="grid">
                    <input
                      type="time"
                      defaultValue={wednesdayInputs.input3}
                      onFocus={() => handleInputFocus(2)}
                      onChange={(e) => handleInputChange("input3", e)}
                    />
                    <input
                      type="time"
                      defaultValue={wednesdayInputs.input4}
                      onFocus={() => handleInputFocus(3)}
                      onChange={(e) => handleInputChange("input4", e)}
                    />
                  </div>
                  <div className="grid">
                    <input
                      type="time"
                      defaultValue={wednesdayInputs.input5}
                      onFocus={() => handleInputFocus(4)}
                      onChange={(e) => handleInputChange("input5", e)}
                    />
                    <input
                      type="time"
                      defaultValue={wednesdayInputs.input6}
                      onFocus={() => handleInputFocus(5)}
                      onChange={(e) => handleInputChange("input6", e)}
                    />
                  </div>
                </div>
                <div className="">
                  <div className="grid">
                    <input
                      type="time"
                      defaultValue={wednesdayInputs.input7}
                      onFocus={() => handleInputFocus(6)}
                      onChange={(e) => handleInputChange("input7", e)}
                    />
                    <input
                      type="time"
                      defaultValue={wednesdayInputs.input8}
                      onFocus={() => handleInputFocus(7)}
                      onChange={(e) => handleInputChange("input8", e)}
                    />
                  </div>
                  <div className="grid">
                    <input
                      type="time"
                      defaultValue={wednesdayInputs.input9}
                      onFocus={() => handleInputFocus(8)}
                      onChange={(e) => handleInputChange("input9", e)}
                    />
                    <input
                      type="time"
                      defaultValue={wednesdayInputs.input10}
                      onFocus={() => handleInputFocus(9)}
                      onChange={(e) => handleInputChange("input10", e)}
                    />
                  </div>
                  <div className="grid">
                    <input
                      type="time"
                      defaultValue={wednesdayInputs.input11}
                      onFocus={() => handleInputFocus(10)}
                      onChange={(e) => handleInputChange("input11", e)}
                    />
                    <input
                      type="time"
                      defaultValue={wednesdayInputs.input12}
                      onFocus={() => handleInputFocus(11)}
                      onChange={(e) => handleInputChange("input12", e)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="defaultValue">
              <h3
                style={{
                  margin: "10px 0",
                }}
              >
                2-смена
              </h3>
              <div className="parentGrid">
                <div className="">
                  <div className="grid">
                    <input
                      type="time"
                      defaultValue={wednesdayInputs.input15}
                      onFocus={() => handleInputFocus(14)}
                      onChange={(e) => handleInputChange("input15", e)}
                    />
                    <input
                      type="time"
                      defaultValue={wednesdayInputs.input16}
                      onFocus={() => handleInputFocus(15)}
                      onChange={(e) => handleInputChange("input16", e)}
                    />
                  </div>
                  <div className="grid">
                    <input
                      type="time"
                      defaultValue={wednesdayInputs.input17}
                      onFocus={() => handleInputFocus(16)}
                      onChange={(e) => handleInputChange("input17", e)}
                    />
                    <input
                      type="time"
                      defaultValue={wednesdayInputs.input18}
                      onFocus={() => handleInputFocus(17)}
                      onChange={(e) => handleInputChange("input18", e)}
                    />
                  </div>
                </div>
                <div className="parentGrid">
                  <div className="grid">
                    <input
                      type="time"
                      defaultValue={wednesdayInputs.input19}
                      onFocus={() => handleInputFocus(18)}
                      onChange={(e) => handleInputChange("input19", e)}
                    />
                    <input
                      type="time"
                      defaultValue={wednesdayInputs.input20}
                      onFocus={() => handleInputFocus(19)}
                      onChange={(e) => handleInputChange("input20", e)}
                    />
                  </div>
                  <div className="grid">
                    <input
                      type="time"
                      defaultValue={wednesdayInputs.input21}
                      onFocus={() => handleInputFocus(20)}
                      onChange={(e) => handleInputChange("input21", e)}
                    />
                    <input
                      type="time"
                      defaultValue={wednesdayInputs.input22}
                      onFocus={() => handleInputFocus(21)}
                      onChange={(e) => handleInputChange("input22", e)}
                    />
                  </div>
                  <div className="grid">
                    <input
                      type="time"
                      defaultValue={wednesdayInputs.input23}
                      onFocus={() => handleInputFocus(22)}
                      onChange={(e) => handleInputChange("input23", e)}
                    />
                    <input
                      type="time"
                      defaultValue={wednesdayInputs.input24}
                      onFocus={() => handleInputFocus(23)}
                      onChange={(e) => handleInputChange("input24", e)}
                    />
                  </div>
                  <div className="grid">
                    <input
                      type="time"
                      defaultValue={wednesdayInputs.input25}
                      onFocus={() => handleInputFocus(24)}
                      onChange={(e) => handleInputChange("input25", e)}
                    />
                    <input
                      type="time"
                      defaultValue={wednesdayInputs.input26}
                      onFocus={() => handleInputFocus(25)}
                      onChange={(e) => handleInputChange("input26", e)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <audio ref={audioRef} />
          {selectedAudio && activeInput !== null && (
            <button
              style={{
                margin: "5px 0 ",
                fontSize: "18px",
                color: "white",
                background: "blue",
                padding: "5px 20px",
                borderRadius: "14px",
              }}
              onClick={handleStopAudio}
            >
              Остановить аудио
            </button>
          )}
          <input
            style={{
              width: "20px",
              height: "20px",
              border: "2px solid blue",
            }}
            type="checkbox"
            checked={disableAudioDays.wednesday}
            onChange={() => {
              handleCheckboxChange("wednesday");
              setDisableAudioDays((prevDays) => ({
                ...prevDays,
                wednesday: !prevDays.wednesday,
              }));
            }}
          />
          <label
            style={{
              margin: "5px 0 ",
              fontSize: "18px",
              background: "red",
              padding: "5px 20px",
              borderRadius: "14px",
            }}
          >
            Disable Audio
          </label>
        </div>
      </center>
    </div>
  );
}

export default Wednesday;
