/* ============================================================
   ROBONEXA — SETTINGS. Change things here. Nothing else to touch.
   After editing, commit & push:  git add config.js && git commit -m "settings" && git push
   ============================================================ */

var STORE           = "ROBONEXA";                    // store name shown everywhere
var ADMIN_PASS      = "Akshay";                       // Master / Admin password (secret admin login)
var ADMIN_2FA_EMAIL = "akshaykangude35@gmail.com";   // admin login code is emailed here (owner's account)
var ORDER_EMAIL     = "onlyshopes@gmail.com";        // store contact + where order copies are emailed

/* ---- Your GitHub repo (admin "Choose from GitHub" picker) ---- */
var GH_USER   = "akshaykangude";
var GH_REPO   = "RoboNexa_Web";
var GH_BRANCH = "main";

/* ---- You ship from here (decides the delivery-time tier) ---- */
var STORE_CITY  = "Pune";
var STORE_STATE = "Maharashtra";

/* ---- Public contact shown on the storefront (footer, contact section) ---- */
var COMPANY = {
  tagline: "India's engineer-run robotics store — actuators, motors, drives, sensors and complete robots, with datasheets and real support.",
  phone:   "+91 XXXXX XXXXX",              // shown & click-to-call in the footer
  email:   "",                              // blank = uses ORDER_EMAIL above
  address: "Pune, Maharashtra · India"      // one-line address in the footer
};

/* ---- Stock & delivery lead times ---- */
var LEADTIME       = { procureDays: 20, deliver: { city: 2, state: 3, other: 5 } };
var FREE_SHIP_OVER = 25000;   // free shipping over this amount (INR)
var SHIP_FLAT      = 499;      // flat shipping below that (INR)
var INVENTORY_FILE = "ROBONEXA_Inventory.xlsx";

/* ---- UPI payment (your own QR, no fees) ---- */
var UPI_VPA  = "";            // your UPI ID e.g. "akshaykangude@okhdfcbank"  (blank = QR placeholder)
var UPI_NAME = "ROBONEXA";

/* ---- Card payment via Razorpay (secure, PCI-compliant) ---- */
var RAZORPAY_KEY_ID = "";     // your Razorpay Key ID e.g. "rzp_live_xxxx"  (blank = Card option shows setup note)

/* ---- Sending real emails (OTP + orders) ---- */
var MAIL_WEBHOOK = "https://script.google.com/macros/s/AKfycbwUJ0v4Jq8bt4-x6BfNSClG0u1nhDpJdVN1JMH49Oc4aXQbzUlIMpQu2LEHmMSAAWCU7w/exec";
var EMAILJS      = { publicKey: "", serviceId: "", templateId: "" };  // alternative to the webhook

/* ---- YOUR business details for the GST invoice (fill these in) ---- */
var SELLER = {
  name:    "ROBONEXA",                       // legal / trade name on the invoice
  line1:   "Shop / unit address line 1",     // your address
  line2:   "Area, landmark",
  city:    "Pune",
  state:   "Maharashtra",
  stateCode: "27",                           // GST state code (Maharashtra = 27)
  pin:     "411001",
  gstin:   "27ABCDE1234F1Z5",                // your GSTIN (15 chars)
  pan:     "ABCDE1234F",
  phone:   "+91 XXXXX XXXXX",
  email:   "onlyshopes@gmail.com",
  bank:    { name:"", ac:"", ifsc:"", branch:"" }   // optional, printed on invoice if filled
};

/* ---- Invoice settings ---- */
var INVOICE = {
  prefix:        "RNX",     // invoice number prefix -> RNX/2026-27/0001
  gstRate:       18,        // default GST % (used when a product has no rate of its own)
  pricesIncludeGST: true,   // your store prices already include GST (invoice back-calculates the tax)
  ewayThreshold: 50000,     // show the E-way bill block when invoice value >= this (INR); 0 = always
  terms:         "Goods once sold are covered by manufacturer warranty only. Subject to Pune jurisdiction."
};
