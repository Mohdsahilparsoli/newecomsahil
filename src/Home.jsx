import { useProductprovider } from "./context/Appprovider"


const Home = () => {
  const data = useProductprovider()
  console.log(data)
  return (
<>
<h1> hi sahil</h1>
</>
  )
}

export default Home