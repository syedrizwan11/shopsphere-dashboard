import {
  AnalyticalSlider,
  LargeHeading,
  MultipleLineChart,
  MultipleLineChartProps,
  SmallText,
} from "@/components/ui"

type ChartKeys = "averageSaleValue" | "totalOrders"

const chartData: MultipleLineChartProps<ChartKeys>["chartData"] = [
  { month: "January", averageSaleValue: 200, totalOrders: 120 },
  { month: "February", averageSaleValue: 220, totalOrders: 150 },
  { month: "March", averageSaleValue: 210, totalOrders: 230 },
  { month: "April", averageSaleValue: 230, totalOrders: 160 },
  { month: "May", averageSaleValue: 225, totalOrders: 140 },
  { month: "June", averageSaleValue: 240, totalOrders: 155 },
  { month: "July", averageSaleValue: 250, totalOrders: 170 },
  { month: "August", averageSaleValue: 260, totalOrders: 180 },
  { month: "September", averageSaleValue: 245, totalOrders: 160 },
  { month: "October", averageSaleValue: 270, totalOrders: 190 },
  { month: "November", averageSaleValue: 265, totalOrders: 175 },
  { month: "December", averageSaleValue: 280, totalOrders: 200 },
]

export const Dashboard = () => {
  return (
    <div>
      <LargeHeading>Dashboard</LargeHeading>
      <SmallText>Dashboard</SmallText>
      <div className="flex gap-8 sm:flex-row flex-col mt-6">
        <div className="basis-3/5 flex flex-col gap-2">
          <AnalyticalSlider />
          <MultipleLineChart
            chartData={chartData}
            chartColors={{
              averageSaleValue: "var(--color-lime-400)",
              totalOrders: "var(--color-blue-500)",
            }}
          />
        </div>
      </div>
    </div>
  )
}
