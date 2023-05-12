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
      <Typography textAlign="justify">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
        nisi dolor dicta dolores laudantium, nulla voluptatem ipsam at
        cupiditate sint doloremque atque nobis illum explicabo aspernatur
        ratione tenetur dignissimos saepe!
      </Typography>
    </>
  )
}

export default SupportPage
