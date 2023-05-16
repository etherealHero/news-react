import dayjs from "dayjs"

type Props = {
  date: string
}

const DateFormat = ({ date }: Props) => {
  let dateString = dayjs(date).utc().format("D MMMM, h:mm dd")
  dateString =
    dateString.slice(0, -2) +
    dateString.slice(-2, -1).toUpperCase() +
    dateString.slice(-1)

  return <>{dateString}</>
}

export default DateFormat
