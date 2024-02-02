import { Route } from "react-router-dom"
import { TaxAccounting } from '../Routes/Service.Routes/tax-accounting.router.jsx';
import { CorporateService } from '../Routes/Service.Routes/corporate-service.router.jsx';
import { RealEstateSupport } from '../Routes/Service.Routes/realEstate-support.router.jsx';
import { TrustSupport } from '../Routes/Service.Routes/trust-support.router.jsx';
import { WealthManagement } from '../Routes/Service.Routes/wealth-management.router.jsx';

export const ServicesRoute = () => {
  return (
    <Route>
      <Route path='tax_accounting' element={<TaxAccounting />}></Route>
      <Route path='corporate' element={<CorporateService />}></Route>
      <Route path='realEstate' element={<RealEstateSupport />}></Route>
      <Route path='trust_support' element={<TrustSupport />}></Route>
      <Route path='wealth_management' element={<WealthManagement />}></Route>
    </Route>
  )
}