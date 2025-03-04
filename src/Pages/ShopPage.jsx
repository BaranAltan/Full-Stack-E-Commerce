import Categories from "../components/Categories/Categories.jsx"
import Footer from '../components/Layout/Footer/Footer.jsx'
import Header from '../components/Layout/Header/Header.jsx'
import Products from "../components/Products/Products.jsx";
import CampaignSingle from "../components/CampaignSingle/CampaignSingle";

function ShopPage() {
  return (
    <div>
        <Header />
        <Categories />
        <Products />
        <CampaignSingle />
        <Products />
        <Footer />
    </div>
  )
}

export default ShopPage
