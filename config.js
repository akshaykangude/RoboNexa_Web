/* ============================================================
   ROBONEXA — SETTINGS. Change things here. Nothing else to touch.
   After editing, commit & push:  git add config.js && git commit -m "settings" && git push
   ============================================================ */

var STORE       = "ROBONEXA";                        // store name shown everywhere
var ADMIN_PASS  = "Akshay";                          // Master / Admin password (secret admin login)
var ORDER_EMAIL = "akshaykangude35@gmail.com";       // where order copies are emailed

/* ---- Your GitHub repo (admin "Choose from GitHub" picker) ---- */
var GH_USER   = "akshaykangude";
var GH_REPO   = "RoboNexa_Web";
var GH_BRANCH = "main";

/* ---- You ship from here (decides the delivery-time tier) ---- */
var STORE_CITY  = "Pune";
var STORE_STATE = "Maharashtra";

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
