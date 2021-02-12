const [coordinates, setCoordinates] = useState({
  longitude: null,
  latitude: null,
})

const getCoordinates = () => {
  if (navigator) {
    const location = navigator.geolocation.getCurrentPosition(position => {
      const { longitude, latitude } = position.coords
      setCoordinates({ longitude, latitude })
    })

    const movingLocation = navigator.geolocation.watchPosition(position => {
      console.log(position)
    })

    console.log(navigator)
  } else {
    console.log("no window")
  }
}

useEffect(() => {
  console.log(coordinates)
}, [coordinates])

<Button variant="outlined" color="primary" onClick={getCoordinates}>
  get coordinates
</Button>
