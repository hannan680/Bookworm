$(document).ready(function () {
  // Create the side drawer element
  var sideDrawer = $("<div>", { class: "side-drawer" }).append(
    $("<button>", { class: "close-button", text: "X" }),
    $("<ul>", { class: "menu-list" }).append(
      $("<li>").append($("<a>", { href: "/index.html", text: "Home" })),
      $("<li>").append($("<a>", { href: "/products.html", text: "Products" })),
      $("<li>").append($("<a>", { href: "/gallery.html", text: "Gallery" })),
      $("<li>").append($("<a>", { href: "/findus.html", text: "Find Us" }))
      // Add more menu items as needed
    )
  );

  // Append the side drawer to the body
  $("body").append(sideDrawer);

  $(".hamburger-icon").click(function () {
    $(".side-drawer").toggleClass("open");
  });
  $(".close-button").click(function () {
    $(".side-drawer").removeClass("open");
  });

  $(document).click(function (e) {
    console.log(e.target.classList.contains(".hamburger-icon"));

    if (
      !e.target.closest(".side-drawer") &&
      !e.target.classList.contains("hamburger-icon")
    ) {
      console.log("first");
      $(".side-drawer").removeClass("open");
    }
  });
});
