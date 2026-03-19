import { differenceInCalendarDays } from "date-fns";

import { useState } from "react";

const cars = [
  {
    id: 1,
    status: false,
    src: "/car/car-1.jpg",
    speed: "150km/h",
    feul: "2L/h",
    price: 188,
  },
  {
    id: 2,
    status: true,
    src: "/car/car-2.jpg",
    speed: "180km/h",
    feul: "1.4L/h",
    price: 179,
  },
  {
    id: 3,
    status: true,
    src: "/car/car-3.jpg",
    speed: "190km/h",
    feul: "1.8L/h",
    price: 120,
  },
  {
    id: 4,
    status: true,
    src: "/car/car-4.jpg",
    speed: "170km/h",
    feul: "2L/h",
    price: 199,
  },
  {
    id: 5,
    status: true,
    src: "/car/car-5.jpg",
    speed: "130km/h",
    feul: "2.5L/h",
    price: 149,
  },
  {
    id: 6,
    status: true,
    src: "/car/car-6.jpg",
    speed: "120km/h",
    feul: "1.95L/h",
    price: 176,
  },
  {
    id: 7,
    status: false,
    src: "/car/car-7.jpg",
    speed: "200km/h",
    feul: "2.3L/h",
    price: 170,
  },
  {
    id: 8,
    status: true,
    src: "/car/car-8.jpg",
    speed: "185km/h",
    feul: "2.2L/h",
    price: 130,
  },
  {
    id: 9,
    status: true,
    src: "/car/car-9.jpg",
    speed: "160km/h",
    feul: "1.85L/h",
    price: 190,
  },
  {
    id: 10,
    status: false,
    src: "/car/car-10.jpg",
    speed: "190km/h",
    feul: "3L/h",
    price: 150,
  },
  {
    id: 4,
    status: true,
    src: "/car/car-4.jpg",
    speed: "170km/h",
    feul: "2L/h",
    price: 199,
  },
];

export function CarRental() {
  const [carsList, setCarsList] = useState(cars);
  const [isOpen, setIsOpen] = useState(false);
  const [choosenCar, setChoosenCar] = useState([]);
  const [RentalList, setRentalList] = useState([]);
  console.log(RentalList);

  console.log(choosenCar);

  return (
    <>
      <HeroSection />

      <Cars
        isOpen={isOpen}
        onSetIsOpen={setIsOpen}
        choosenCar={choosenCar}
        carsList={carsList}
        onSetChoosenCar={setChoosenCar}
      />
      {isOpen && (
        <CarDetails
          choosenCar={choosenCar}
          isOpen={isOpen}
          onSetIsOpen={setIsOpen}
          onSetChoosenCar={setChoosenCar}
          onSetRentalList={setRentalList}
        />
      )}
      <RentalBox RentalList={RentalList} />
    </>
  );
}

function Cars({ carsList, isOpen, onSetIsOpen, onSetChoosenCar, choosenCar }) {
  const [carVisible, setCarVisible] = useState(0);
  function handleCarDetails(index) {
    const selectedCar = carsList.filter((_, i) => {
      return index === i;
    });
    console.log(110);

    onSetChoosenCar(selectedCar);
    onSetIsOpen(true);
  }
  return (
    <>
      <div className="grid grid-cols-2 grid-rows-1 gap-4 justify-center mx-auto w-[80%] text-white text-sm p-4 ">
        {carsList.slice(carVisible, carVisible + 2).map((car, index) => {
          return (
            <div
              key={index}
              className="   bg-black/20 gap-4 w-[350px] md:w-[280px] justify-center rounded-xl p-2 h-3/4 "
            >
              <img
                className="w-full h-[280px] object-center rounded-lg "
                src={car.src}
              ></img>

              <div className="m-3 ">
                <h2>
                  {" "}
                  Number: <b>{car.id}</b>
                </h2>
                <h2>
                  {" "}
                  Status: <b>{car.status ? "Free" : "Booked"}</b>
                </h2>
                {car.status ? (
                  <button
                    className="p-2  bg-white text-black rounded-2xl font-semibold mt-3 hover:bg-slate-300 hover:scale-90"
                    onClick={() => handleCarDetails(index)}
                  >
                    Click for Details
                  </button>
                ) : (
                  <p className="text-lg text-neutral-300 font-bold mt-2">
                    Invalid⊘
                  </p>
                )}
              </div>
            </div>
          );
        })}
        {carsList.length > carVisible && (
          <button
            className=""
            onClick={() => setCarVisible((carVisible + 1) % carsList.length)}
          >
            veiw more
          </button>
        )}
      </div>

      <Form
        choosenCar={choosenCar}
        onSetChoosenCar={onSetChoosenCar}
        isOpen={isOpen}
      />
    </>
  );
}

