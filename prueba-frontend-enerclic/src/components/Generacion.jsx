import React, { useEffect, useState } from "react";
import { GENERACION_2021_ANDALUCIA_URL } from "../settings";
import Chart from "react-apexcharts";

export default function Generacion() {
  const [renovable, setRenovable] = useState([]);
  const [noRenovable, setNoRenovable] = useState([]);

  useEffect(() => {
    const fetchData = async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      const valuesR = await data.included[0].attributes.values.map(
        (month) => month.value
      );
      const valuesNoR = await data.included[1].attributes.values.map(
        (month) => month.value
      );
      setRenovable(valuesR);
      setNoRenovable(valuesNoR);
    };
    fetchData(GENERACION_2021_ANDALUCIA_URL);
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
      name: "Renovable",
      data: renovable,
    },
    {
      name: "No Renovable",
      data: noRenovable,
    },
  ];
  return (
    <div>
      <h2>Generación Renovable vs No Renovable: Año 2021</h2>
      <Chart
        options={options}
        series={series}
        type="line"
        width="90%"
        height="150%"
      />
    </div>
  );
}
