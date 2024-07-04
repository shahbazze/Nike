import { Customerreviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  SuperQuality,
  Subscribe} from "./Sections"
import Nav from "./Components/Nav";
const app=()=>(
  <main className="relative">
    <Nav/>
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className="padding">
      <PopularProducts/>
    </section>
    <section className="padding">
     <SuperQuality/>
    </section>
    <section className="padding py-10">
      <Services/>
    </section>
    <section className="padding">
     <SpecialOffer/>
    </section>
    <section className="padding bg-pale-blue">
     <Customerreviews/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
    <Subscribe/>
    </section>
    <section className="padding-x bg-black padding-t pb-8">
     <Footer/>
    </section>

  
  </main>
);

export default app;