import { useEffect, useState, useRef } from "react"
import { Box } from "@mui/material"

type Props = {
  src: string
}

const Image = ({ src }: Props) => {
  const [showImage, setShowImage] = useState(false)
  const ref = useRef<HTMLDivElement>()
  const [coords, setCoords] = useState<{
    top: number
    left: number
  }>({
    top: 0,
    left: 0,
  })
  useEffect(() => {
    if (ref?.current) {
      const newCoords = ref.current.getBoundingClientRect()
      setCoords({
        top: newCoords.top,
        left: newCoords.left,
      })
    }
  }, [ref, showImage])

  return (
    <Box
      position="relative"
      sx={{
        m: "0.5rem auto",
      }}
    >
      <Box
        sx={{
          height: showImage ? "70vh" : "auto",
          maxHeight: "70vh",
          width: showImage ? "90vw" : "100%",
          maxWidth: "90vw",
          position: "absolute",
          zIndex: 1000,
          top: showImage ? `calc(${-coords.top}px + 15vh)` : 0,
          left: showImage ? `calc(${-coords.left}px + 5vw)` : 0,
          right: 0,
          bottom: 0,
          transition: "all .4s ease-out",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        ref={ref}
      >
        <Box
          sx={{
            width: "100%",
            maxHeight: "70vh",
            maxWidth: "90vw",
            objectFit: "contain",
            cursor: showImage ? "zoom-out" : "zoom-in",
          }}
          component="img"
          alt="Article Image"
          src={src}
          onClick={() => {
            setShowImage(!showImage)
          }}
        />
      </Box>
      <Box
        component="img"
        sx={{
          height: "auto",
          width: "100%",
          position: "static",
          opacity: showImage ? 0 : 1,
        }}
        alt="Article Image"
        src={src}
      />
    </Box>
  )
}

export default Image
