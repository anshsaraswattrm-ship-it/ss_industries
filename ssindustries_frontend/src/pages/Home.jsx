import React from 'react';
import Hero from '../components/HomeSections/Hero';
import FeaturedCategories from '../components/HomeSections/FeaturedCategories';
import OurStores from '../components/HomeSections/OurStores';
import NewArrivals from '../components/HomeSections/NewArrivals';
import ShopByRooms from '../components/HomeSections/ShopByRooms';
import LiveVideoBanner from '../components/HomeSections/LiveStoreBanner';
import CuratedCraftsmanship from '../components/HomeSections/CuratedCraftsmanship';
import BulkOrderBanner from '../components/HomeSections/BulkOrderBanner';
import Testimonials from '../components/HomeSections/Testimonials';
import FAQ from '../components/HomeSections/Faq';
import Gallery from '../components/HomeSections/Gallery';

function Home() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* 1. Hero Section - The Premium Banner */}
      <Hero />
      
      {/* 2. Featured Categories Section */}
      <FeaturedCategories />
      <OurStores />
      <NewArrivals />
      <Gallery />
      <LiveVideoBanner />
      <ShopByRooms />
      <BulkOrderBanner />
      <CuratedCraftsmanship />
      <Testimonials />
      <FAQ />
    </div>
  );
}

export default Home;