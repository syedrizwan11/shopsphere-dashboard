import React from "react"
import { Card, CardContent, CardHeader } from "../primitives/card"
import { SmallHeading, SmallText } from "."
import { Slider } from "../primitives/slider"

export const AnalyticalSlider = () => {
  const heading = "Sales Target"
  const targetValue = 50000000
  const completedValue = 23103244
  return (
    <Card>
      <CardHeader>
        <SmallHeading>{heading}</SmallHeading>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between pb-2">
          <div>
            <SmallText>Target Achieved</SmallText>
            <SmallHeading>{completedValue}</SmallHeading>
          </div>
          <div>
            <SmallText>Total Target</SmallText>
            <SmallHeading>{targetValue}</SmallHeading>
          </div>
        </div>

        <Slider min={0} max={targetValue} disabled value={[completedValue]} />
      </CardContent>
    </Card>
  )
}
