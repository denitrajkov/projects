import { useState } from "react";
import { BicycleType } from "./Card";
import FilterItems from "./FilterItems";

type MenuProps = {
  data: BicycleType[];
  calculateBikeCountByBrand: (brand: string) => number;
  calculateBikeCountByGender: (gender: string) => number;
  onFilterChange: (value: string | null) => void;
};

export default function Menu({
  data,
  calculateBikeCountByBrand,
  calculateBikeCountByGender,
  onFilterChange,
}: MenuProps) {
  const brandFilters = [
    "Le grand bikes",
    "Kross",
    "Explorer",
    "Visitor",
    "Pony",
    "Force",
    "E-bikes",
    "Ideal",
  ];

  const genderFilters = ["Male", "Female"];

  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const handleFilterClick = (filter: string | null) => {
    const newFilter = filter === selectedFilter ? null : filter;
    setSelectedFilter(newFilter);
    onFilterChange(newFilter);
  };

  return (
    <div className="col-2">
      <h3>Bikes</h3>
      <p>Filter by:</p>
      <ul className="list-unstyled">
        <FilterItems
          key={data.length}
          text="Show All"
          numberOfBikes={data.length}
          onClick={() => handleFilterClick(null)}
          active={selectedFilter === null}
        />
      </ul>
      <hr />
      <p className="font-weight-bold">Gender</p>
      <ul className="list-unstyled">
        {genderFilters.map((gender) => (
          <FilterItems
            key={gender}
            text={gender}
            numberOfBikes={calculateBikeCountByGender(gender)}
            onClick={() => handleFilterClick(gender.toLowerCase())}
            active={selectedFilter === gender.toLowerCase()}
          />
        ))}
      </ul>
      <hr />
      <p className="font-weight-bold">Brand</p>
      <ul className="list-unstyled text-uppercase ">
        {brandFilters.map((brand) => (
          <FilterItems
            key={brand}
            text={brand}
            numberOfBikes={calculateBikeCountByBrand(brand)}
            onClick={() => handleFilterClick(brand.toLowerCase())}
            active={selectedFilter === brand.toLowerCase()}
          />
        ))}
      </ul>
    </div>
  );
}
