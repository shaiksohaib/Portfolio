import Particles from "react-particles-js"
const Particles1 = () => {
    return (
        <>
             <Particles
      params={{
        particles: {
            
          number:{
            value:30,
            density: {
              enable:true,
              value_area:900
            }
          },
          shape:{
            type: "circle",
            stroke:{
              width:3,
              color:"#f9ab00"
            }
          }
        }
      }}
      />
        </>
    )
}

export default Particles1
