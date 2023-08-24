// This function initializes the map and adds a marker
function initMap() {
  // Specify the coordinates for your business location
  const businessLocation = new Microsoft.Maps.Location(40.712776, -74.005974); // Example coordinates for New York City

  // Initialize the map
  const map = new Microsoft.Maps.Map("#map", {
    credentials:
      "AkbK8__IPNNxJAX9iofHn5ryOYUKU9tuK1-sZlgUIhokpEchgTBiQtEJ33QthmZW", // Add your API key
    center: businessLocation,
    zoom: 15,
    disableScrollWheelZoom: true,
  });

  // Add a marker to the map
  const marker = new Microsoft.Maps.Pushpin(businessLocation, {
    title: "Your Business Name",
    subTitle: "Business Address",
    icon: "https://www.bingmapsportal.com/Content/images/poi_custom.png", // Custom marker icon
  });

  // Add the marker to the map
  map.entities.push(marker);

  // Open an info box when marker is clicked
  Microsoft.Maps.Events.addHandler(marker, "click", function () {
    const infobox = new Microsoft.Maps.Infobox(businessLocation, {
      title: marker.getTitle(),
      description: marker.getSubTitle(),
      showCloseButton: true,
    });
    infobox.setMap(map);
  });
}

// Load the Bing Maps API and call the initMap function
function loadMapScenario() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.async = true;
  script.defer = true;
  script.src =
    "https://www.bing.com/api/maps/mapcontrol?callback=initMap&key=AkbK8__IPNNxJAX9iofHn5ryOYUKU9tuK1-sZlgUIhokpEchgTBiQtEJ33QthmZW"; // Add your API key
  document.body.appendChild(script);
}

loadMapScenario();
