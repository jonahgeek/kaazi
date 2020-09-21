import Dashboard from "./pages/Dashboard/Dashboard";
import Receipt from "./pages/Receipt/Receipt";
import Invoice from "./pages/Invoice/Invoice";
import Quote from "./pages/Quotation/Quotation";
import Account from "./pages/Account/Account";
import NewInvoice from "./pages/Invoice/newInvoice";
import NewReceipt from "./pages/Receipt/newReceipt";
import NewQuotation from "./pages/Quotation/newQuotation";
import NewClient from "./pages/Client/newClient";
import Client from "./pages/Client/Client";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    page: Dashboard,
    layout: "/account",
  },
  {
    path: "/receipt",
    page: Receipt,
    layout: "/account",
  },
  {
    path: "/invoice",
    page: Invoice,
    layout: "/account",
  },
  {
    path: "/quotation",
    page: Quote,
    layout: "/account",
  },
  {
    path: "/user",
    page: Account,
    layout: "/account",
  },
  {
      path: "/new-invoice",
      page: NewInvoice,
      layout: "/account"
  },
  {
      path: "/new-receipt",
      page: NewReceipt,
      layout: "/account"
  },
  {
      path: "/new-quotation",
      page: NewQuotation,
      layout: "/account"
  },
  {
    path: "/client",
    page: Client,
    layout: "/account"
  },
  {
    path: "/new-client",
    page: NewClient,
    layout: "/account"
  }
];

export default routes;
