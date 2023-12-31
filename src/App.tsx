// import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Categories from "./pages/categories/Category";
import { Route, Routes } from "react-router-dom";
import SellersProfile from "./pages/SellersProfile";
// import Home from "./pages/landing/Home copy";
import Manufacturers from "./pages/manufacturers/Manufacturers";
import Search from "./pages/search/Search";

import MLogin from "./pages/manufacturersProfile/Login";
// import MLogin from "./pages/manufacturersProfile/Login";

import LoginCustomer from "./pages/auth/login/LoginCustomer";
import MBusiness from "./pages/manufacturersProfile/BusinessInfo";
import EditStore from "./pages/manufacturersProfile/Edit";
import MProduct from "./pages/manufacturersProfile/products/Products";
import MPayment from "./pages/manufacturersProfile/payment/Payment";
import MInbox from "./pages/manufacturersProfile/messages/Inbox";
import Tracking from "./pages/manufacturersProfile/tracking/Track";
import CustomerInfo from "./pages/checkout/Customer";
import ShipmentInfo from "./pages/checkout/Shipment";
import PaymentInfo from "./pages/checkout/Payment";
import Confirmation from "./pages/checkout/Confirmation";
import AddCard from "./pages/manufacturersProfile/payment/Card";
import AddBank from "./pages/manufacturersProfile/payment/Bank";
import AddProduct from "./pages/manufacturersProfile/products/AddProduct";
import EditProduct from "./pages/manufacturersProfile/products/EditProduct";
import SecurityQuestion from "./pages/manufacturersProfile/Security";
import Withdraw from "./pages/manufacturersProfile/payment/Withdraw";
import WalletHistory from "./pages/manufacturersProfile/payment/Wallet";
import CreatePin from "./pages/manufacturersProfile/payment/pin/Create";
import ChangePin from "./pages/manufacturersProfile/payment/pin/Change";
import MChat from "./pages/manufacturersProfile/messages/Chat";
import TrackingProgress from "./pages/manufacturersProfile/tracking/TrackingProgress";
import ConfirmOrder from "./pages/manufacturersProfile/orders/Confirm";
import MBranches from "./pages/manufacturersProfile/Branches/Branches";
import CreateBranch from "./pages/manufacturersProfile/Branches/Create";
import EditBranch from "./pages/manufacturersProfile/Branches/Edit";
import CreateUser from "./pages/manufacturersProfile/Branches/CreateUser";
import Farmers from "./pages/farmers/Farmers";
import FCategories from "./pages/farmers/Category";
import FSearch from "./pages/farmers/Search";
import FarmersFind from "./pages/farmers/Find";
import ProductCart from "./pages/product/Cart";
import PProduct from "./pages/product/Product";
import AuthLogin from "./pages/auth/login/Login";
import AuthSignup from "./pages/auth/signup/Signup";
import AuthOTP from "./pages/auth/signup/OTP";
import AuthReset from "./pages/auth/password/Reset";
import AuthForgot from "./pages/auth/password/Forgot";
import AuthVerify from "./pages/auth/password/Verify";
import AuthSuccessful from "./pages/auth/password/Successful";
import SignupBusiness from "./pages/auth/signup/SignupBusiness";
import { ToastContainer } from "react-toastify";
import AuthOTPBusiness from "./pages/auth/signup/OTPBusiness";
import Plans from "./pages/auth/plans/Plans";
import Subscription from "./pages/manufacturersProfile/subscription/Subscription";
import AuthForgotBusiness from "./pages/auth/password/ForgotBusiness";
import AuthVerifyBusiness from "./pages/auth/password/VerifyBusiness";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import FarmersProduct from "./pages/farmers/Product";
import FarmersCart from "./pages/farmers/Cart";
// import Order from "./components/CustomerProfile/Order";
// import { Login, Inbox } from "@mui/icons-material";
import IndexPage from "./pages/CustomerProfile";
import Address from "./pages/CustomerProfile/Address";
import Cards from "./pages/CustomerProfile/Cards";
import Ratings from "./pages/CustomerProfile/Ratings";
import TrackOrder from "./pages/CustomerProfile/TrackOrder";
import WatchList from "./pages/CustomerProfile/WatchList";
import Saved from "./pages/CustomerProfile/Saved";
import Merchants from "./pages/merchants/Merchants";
import Error from "./pages/errors/Error";
import Report from "./pages/Report/Report";
// import DocPagesLayout from "./components/Documents/Layout";
import Warehouse from "./components/Documents/Warehouse";
import Logistics from "./components/Documents/Logistics";
import CancelledOrder from "./components/Documents/CancelledOrder";
import OrderTracking from "./components/Documents/OrderTracking";
// import SellOnAzany from "./components/Documents/SellOnAzany";
import Avc from "./pages/docs/Avc";
import RefundPolicy from "./pages/docs/RefundPolicy";
import ManufacturersIndex from "./pages/manufacturersProfile";
import Login from "./pages/CustomerProfile/Login";
import Inbox from "./pages/CustomerProfile/Inbox";
import Order from "./pages/CustomerProfile/Order";
import COrdersComponent from "./pages/CustomerProfile/orders/Orders";
import Email from "./pages/email/Email";
import AzanyFarmers from "./pages/landing/AzanyFarmers";
import ManufacturerHomePage from "./pages/landing/ManufacturerHomePage";
import SignupCustomer from "./pages/auth/signup/SignupCustomer";
import Callback from "./pages/checkout/Callback";
import MOrders from "./pages/manufacturersProfile/orders/Orders";
import AddressComponent from "./pages/CustomerProfile/address/Address";
import EditAddressComponent from "./pages/CustomerProfile/address/EditAddress";
import TrackOrdersComponent from "./pages/CustomerProfile/orders/TrackOrders";
import OrderDetailsComponent from "./pages/CustomerProfile/orders/OrderDetails";
import RecentlyViewedComponent from "./pages/CustomerProfile/RecentlyViewed";
import SavedItemsComponent from "./pages/CustomerProfile/SavedItems";
import ReviewsComponent from "./pages/CustomerProfile/Reviews";
import MessagesComponent from "./pages/CustomerProfile/Messages";
import RewardsComponent from "./pages/CustomerProfile/Reward";
import EditPersonalDetailsComp from "./pages/CustomerProfile/EditPersonnalDetails";
import { APP_ROUTE } from "./helpers/constant";
import UpdateAddressComponent from "./pages/CustomerProfile/address/UpdateAddress";

