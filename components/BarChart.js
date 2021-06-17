import { ChevronDownIcon } from "@heroicons/react/outline";
import { Bar } from "react-chartjs-2";

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  animation: {
    duration: 10,
  },
  scales: {
    xAxes: {
      stacked: true,
    },
    yAxes: {
      stacked: false,
      ticks: {
        callback: function (label, index, labels) {
          return label + " HR";
        },
        stepSize: 10,
      },
    },
  },
};

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Practice",
      barThickness: 40,
      data: [40, 20, 30, 20, 10, 30, 20, 30, 10, 30, 20, 40],
      backgroundColor: "#2C71FF",
    },
    {
      label: "Theory",
      barThickness: 40,
      data: [50, 40, 40, 50, 30, 50, 30, 40, 30, 40, 30, 50],
      backgroundColor: "#E5F6FF",
    },
  ],
};

const BarChart = () => (
  <div className="w-full max-w-4xl p-6 border border-white-100 rounded-xl shadow-sm">
    <div className="flex items-center">
      <div className="w-7/12">Your Activities</div>
      <div className="flex w-5/12 justify-between">
        <div className="flex">
          <div className="flex items-center mr-6">
            <div className="w-2 h-2 bg-blue-50 rounded-full"></div>
            <p className="text-xs ml-2">Theory</p>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-blue rounded-full"></div>
            <p className="text-xs ml-2">Practice</p>
          </div>
        </div>
        <div className="relative inline-flex cursor-pointer">
          <ChevronDownIcon className="w-4 h-4 text-gray-50 absolute top-0 right-0 m-2" />
          <select className="border border-gray-50 rounded-lg text-gray-50 pl-4 pr-8 py-2 appearance-none text-xs">
            <option value="2021">2021</option>
          </select>
        </div>
      </div>
    </div>
    <div className="mt-6">
      <Bar data={data} options={options} height={225} width={800} />
    </div>
  </div>
);

export default BarChart;