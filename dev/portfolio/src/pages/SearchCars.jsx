import SearchBar from "../components/SearchBar";
import CarCard from "../components/CarCard";
import "./SearchCars.css";

function SearchCars() {
  return (
    <section className="search-page">
      <SearchBar />

      <div className="search-results-layout">
        <CarCard
          id="1"
          year="2022"
          make="Honda"
          model="Civic"
          price="24500"
          mileage="28000"
        />

        <CarCard
          id="2"
          year="2021"
          make="Toyota"
          model="Camry"
          price="23000"
          mileage="32000"
        />

        <CarCard
          id="3"
          year="2023"
          make="Nissan"
          model="Altima"
          price="27000"
          mileage="18000"
        />

        <CarCard
          id="4"
          year="2020"
          make="BMW"
          model="330i"
          price="29500"
          mileage="41000"
        />

        <CarCard
          id="5"
          year="2022"
          make="Audi"
          model="A4"
          price="31000"
          mileage="26000"
        />

        <CarCard
          id="6"
          year="2021"
          make="Lexus"
          model="IS 300"
          price="32500"
          mileage="30000"
        />
      </div>
    </section>
  );
}

export default SearchCars;