import Home from "./pages/landing/Home";
import RewardGloPoint from "./pages/landing/RewardGloPoint";
import AboutUs from "./pages/landing/AboutUs";
import StoreFront from "./pages/landing/StoreFront";
import SellOnAzany from "./pages/landing/SellOnAzany";

function App() {
  return (
    <div className="">
      <ToastContainer />
      <Routes>
        <Route
          path="*"
          element={
            <Error
              errorType="Page not found"
              image="/images/notfound.svg"
              message="Sorry, the page you are looking for doesn’t exist or has been moved."
            />
          }
        />
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/reward-glo-point" element={<RewardGloPoint />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/store-front/:id" element={<StoreFront />} />
          <Route path="/sell-on-azany" element={<SellOnAzany />} />


          <Route path="login" element={<LoginCustomer />} />
          <Route path="signup" element={<SignupCustomer />} />
          <Route path="manufacturers" element={<Manufacturers />} />
          <Route path="email" element={<Email />} />
          <Route path="merchants" element={<Merchants />} />
          <Route
            path="500"
            element={
              <Error
                errorType="Server error"
                image="/images/server.svg"
                message="Sorry, something went wrong. We are experiencing some technical
            difficulties and are unable to display the requested page at this
            time. Please try again later, or contact our support team if the
            problem persists."
              />
            }
          />
          <Route
            path="404"
            element={
              <Error
                errorType="Page not found"
                image="/images/notfound.svg"
                message="Sorry, the page you are looking for doesn’t exist or has been moved."
              />
            }
          />
          <Route
            path="403"
            element={
              <Error
                errorType="Forbidden"
                image="/images/forbidden.svg"
                message="Sorry, the page you are looking for doesn’t exist or has been moved."
              />
            }
          />
          <Route path="report/vendor" element={<Report type="vendor" />} />
          <Route path="report/product" element={<Report type="product" />} />

          <Route path="docs/warehouse" element={<Warehouse />} />
          <Route path="docs/logistics" element={<Logistics />} />
          <Route path="docs/cancelled-order" element={<CancelledOrder />} />
          <Route path="docs/track-order" element={<OrderTracking />} />
          <Route path="docs/avc" element={<Avc />} />
          <Route path="docs/refund-policy" element={<RefundPolicy />} />
          <Route path="docs/sell-on-azany-business" element={<SellOnAzany />} />
          <Route
            path="categories/:category/:subCategory"
            element={<Categories />}
          />
          <Route path="search" element={<Search />} />
          <Route path="plans" element={<Plans />} />
        </Route>

        {/* <Route path="/sell-on-azany">
          <Route path="farmers" element={<AzanyFarmers />} />
          <Route
            path="manufacturers-merchant"
            element={<ManufacturerHomePage />}
          />
        </Route> */}

        <Route path="/auth">
          <Route
            path="signup-business-information"
            element={<SignupBusiness />}
          />
          <Route path="otp" element={<AuthOTP />} />
          <Route path="otp-business" element={<AuthOTPBusiness />} />
          <Route path="reset-password" element={<AuthReset />} />
          <Route path="forgot-password" element={<AuthForgot />} />
          <Route
            path="forgot-password-business"
            element={<AuthForgotBusiness />}
          />
          <Route path="verify-email" element={<AuthVerify />} />
          <Route path="verify-businessemail" element={<AuthVerifyBusiness />} />
          <Route path="verify-successful" element={<AuthSuccessful />} />
        </Route>

        <Route path="sellers">
          <Route index element={<SellersProfile />} />
          <Route path="login" element={<AuthLogin />} />
          <Route path="signup" element={<AuthSignup />} />
          <Route path="otp" element={<AuthOTPBusiness />} />
        </Route>

        <Route path="customers">
          <Route path="otp" element={<AuthOTP />} />
        </Route>

        <Route path="/customer-profile">
          <Route index element={<IndexPage />} />
          <Route path="login" element={<Login />} />
          Index
          {/* <Route path="order" element={<Order />} /> */}
          <Route path="order" element={<COrdersComponent />} />
          <Route path="order-details" element={<OrderDetailsComponent />} />
          <Route path="track-order" element={<TrackOrdersComponent />} />
          <Route path="cards" element={<Cards />} />
          <Route path="messages" element={<MessagesComponent />} />
          <Route path="watchlist" element={<WatchList />} />
          <Route path="saved" element={<Saved />} />
          <Route path="rating" element={<Ratings />} />
          <Route path="address" element={<AddressComponent />} />
          <Route path="add-address" element={<EditAddressComponent />} />
          <Route path="track_order" element={<TrackOrdersComponent />} />
          <Route path="recently-viewed" element={<RecentlyViewedComponent />} />
          <Route path="saved-items" element={<SavedItemsComponent />} />
          <Route path="reviews" element={<ReviewsComponent />} />
          <Route path="rewards" element={<RewardsComponent />} />
          <Route
            path={APP_ROUTE?.editCustomerPersonnalDetails}
            element={<EditPersonalDetailsComp />}
          />
          <Route path="edit-address" element={<UpdateAddressComponent />} />
        </Route>

        <Route path="/manufacturers-profile">
          <Route index element={<ManufacturersIndex />} />
          <Route path="login" element={<MLogin />} />
          <Route path="business-info" element={<MBusiness />} />
          <Route path="product" element={<MProduct />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="edit-product" element={<EditProduct />} />
          <Route path="orders" element={<MOrders />} />
          <Route path="confirm-order" element={<ConfirmOrder />} />
          <Route path="edit" element={<EditStore />} />
          <Route path="payment" element={<MPayment />} />
          <Route path="add-bank" element={<AddBank />} />
          <Route path="add-card" element={<AddCard />} />
          <Route path="withdraw" element={<Withdraw />} />
          <Route path="wallet-history" element={<WalletHistory />} />
          <Route path="create-pin" element={<CreatePin />} />
          <Route path="change-pin" element={<ChangePin />} />
          <Route path="messages" element={<MInbox />} />
          <Route path="chat" element={<MChat />} />
          <Route path="track-orders" element={<Tracking />} />
          <Route path="track-progress" element={<TrackingProgress />} />
          <Route path="branches" element={<MBranches />} />
          <Route path="create-branch" element={<CreateBranch />} />
          <Route path="edit-branch/:id" element={<EditBranch />} />
          <Route path="create-user" element={<CreateUser />} />
          <Route path="subscription" element={<Subscription />} />
          <Route path="security-question" element={<SecurityQuestion />} />
        </Route>

        <Route path="/checkout">
          <Route index element={<CustomerInfo />} />
          <Route path="shipment" element={<ShipmentInfo />} />
          <Route path="payment" element={<PaymentInfo />} />
          <Route path="confirmation" element={<Confirmation />} />
          <Route path="callback" element={<Callback />} />
        </Route>

        <Route path="/farmers">
          <Route index element={<Farmers />} />
          <Route path="category" element={<FCategories />} />
          <Route path="search" element={<FSearch />} />
          <Route
            path="products/:storeID/:productID"
            element={<FarmersProduct />}
          />
          <Route path="find" element={<FarmersFind />} />
          <Route path="products/cart" element={<FarmersCart />} />
        </Route>

        <Route path="products/:storeID/:productID" element={<PProduct />} />

        <Route path="/products">
          <Route path="cart" element={<ProductCart />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
