import { Link, Typography } from "@mui/material"

function SupportPage() {
  return (
    <>
      <Typography variant="h4">Помощь</Typography>
      <Typography sx={{ mt: 2, mb: 1 }}>
        Возникли вопросы? Напишите нам:{" "}
        <Link href="mailto:news@support.com" underline="hover">
          news@support.com
        </Link>
      </Typography>
      <Typography sx={{ mt: 2 }} textAlign="justify">
        Телефон: +7(999) 999-50-50
      </Typography>
      <Typography sx={{ mt: 2 }} textAlign="justify">
        Адрес: News офис 111, 3 этаж, ​Льва Толстого, 19 Центральный район,
        Хабаровск, 680000
      </Typography>
      <Typography sx={{ mt: 1 }} textAlign="justify">
        Информация, указанная на данном сайте представляется как публичная
        информация (если иное не указано в материалах) и может свободно
        распространяться, или копироваться для некоммерческого использования в
        информационных, научных, учебных или культурных целях.
      </Typography>
    </>
  )
}

export default SupportPage
