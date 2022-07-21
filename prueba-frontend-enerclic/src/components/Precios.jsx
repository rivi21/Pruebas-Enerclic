import React, { useEffect, useState } from "react";
import { PRECIOS_2021_URL } from "../settings";
import Chart from "react-apexcharts";

export default function Precios() {
  const [precios, setPrecios] = useState([]);
  useEffect(() => {
    const fetchData = async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      const prices = await data.included[0].attributes.values.map(
        (month) => month.value
      );
      setPrecios(prices);
    };
    fetchData(PRECIOS_2021_URL);
  }, []);
  const options = {
    chart: {
      id: "line",
    },
    xaxis: {
      categories: [
        "ENE",
        "FEB",
        "MAR",
        "ABR",
        "MAY",
        "JUN",
        "JUL",
        "AGO",
        "SEP",
        "OCT",
        "NOV",
        "DIC",
      ],
    },
  };
  const series = [
    {
      name: "Precios",
      data: precios,
    },
  ];
  return (
    <div>
      <h2>Precio total (€/MWh) : Año 2021</h2>
      <Chart
        options={options}
        series={series}
        type="bar"
        width="90%"
        height="150%"
      />
    </div>
  );
}
