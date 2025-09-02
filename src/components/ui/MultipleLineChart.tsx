"use client"

import React, { useMemo } from "react"

import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/primitives/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/primitives/chart"

export const description = "A multiple line chart"

export interface MultipleLineChartProps<K extends string = string> {
  chartData: Array<{ month: string } & Record<K, number>>
  chartColors: Record<K, string>
}

export const MultipleLineChart = <K extends string = string>({
  chartData,
  chartColors,
}: MultipleLineChartProps<K>) => {
  const keyLabels = useMemo(
    () =>
      chartData.length
        ? (Object.keys(chartData[0]).filter((k) => k !== "month") as K[])
        : [],
    [chartData]
  )

  const chartConfig = useMemo(() => {
    const chart: ChartConfig = {}
    keyLabels.forEach((el) => {
      const label = el as string
      chart[label] = { label }
    })
    return chart
  }, [keyLabels])
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Sales this year</CardTitle>
        <CardDescription>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-sm bg-lime-400"></span>
              <span className="text-sm ">Average Sale Value</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-sm bg-blue-500"></span>
              <span className="text-sm">Total Orders Per Month</span>
            </div>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[150px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={1}
              tickFormatter={(value) => value.slice(0, 3)}
              interval="preserveStartEnd"
            />

            <ChartTooltip content={<ChartTooltipContent />} />
            {keyLabels.map((el) => (
              <Line
                key={el}
                dataKey={el}
                type="monotone"
                stroke={chartColors[el]}
                strokeWidth={2}
                dot={false}
              />
            ))}
          </LineChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="text-muted-foreground flex items-center gap-2 leading-none">
              Showing total visitors for the last 6 months
            </div>
          </div>
        </div>
      </CardFooter> */}
    </Card>
  )
}
