import { services } from "../constants"
import ServiceCard from "../component/ServiceCard"
const Services = () => {
  return (
    <section className=' mx-container flex justify-center   flex-wrap gap-9'>
      {services.map((service) =>(

        <ServiceCard key={service.label}
        {...service}/>


      ))}






    </section>
  )
}

export default Services