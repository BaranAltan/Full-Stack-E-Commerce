import Categories from "../components/Categories/Categories.jsx"
import Products from "../components/Products/Products.jsx";
import Slider from '../components/Slider/Slider.jsx'
import Campaigns from "../components/Campaigns/Campaigns";
import Blogs from "../components/Blogs/Blogs";
import Brands from "../components/Brands/Brands";
import CampaignSingle from "../components/CampaignSingle/CampaignSingle";

function HomePage() {
  return (
    <div>
      <Slider/>
      <Categories/>
      <Products/>
      <Campaigns/>
      <Products/>
      <Blogs />
      <Brands />
      <CampaignSingle/>   
    </div>
  )
}

export default HomePage
