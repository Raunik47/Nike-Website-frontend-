import Hero from "./sections/Hero";
import Nav from "./component/Nav";
import PopularProduct from "./sections/PopularProduct";
import SuperQuality from "./sections/SuperQuality"; 
import SpecialOffer from "./sections/specialOffer";
import  Fotter  from "./sections/Footer";
import Services from "./sections/Services"
import CustomerReview from "./sections/CustomerReview";
import Subscribe from "./sections/Subscribe";



const App  = () => (
<main className="relative">
 <Nav/>
 
<section className="xl:padding-l wide:padding-b">
<Hero/>

</section>

<section className="padding">

<PopularProduct/>

</section>
<section className="padding">
<SuperQuality/>
</section>

<section className="padding-x py-10">
<Services/>
</section>

<section className="padding">
<SpecialOffer/>

</section>

<section className="padding bg-pale-blue padding">
<CustomerReview/>
</section>

<section className="padding-x sm:py-32 py-16 w-full">
<Subscribe/>
</section>

<section className="  bg-black padding-x padding-t pb-8">
  <Fotter/>
</section>

</main>
);

export default App;