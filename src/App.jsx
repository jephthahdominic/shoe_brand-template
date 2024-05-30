import { Hero, PopularProducts, CustomerReviews, Footer, Services, SpecialOffer, Subscribe, SuperQuality } from "./sections/index";
import Nav from "./components/Nav";
import SideNav from "./components/SideNav";
import { useState } from "react";

const App = () => {
  const [sideBarState, setSideBarState] = useState(false)
  return(
    <main className="relative">
      <Nav 
        openSideBar = {(open)=>setSideBarState(open)}
      />
      <div className={`fixed z-50 w-screen h-screen 
      bg-darkTransparent justify-end ${sideBarState?'flex':'hidden'}
      transition ease-in-out delay-150
      ${!sideBarState ? 'invisible':'visible'}`}>
        <SideNav 
          openSideBar = {(close)=>setSideBarState(close)}
          sideBarState = {sideBarState}
        />
      </div>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero/>
      </section>
      <section className="padding">
        <PopularProducts/>
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
      <section className="padding bg-pale-blue">
        <CustomerReviews/>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe/>
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer/>
      </section>
    </main>
  )
  
}

export default App;