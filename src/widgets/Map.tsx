import { YMaps, Map as YMap, Placemark } from "@pbe/react-yandex-maps"
const Map = () => {
  const defaultState = {
    center: [48.485395, 135.067192],
    zoom: 13.5,
    controls: ["zoomControl", "fullscreenControl"],
  }

  return (
    <YMaps query={{ apikey: "2184a6e9-dd19-4b83-9959-7cbe937df716" }}>
      <YMap
        defaultState={defaultState}
        modules={["control.ZoomControl", "control.FullscreenControl"]}
        width="100%"
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
  )
}

export default Map
