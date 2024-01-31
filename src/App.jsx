
import './App.css'

import { HashRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Routes/home.route.jsx';
import { Footer } from './components/footer/Footer.jsx';
import { AboutUs } from './Routes/aboutUs/about-us.router.jsx';
import { TaxAccounting } from './Routes/Service.Routes/tax-accounting.router.jsx';
import { CorporateService } from './Routes/Service.Routes/corporate-service.router.jsx';
import { RealEstateSupport } from './Routes/Service.Routes/realEstate-support.router.jsx';
import { TrustSupport } from './Routes/Service.Routes/trust-support.router.jsx';
import { WealthManagement } from './Routes/Service.Routes/wealth-management.router.jsx';
import { ContactUs } from './Routes/contact-us.router.jsx';
import { EmployeeBenefits } from './Routes/employee.router.jsx';

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about_us' element={<AboutUs/>}></Route>
          <Route path='/tax_accounting' element={<TaxAccounting/>}></Route>
          <Route path='/corporate' element={<CorporateService/>}></Route>
          <Route path='/realEstate' element={<RealEstateSupport/>}></Route>
          <Route path='/trust_support' element={<TrustSupport/>}></Route>
          <Route path='/wealth_management' element={<WealthManagement/>}></Route>
          <Route path='/contacts' element={<ContactUs/>}></Route>
          <Route path='/employee' element={<EmployeeBenefits/>}></Route>
          <Route path='*' element={"Not Found"}></Route>
        </Routes>
      <Footer/>
      </HashRouter>
    </>
  )
}

export default App
