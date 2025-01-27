"use client"

import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        callback: (value: number) => `${(value / 1000000).toFixed(1)}M`,
      },
    },
  },
}

interface BarChartProps {
  data: {
    labels: string[]
    datasets: {
      data: number[]
      backgroundColor: string
    }[]
  }
}

export function BarChart({ data }: BarChartProps) {
  return <Bar options={options} data={data} />
}

