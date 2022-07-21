import { useEffect, useState } from "react";
import { DEMANDA_2021_ANDALUCIA_URL } from "../settings";
import Chart from "react-apexcharts";

export default function Demanda() {
  const [valoresDemanda, setValoresDemanda] = useState([]);

  useEffect(() => {
    const fetchData = async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      const values = await data.included[0].attributes.values.map(
        (month) => month.value
      );
      setValoresDemanda(values);
    };
    fetchData(DEMANDA_2021_ANDALUCIA_URL);
  }, []);

  const options = {
    chart: {
      id: "basic-bar",
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
      name: "Mw",
      data: valoresDemanda,
    },
  ];
  return (
    <div>
      <h2>Evolución mensual de la demanda: Año 2021</h2>
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
