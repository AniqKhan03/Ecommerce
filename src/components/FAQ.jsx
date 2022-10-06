import React, { useState } from "react";
import FAQItem from "./FAQItem";

function FAQ() {
  return (
    <div>
      <div className="container row flex flex-col">
        <h1 className="flex justify-center text-4xl">
          Policies
        </h1>
        <div className="flex flex-col space-y-4 py-6 justify-center px-10">
        <FAQItem
          header={"Return Policy"}
          body={
            "Returns received more than 45 days after shipment date will not be accepted and will be returned to sender. Our guarantee: It'll fit or we'll exchange it for free! You have up to 45 days from the purchase date or shipment date to complete the return or exchange. The items must be in new condition and repackaged in the original box with all tags and packaging included. Returns, exchanges, and refunds are subject to our return and exchange policy. You'll receive a credit in the original payment method once we receive your items. Restock fees may apply*. On average, returns will reach us in 3-7 business days."
          }
        />
        <FAQItem
          header={"Shipping Policy"}
          body={
            "We will ship within Canada only. We will not ship to PO boxes. Shipping restrictions may apply to some remote locations. Weather delays or other factors (beyond our control) may impact delivery times."
          }
        />
        <FAQItem
          header={"Exchange Policy"}
          body={
            "Returned/exchanged merchandise must be unworn and in new condition with the original tags. Exchanged items must be returned in the original boxes and bags and must include all the original hang-tags. Exchanges processed prior to 45 days are subject to availability. In the event the item you requested for an exchange is no longer available, a refund will be processed as stated below. We are unable to process exchanges where the new item cost is different than the original item cost. We cannot accept COD returns."
          }
        />
        </div>
        
      </div>
    </div>
  );
}

export default FAQ;
