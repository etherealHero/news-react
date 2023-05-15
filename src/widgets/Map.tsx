import { useState } from "react"
import { YMaps, Map as YMap, Placemark } from "@pbe/react-yandex-maps"
import { Skeleton } from "@mui/material"

const Map = () => {
  const [isLoad, setIsLoad] = useState(false)

  const defaultState = {
    center: [48.485395, 135.067192],
    zoom: 13.5,
    controls: ["zoomControl", "fullscreenControl"],
  }

  return (
    <>
      {!isLoad && (
        <Skeleton
          variant="rectangular"
          height={240}
          width="100%"
          animation="wave"
          sx={{ mb: "-240px" }}
        />
      )}
      <YMaps query={{ apikey: "2184a6e9-dd19-4b83-9959-7cbe937df716" }}>
        <YMap
          defaultState={defaultState}
          modules={["control.ZoomControl", "control.FullscreenControl"]}
          width="100%"
          onLoad={() => setIsLoad(true)}
        >
          <Placemark
            modules={["geoObject.addon.balloon"]}
            defaultGeometry={[48.485395, 135.067192]}
            properties={{
              balloonContentBody:
                "News офис 111, 3 этаж, ​Льва Толстого, 19 Центральный район, Хабаровск, 680000",
            }}
            // instanceRef={(ref) => ref && ref.balloon.open()}
          />
        </YMap>
      </YMaps>
    </>
  )
}

export default Map
