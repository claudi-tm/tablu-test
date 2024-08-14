import { Box } from "../components/box"

export const Main = () => {
  return(
    <div className="flex items-center w-full h-screen border justify-center">
      <div className="grid grid-cols-2 gap-2">
      <Box text="1" className="bg-custom-orange/5 "></Box>
      <Box text="2" className="bg-custom-orange/15"></Box>
      <Box text="3" className="bg-custom-orange/5"></Box>
      <Box text="4" className="bg-custom-orange/15"></Box>
      </div>
     
    </div>
  )
}