$(document).ready(function () {
  const checkoutButton = $("#checkout-button");
  const deliverySection = $(".delivery-section");
  const orderSummary = $(".order-summary");
  const productSummary = $("#product-summary");
  const quantitySummary = $("#quantity-summary");
  const subtotalSummary = $("#subtotal-summary");
  const deliveryFeeSummary = $("#delivery-fee-summary");
  const totalCostSummary = $("#total-cost-summary");

  checkoutButton.on("click", function () {
    const selectedProduct = $("#product").val();
    const quantity = parseFloat($("#quantity").val());

    let subtotal = 0;
    if (selectedProduct === "product1") {
      subtotal = 50 * quantity;
    } else if (selectedProduct === "product2") {
      subtotal = 70 * quantity;
    }

    const deliveryFee = 10;
    const totalCost = subtotal + deliveryFee;

    productSummary.text(`Product: ${selectedProduct}`);
    quantitySummary.text(`Quantity: ${quantity}`);
    subtotalSummary.text(`Subtotal: $${subtotal.toFixed(2)}`);
    deliveryFeeSummary.text(`Delivery Fee: $${deliveryFee.toFixed(2)}`);
    totalCostSummary.text(`Total Cost: $${totalCost.toFixed(2)}`);

    deliverySection.show();
    orderSummary.show();
  });
  $("#order-form").validate();
  $("#delivery-form").validate();

  $("#checkout-button").click(function () {
    if ($("#order-form").valid()) {
      $(".order-section").hide();
      $(".delivery-section").show();
    }
  });

  $("#confirm-button").click(function () {
    if ($("#delivery-form").valid()) {
      $(".delivery-section").hide();
      $(".thank-you-message").show();
    }
  });
});
