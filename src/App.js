import React, { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Loading } from "./components";

import {authtoken_save} from "./store/actions/auth";

// page imports
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Login = lazy(() => import("./pages/Auth/Login"));
const CarbonCredits = lazy(() => import("./pages/Credits/CarbonCredits"));
const Register = lazy(() => import("./pages/Auth/Register"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const CustomerPurchase = lazy(() => import("./pages/Auth/CustomerPurchase"));
const LandOwnerAuth = lazy(() => import("./pages/Auth/LandOwnerAuth"));
const PurchaseCredits = lazy(() => import("./pages/Auth/PurchaseCredits"));

// Customers
const CustomerListings = lazy(() =>
  import("./roles/Customer/Pages/CustomerListings")
);
const CustomerDetail = lazy(() =>
  import("./roles/Customer/Pages/CustomerDetails")
);
const CustomerDashboards = lazy(() =>
  import("./roles/Customer/Pages/CustomerDashboards")
);
const CustomerLands = lazy(() =>
  import("./roles/Customer/Pages/CustomerLands")
);

// company pages
const CompanySettings = lazy(() =>
  import("./roles/Company/Pages/CompanySettings")
);
const CompanyHistorys = lazy(() =>
  import("./roles/Company/Pages/CompanyHistorys")
);
const CompanyDetails = lazy(() =>
  import("./roles/Company/Pages/CompanyDetails")
);

// admin pages
// CreateBrokers;
const CreateBrokers = lazy(() => import("./roles/Admin/pages/CreateBrokers"));
const Brokers = lazy(() => import("./roles/Admin/pages/Brokers"));
const WireTransfers = lazy(() => import("./roles/Admin/pages/WireTranfers"));
const CreditBuyers = lazy(() => import("./roles/Admin/pages/CreditBuyers"));
const LandOwners = lazy(() => import("./roles/Admin/pages/LandOwners"));
const AdminDashboards = lazy(() =>
  import("./roles/Admin/pages/AdminDashboards")
);
const AuditedListings = lazy(() =>
  import("./roles/Admin/pages/AuditedListings")
);
const NewListings = lazy(() => import("./roles/Admin/pages/NewListings"));
const CarbonListings = lazy(() => import("./roles/Admin/pages/CarbonListings"));
const NewCarbonListings = lazy(() =>
  import("./roles/Admin/pages/NewCarbonListings")
);

// BROKER
// BrokerDashboard;
const BrokerDashboards = lazy(() =>
  import("./roles/Broker/Pages/BrokerDashboards")
);

//ARBORISTS

const ArboristDashboards = lazy(() =>
  import("./roles/Arborist/pages/ArboristDashboards")
);
const CompletedProjects = lazy(() =>
  import("./roles/Arborist/pages/CompletedProjects")
);
const PendingProjects = lazy(() =>
  import("./roles/Arborist/pages/PendingProjects")
);

//Layouts
const ArboristLayout = lazy(() => import("./roles/Arborist/UI/Layout"));
const AdminLayout = lazy(() => import("./roles/Admin/UI/Layout"));
const BrokerLayout = lazy(() => import("./roles/Broker/UI/Layout"));
const CustomerLayout = lazy(() => import("./roles/Customer/UI/Layout"));
const CompanyLayout = lazy(() => import("./roles/Company/UI/Layout"));

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((store) => store.auth);

  useEffect(() => {
    dispatch(authtoken_save("auth token saved"));
  }, []);

  useEffect(() => {
    console.log(auth, " ==> ");
  }, [auth]);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/carbon-credit">
            <CarbonCredits />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/purchase-carbonCredits">
            <PurchaseCredits />
          </Route>
          <Route exact path="/customer-purchase">
            <CustomerPurchase />
          </Route>
          <Route exact path="/land-owner">
            <LandOwnerAuth />
          </Route>
          {/* display routes dynamically */}

          {/* customer routes */}
          <Route exact path="/customer-listing">
            <CustomerLayout>
              <CustomerListings />
            </CustomerLayout>
          </Route>
          <Route exact path="/customer/:id">
            <CustomerLayout>
              <CustomerDetail />
            </CustomerLayout>
          </Route>
          <Route exact path="/customer-land">
            <CustomerLayout>
              <CustomerLands />
            </CustomerLayout>
          </Route>
          <Route exact path="/customer-dashboard">
            <CustomerLayout>
              <CustomerDashboards />
            </CustomerLayout>
          </Route>

          {/* company routes */}
          <Route exact path="/company-settings">
            <CompanyLayout>
              <CompanySettings />
            </CompanyLayout>
          </Route>
          <Route exact path="/company-purchase/:id">
            <CompanyLayout>
              <CompanyDetails />
            </CompanyLayout>
          </Route>
          <Route exact path="/company-history">
            <CompanyLayout>
              <CompanyHistorys />
            </CompanyLayout>
          </Route>

          <Route exact path="/admin-dashboard">
            <AdminLayout>
              <AdminDashboards />
            </AdminLayout>
          </Route>
          <Route exact path="/brokers">
            <AdminLayout>
              <Brokers />
            </AdminLayout>
          </Route>
          <Route exact path="/carbon-listings">
            <AdminLayout>
              <CarbonListings />
            </AdminLayout>
          </Route>
          <Route exact path="/create-brokers">
            <AdminLayout>
              <CreateBrokers />
            </AdminLayout>
          </Route>
          <Route exact path="/wire-transfers">
            <AdminLayout>
              <WireTransfers />
            </AdminLayout>
          </Route>
          <Route exact path="/credit-buyers">
            <AdminLayout>
              <CreditBuyers />
            </AdminLayout>
          </Route>
          <Route exact path="/land-owners">
            <AdminLayout>
              <LandOwners />
            </AdminLayout>
          </Route>
          <Route exact path="/audited-listings">
            <AdminLayout>
              <AuditedListings />
            </AdminLayout>
          </Route>
          <Route exact path="/new-listings">
            <AdminLayout>
              <NewListings />
            </AdminLayout>
          </Route>
          {/* broker routes */}

          {/* ArboristLayout Pages */}
          <Route exact path="/arborist-dashboard">
            <ArboristLayout>
              <ArboristDashboards />
            </ArboristLayout>
          </Route>
          <Route exact path="/carbon-listings">
            <ArboristLayout>
              <CarbonListings />
            </ArboristLayout>
          </Route>
          <Route exact path="/create-carbon">
            <ArboristLayout>
              <NewCarbonListings />
            </ArboristLayout>
          </Route>
          <Route exact path="/pending-projects">
            <ArboristLayout>
              <PendingProjects />
            </ArboristLayout>
          </Route>
          <Route exact path="/completed-projects">
            <ArboristLayout>
              <CompletedProjects />
            </ArboristLayout>
          </Route>
          {/* BROKER */}

          <Route exact path="/broker-dashboard">
            <BrokerLayout>
              <BrokerDashboards />
            </BrokerLayout>
          </Route>

          <Route exact path="/carbon-listings">
            <BrokerLayout>
              <CarbonListings />
            </BrokerLayout>
          </Route>

          <Route exact path="/land-owners">
            <BrokerLayout>
              <LandOwners />
            </BrokerLayout>
          </Route>

          <Route exact path="/credit-buyers">
            <BrokerLayout>
              <CreditBuyers />
            </BrokerLayout>
          </Route>

          <Route exact path="/create-carbon">
            <BrokerLayout>
              <NewCarbonListings />
            </BrokerLayout>
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
