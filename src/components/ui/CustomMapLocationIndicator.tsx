"use client"

import "leaflet/dist/leaflet.css"
import type * as Leaflet from "leaflet"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader } from "../primitives/card"
import ReactDOMServer from "react-dom/server"

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
)
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
)
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
})

interface CustomMapLocationIndicatorProps {
  mapFor: string
  heading: React.ReactNode
  mapData: {
    name: string
    coords: number[]
    value: number
    color?: string
  }[]
}

export const CustomMapLocationIndicator = ({
  heading,
  mapFor,
  mapData,
}: CustomMapLocationIndicatorProps) => {
  const [leaflet, setLeaflet] = useState<typeof Leaflet | null>(null)

  useEffect(() => {
    import("leaflet").then((leaflet) => setLeaflet(leaflet))
  }, [])

  return (
    <Card className="w-full overflow-hidden">
      <CardHeader>
        <div className="mb-4">{heading}</div>
        <div className="flex justify-between gap-2 flex-wrap">
          {mapData.map((el) => (
            <div key={el.name} className="flex gap-2 items-center">
              <div
                className={`bg-${el.color} green rounded-full p-2 w-fit h-fit`}
              />
              <div>{el.name}</div>
            </div>
          ))}
        </div>
      </CardHeader>

      <CardContent className="w-full">
        {leaflet ? (
          <MapContainer
            center={[30.3753, 69.3451]}
            zoom={4}
            style={{ borderRadius: "12px", height: "220px" }}
            scrollWheelZoom={false}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {mapData.map((loc, i) => (
              <Marker
                key={"location-map" + i.toString()}
                position={loc.coords as [number, number]}
                icon={
                  new leaflet.DivIcon({
                    html: ReactDOMServer.renderToString(
                      <div
                        className={`bg-${loc.color} green rounded-full p-2 w-fit h-fit`}
                      />
                    ),
                    className: "",
                    iconSize: [32, 32],
                    iconAnchor: [10, 20],
                    popupAnchor: [0, -32],
                  })
                }
              >
                <Popup>
                  {mapFor} : {loc.value}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        ) : (
          <div>Loading Map...</div>
        )}
      </CardContent>
    </Card>
  )
}
