"use client"

import { BarChart } from "@/components/ui/bar-chart"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, DollarSign, PackageSearch, ShoppingCart } from "lucide-react"

export default function DashboardPage() {
  const metrics = [
    {
      title: "Total Revenue",
      value: "₹10,865,547.08",
      subtitle: "(Last 30 Days)",
      icon: <DollarSign className="w-6 h-6 text-emerald-500" />,
      iconBg: "bg-emerald-50",
    },
    {
      title: "Total Order",
      value: "10",
      subtitle: "(Last 30 Days)",
      icon: <ShoppingCart className="w-6 h-6 text-pink-500" />,
      iconBg: "bg-pink-50",
    },
    {
      title: "Todays Revenue",
      value: "₹0.00",
      subtitle: "",
      icon: <PackageSearch className="w-6 h-6 text-yellow-500" />,
      iconBg: "bg-yellow-50",
    },
    {
      title: "Total Shops",
      value: "161",
      subtitle: "",
      icon: <Building2 className="w-6 h-6 text-blue-500" />,
      iconBg: "bg-blue-50",
    },
  ]

  const chartData = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        data: [8000000, 6000000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "#2DD4BF",
      },
    ],
  }

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {metrics.map((metric, index) => (
          <Card key={index}>
            <CardContent className="flex items-center p-6">
              <div className={`${metric.iconBg} p-3 rounded-full mr-4`}>{metric.icon}</div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">{metric.title}</h3>
                <p className="text-2xl font-semibold">{metric.value}</p>
                {metric.subtitle && <p className="text-sm text-gray-500">{metric.subtitle}</p>}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Sale History</h3>
          <div className="h-[400px]">
            <BarChart data={chartData} />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

