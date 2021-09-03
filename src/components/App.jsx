import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);
  const [max, setMax] = useState(Infinity);

  function handleClick(e) {
    if (e.target.dataset.id === "increment") {
      setCounter((pre) => {
        counter = pre + step;
        // if(counter>max){
        //   alert('Maximum value reached!')
        // }
        counter > max && alert("Maximum value reached!");
        return counter > max ? counter - step : counter;
      });
    } else if (e.target.dataset.id === "decrement") {
      setCounter((pre) => {
        return pre - step;
      });
    } else if (e.target.dataset.id === "reset") {
      setCounter(0);
      setStep(1);

      setMax(Infinity);
    } else if (e.target.dataset.id === "step5") {
      setStep(5);
    } else if (e.target.dataset.id === "step10") {
      setStep(10);
    } else if (e.target.dataset.id === "step15") {
      setStep(15);
    } else if (e.target.dataset.id === "15") {
      setMax(15);
      counter > 15 && setCounter(15);
    } else if (e.target.dataset.id === "100") {
      setMax(100);
      counter > 100 && setCounter(100);
    } else if (e.target.dataset.id === "200") {
      setMax(200);
      counter > 200 && setCounter(200);
    }
  }
  return (
    <>
      <header className="container p-6 mt-6">
        <div className="title has-text-centered has-text-dark">Counter App</div>
      </header>
      <main>
        <div className="level">
          <div className="level-item">
            <div
              id="display"
              className="is-size-2 has-text-weight-bold has-text-dark"
            >
              {counter}
            </div>
          </div>
        </div>

        <div className="columns is-centered p-4">
          <div className="column is-5 is-multiline is-centered">
            <div className="has-text-centered has-text-weight-bold my-4">
              Steps
            </div>
            <div className="has-text-centered">
              <div
                className={
                  step === 5
                    ? "button mx-4 step is-warning"
                    : "button mx-4 step"
                }
                data-id="step5"
                onClick={handleClick}
              >
                5
              </div>
              <div
                className={
                  step === 10
                    ? "button mx-4 step is-warning"
                    : "button mx-4 step"
                }
                data-id="step10"
                onClick={handleClick}
              >
                10
              </div>
              <div
                className={
                  step === 15
                    ? "button mx-4 step is-warning"
                    : "button mx-4 step"
                }
                data-id="step15"
                onClick={handleClick}
              >
                15
              </div>
            </div>
          </div>
          <div className="column is-5 is-multiline is-centered">
            <div className="has-text-centered has-text-weight-bold my-4">
              Maximum Value
            </div>
            <div className="has-text-centered">
              <div
                className={
                  max === 15 ? "button mx-4 max is-warning" : "button mx-4 max"
                }
                data-id="15"
                onClick={handleClick}
              >
                15
              </div>
              <div
                className={
                  max === 100 ? "button mx-4 max is-warning" : "button mx-4 max"
                }
                data-id="100"
                onClick={handleClick}
              >
                100
              </div>
              <div
                className={
                  max === 200 ? "button mx-4 max is-warning" : "button mx-4 max"
                }
                data-id="200"
                onClick={handleClick}
              >
                200
              </div>
            </div>
          </div>
        </div>

        <div className="level">
          <div className="level-item">
            <div
              className="button mx-4 increment is-success"
              data-id="increment"
              onClick={handleClick}
            >
              Increment
            </div>
            <div
              className="button mx-4 decrement is-danger"
              data-id="decrement"
              onClick={handleClick}
            >
              Decrement
            </div>
            <div
              className="button mx-4 reset is-info"
              data-id="reset"
              onClick={handleClick}
            >
              Reset
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
