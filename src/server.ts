import app from "./app"

const port = 3000

async function main() {
  try {
    app.listen(port, () => {
      console.log(`server is running on http://localhost:${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

main()
