import app from "./app"

async function main() {
  try {
    app.listen(process.env.PORT, () => {
      console.log(`server is running on http://localhost:${process.env.PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

main()
