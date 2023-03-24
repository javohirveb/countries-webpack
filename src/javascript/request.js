import loaderToggle from "./loader"

const request = async (recource) => {
   loaderToggle(true)
   const req = await fetch(recource)
   if (!req.ok) {
      loaderToggle(false)
      throw new Error('something went wrong...')
   }
   const data = await req.json()
   loaderToggle(false)

   return data
}

export default request