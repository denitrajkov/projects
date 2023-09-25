import { useEffect, useState } from "react";
import Card, { BicycleType } from "./Card";
import Menu from "./Menu";

export default function CardCont() {
  const [data, setData] = useState<BicycleType[]>([]);
  const [filter, setFilter] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://challenges.brainster.tech/ajax_data/data.json")
      .then((res) => res.json())
      .then((data) => setData(data.products))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const calculateBikeCountByCriteria = (criteria: string, value: string) => {
    return data.reduce((count, item) => {
      if (item[criteria].toLowerCase() === value.toLowerCase()) {
        return count + 1;
      }
      return count;
    }, 0);
  };

  const handleFilterChange = (value: string | null) => {
    setFilter(value);
  };

  const filteredData = filter
    ? data.filter((item) => {
        const brandFilter = item.brand.toLowerCase() === filter;
        const genderFilter = item.gender.toLowerCase() === filter;
        return brandFilter || genderFilter;
      })
    : data;

  return (
    <div className="container-fluid py-5">
      <div className="row">
        <Menu
          data={data}
          onFilterChange={handleFilterChange}
          calculateBikeCountByBrand={(brand) =>
            calculateBikeCountByCriteria("brand", brand)
          }
          calculateBikeCountByGender={(gender) =>
            calculateBikeCountByCriteria("gender", gender)
          }
        />
        <div className="col-10">
          <div className="row">
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <Card key={index} bicycle={item} />
              ))
            ) : (
              <div>No matching items found.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
