import React from "react";
import { Bar } from "react-chartjs-2";

var colors = [];
for (let i = 0; i < 24; i++) {
  colors.push("#2aa198");
}
colors[4] = "#d33682";
colors[23] = "#d33682";

const data = {
  labels: [
    "Iceland",
    "Norway",
    "Sweden",
    "Switzerland",
    "Additional Passenger in ICE Car (24 MPG)",
    "Vermont",
    "France",
    "Washington State",
    "Brazil",
    "Canada",
    "Oregon",
    "Denmark",
    "California",
    "Spain",
    "Alaska",
    "Germany",
    "United States (Overall)",
    "Japan",
    "Texas",
    "China",
    "India",
    "Australia",
    "South Africa",
    "ICE Car (24 MPG)",
  ],
  datasets: [
    {
      label: "Emissions (kg/CO2/mile)",
      data: [
        0.0, 0.003, 0.003, 0.004, 0.006, 0.008, 0.012, 0.023, 0.024, 0.036,
        0.037, 0.054, 0.055, 0.074, 0.114, 0.121, 0.123, 0.126, 0.129, 0.16,
        0.191, 0.231, 0.247, 0.37,
      ],
      backgroundColor: colors,
      borderColor: "#2aa198",
    },
  ],
};

const options = {
  indexAxis: "y",
  plugins: {
    title: {
      display: true,
      text: "EV Emissions vs An Additional ICE Passenger",
      font: {
        size: 18,
      },
      padding: 30,
    },
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
      stacked: true,
    },
    y: {
      grid: {
        display: false,
        drawBorder: false,
      },
      stacked: true,
    },
  },
};

export const ICEChart = () => {
  return <Bar data={data} options={options} height={"400em"} />;
};