function CarDetails({
  choosenCar,
  onSetIsOpen,
  isOpen,
  onSetChoosenCar,
  onSetRentalList,
}) {
  const [show, setShow] = useState(false);
  return (
    <div className="lg:w-[40%] lg:left-1/3 w-2/3  bg-stone-300 top-1/4  left-[18%] bg-opacity-95 rounded-xl fixed">
      {choosenCar.map((car, index) => {
        return (
          <div
            className="flex  justify-center items-center font-semibold"
            key={index}
            style={{ display: show ? "none" : "flex" }}
          >
            <img
              className="w-1/2 max-h-[380px] object-center rounded-xl m-5"
              src={car.src}
            ></img>
            <div className="p-4 ">
              <h2>
                Number: <b>{car.id}</b>
              </h2>
              <h2>
                Speed: <b>{car.speed}</b>
              </h2>
              <h2>
                Feul: <b>{car.feul}</b>
              </h2>
              <h2>
                1 Day Rental : <b>${car.price}</b>
              </h2>
              <div className="flex flex-col  mt-4">
                <button
                  className="text-sm font-semibold p-1 rounded-lg  text-white mb-2 bg-teal-800"
                  onClick={() => setShow(!show)}
                >
                  Rent
                </button>
                <button
                  className="text-sm font-semibold p-1 rounded-lg  text-white bg-rose-800 "
                  onClick={() => onSetIsOpen(!isOpen)}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        );
      })}
      {isOpen && (
        <Form
          choosenCar={choosenCar}
          onSetChoosenCar={onSetChoosenCar}
          show={show}
          onSetShow={setShow}
          onSetRentalList={onSetRentalList}
        />
      )}
    </div>
  );
}

function Form({
  choosenCar,
  onSetChoosenCar,
  show,
  onSetShow,
  onSetRentalList,
}) {
  let date = new Date();
  date.setDate(date.getDate() + 1);
  const tomorrowDate = date.toISOString().slice(0, 10);
  const newDate = new Date().toISOString().slice(0, 10);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [startDate, setstartDate] = useState(newDate);
  const [endDate, setEndDate] = useState(tomorrowDate);

  function handleSAveData(e) {
    e.preventDefault();
    const days = differenceInCalendarDays(endDate, startDate);

    choosenCar.map((items) => {
      if (
        name !== "" &&
        number.length === 10 &&
        startDate !== undefined &&
        endDate !== undefined
      ) {
        onSetChoosenCar([
          {
            ...items,
            renterName: name,
            number: number,
            startDate: startDate,
            endDate: endDate,
            days: days,
          },
        ]);
        onSetShow(!show);
        onSetRentalList(choosenCar);
      }
    });
  }
  console.log(choosenCar);

  return (
    <div
      className=" bg-stone-400 w-[50%]  mx-auto text-stone-800 font-semibold m-5 my-10"
      style={{ display: show ? "block" : "none" }}
    >
      <form className="flex flex-col p-4 ">
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)}></input>
        <label>Number</label>
        <input
          value={number}
          type="number"
          onChange={(e) => setNumber(e.target.value)}
        ></input>
        <label>Start Date</label>
        <input
          value={startDate}
          type="date"
          onChange={(e) => setstartDate(e.target.value)}
        ></input>
        <label>End Date</label>
        <input
          value={endDate}
          type="date"
          onChange={(e) => setEndDate(e.target.value)}
        ></input>
        <button
          className="text-sm font-semibold text-white bg-stone-800 rounded-lg mt-4 p-1"
          onClick={handleSAveData}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

function RentalBox({ RentalList }) {
  return (
    RentalList.length > 0 && (
      <div className="absolute h-screen w-1/5 bg-white  top-0 right-0 shadow-lg">
        {RentalList.map((items) => {
          console.log(items.startDate);

          return (
            <div>
              <img src={items.src}></img>
              <div>
                <h2>number:{items.number}</h2>
                <h2>Start Date: {items.startDate}</h2>
                <h2>End Date: {items.endDate}</h2>
                <h2>Days:{items.days}</h2>
                <h2>Total Rent: ${items.days * items.price}</h2>
              </div>
            </div>
          );
        })}
      </div>
    )
  );
}
function HeroSection() {
  return (
    <div className="relative ">
      <div className="absolute  inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>
      <div
        className="h-screen  "
        style={{
          backgroundImage: `url('/car/car-6.jpg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="flex w-[90%]  justify-between absolute top-10  left-1/2 -translate-x-1/2 ">
        <h1 className=" font-extrabold lg:text-6xl text-5xl xl:text-6xl font-mono text-stone-700  ">
          FAST Rental CAR
        </h1>
        <button className=" pr-3 pl-3  rounded-3xl border-black border ">
          Your Car
        </button>
      </div>
      <h2 className="absolute top-1/4 -translate-x-1/2 font-extrabold text-6xl font-mono text-stone-100 left-1/4 w-1/3  tracking-tighter  ">
        Enhance The Pleasure Of Your Trip With A{" "}
        <em className="underline decoration-stone-100">FAST</em> Car
      </h2>
    </div>
  );
}
