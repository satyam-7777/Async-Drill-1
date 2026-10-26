// Problem 3: Online Order Simulation
// Problem
// Simulate an online order system using async callbacks.

// Tasks
// placeOrder(order, callback)

// Wait 2 seconds.
// If order is not empty → return orderId.
// Else return "Order failed: empty cart".
// processPayment(orderId, callback)

// Wait 1.5 seconds.
// Return "Payment successful for order #<orderId>".
// deliverOrder(orderId, callback)

// Wait 2 seconds.
// Return "Order #<orderId> delivered successfully!".
// Chain them: placeOrder(...) → processPayment(...) → deliverOrder(...) → print result.

// Additional
// Introduce error handling: If payment fails, stop and print "Payment failed for order #...".

function placeOrder(order, callback) {
  setTimeout(() => {
    if (!order || order.orderId == null) {
      return callback("Order failed: empty cart", null);
    }

    callback(null, order.orderId);
  }, 2000);
}

function processPayment(orderId, callback, isPaymentFailed = false) {
  setTimeout(() => {
    if (isPaymentFailed) {
      return callback(`Payment failed for order #${orderId}`, null);
    }

    callback(null, `Payment successful for order #${orderId}`);
  }, 1500);
}

function deliverOrder(orderId, callback) {
  setTimeout(() => {
    if (orderId === null) {
      return callback("orderId not found", null);
    }

    callback(null, `Order #${orderId} delivered successfully!`);
  }, 2000);
}

// running the callback Fn
const order = { orderId: 123 };

placeOrder(order, (err, orderId) => {
  if (err) {
    console.log(err);
    return;
  }

  processPayment(orderId, (err, paymentSuccessMsg) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log(paymentSuccessMsg);

    deliverOrder(orderId, (err, deliveredMessage) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log(deliveredMessage);
    });
  });
});
