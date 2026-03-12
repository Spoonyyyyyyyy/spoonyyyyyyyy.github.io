const center_x = 117.3;
const center_y = 172.8;
const scale_x = 0.02072;
const scale_y = 0.0205;

CUSTOM_CRS = L.extend({}, L.CRS.Simple, {
  projection: L.Projection.LonLat,
  scale: function (zoom) {
    return Math.pow(2, zoom);
  },
  zoom: function (sc) {
    return Math.log(sc) / 0.6931471805599453;
  },
  distance: function (pos1, pos2) {
    var x_difference = pos2.lng - pos1.lng;
    var y_difference = pos2.lat - pos1.lat;
    return Math.sqrt(x_difference * x_difference + y_difference * y_difference);
  },
  transformation: new L.Transformation(scale_x, center_x, -scale_y, center_y),
  infinite: true,
});

var SateliteStyle = L.tileLayer("mapStyles/styleSatelite/{z}/{x}/{y}.jpg", {
    minZoom: 0,
    maxZoom: 8,
    noWrap: true,
    continuousWorld: false,
    attribution: "Online map GTA V",
    id: "SateliteStyle map",
  }),
  AtlasStyle = L.tileLayer("mapStyles/styleAtlas/{z}/{x}/{y}.jpg", {
    minZoom: 0,
    maxZoom: 5,
    noWrap: true,
    continuousWorld: false,
    attribution: "Online map GTA V",
    id: "styleAtlas map",
  }),
  GridStyle = L.tileLayer("mapStyles/styleGrid/{z}/{x}/{y}.png", {
    minZoom: 0,
    maxZoom: 5,
    noWrap: true,
    continuousWorld: false,
    attribution: "Online map GTA V",
    id: "styleGrid map",
  });

var CoordsGroup = L.layerGroup();

var Icons = {
  "Coords": CoordsGroup,
  "KOS Ranges": L.layerGroup(),

};

var mymap = L.map("map", {
  crs: CUSTOM_CRS,
  minZoom: 1,
  maxZoom: 5,
  Zoom: 5,
  maxNativeZoom: 5,
  preferCanvas: true,
  layers: [SateliteStyle],
  center: [0, 0],
  zoom: 3,
});

var layersControl = L.control
  .layers(
    { Satelite: SateliteStyle, Atlas: AtlasStyle, Grid: GridStyle },
    Icons
  )
  .addTo(mymap);

function customIcon(icon) {
  return L.icon({
    iconUrl: `blips/${icon}.png`,
    iconSize: [20, 20],
    iconAnchor: [20, 20],
    popupAnchor: [-10, -27],
  });
}

var marker;
mymap.on("click", function (e) {
  if (marker) {
    // check
    mymap.removeLayer(marker);
  }
  var coord = e.latlng;
  var lat = coord.lat;
  var lng = coord.lng;
  var zoom = 16;
  marker = new L.marker([lat, lng])
    .addTo(Icons["Coords"])
    .bindPopup("<b>X: " + lng.toFixed(3) + " | Y: " + lat.toFixed(3) + "</b>");
  mymap.setView([lat, lng], zoom);
  mymap.removeLayer(azurirajmarker);
});

// Sandy Med

L.marker([3650.305, 1744.008])
  .addTo(Icons["KOS Ranges"])
L.circle([3650.305, 1744.008], {radius: 200})
  .addTo(Icons["KOS Ranges"])

// Sandy PD

L.marker([3703.659, 1830.056])
  .addTo(Icons["KOS Ranges"])
L.circle([3703.659, 1830.056], {radius: 200})
  .addTo(Icons["KOS Ranges"])

// Flywheels

L.marker([3321.03, 1762.18])
  .addTo(Icons["KOS Ranges"])
L.circle([3321.03, 1762.18], {radius: 200})
  .addTo(Icons["KOS Ranges"])

// Flysheel Public/Heli Garage

L.marker([3295.122, 1795.367])
  .addTo(Icons["KOS Ranges"])
L.circle([3295.122, 1795.367], {radius: 200})
  .addTo(Icons["KOS Ranges"])

// Redline

L.marker([3572.561, 896.477])
  .addTo(Icons["KOS Ranges"])
L.circle([3572.561, 896.477], {radius: 200})
  .addTo(Icons["KOS Ranges"])

// Grapeseed Public Garage

L.marker([4978.049, 1656.612 ])
  .addTo(Icons["KOS Ranges"])
L.circle([4978.049, 1656.612 ], {radius: 200})
  .addTo(Icons["KOS Ranges"])

// Catfish Boat Public Garage

L.marker([4485.671, 3787.705 ])
  .addTo(Icons["KOS Ranges"])
L.circle([4485.671, 3787.705 ], {radius: 200})
  .addTo(Icons["KOS Ranges"])

// Paleto Med

L.marker([6371.341, -224.119])
  .addTo(Icons["KOS Ranges"])
L.circle([6371.341, -224.119], {radius: 200})
  .addTo(Icons["KOS Ranges"])

// Heavy Hauls

L.marker([6499.390, 36.800 ])
  .addTo(Icons["KOS Ranges"])
L.circle([6499.390, 36.800 ], {radius: 200})
  .addTo(Icons["KOS Ranges"])

// Great Ocean Highway Public 

L.marker([496.341, -3020.331])
  .addTo(Icons["KOS Ranges"])
L.circle([496.341, -3020.331], {radius: 200})
  .addTo(Icons["KOS Ranges"])

// Harmony Garage 

L.marker([2741.768, 629.525 ])
  .addTo(Icons["KOS Ranges"])
L.circle([2741.768, 629.525 ], {radius: 200})
  .addTo(Icons["KOS Ranges"])

// Paradise Club

L.marker([67.988, -2953.970 ])
  .addTo(Icons["KOS Ranges"])
L.circle([67.988, -2953.970 ], {radius: 200})
  .addTo(Icons["KOS Ranges"])

// Great Ocean Highway Patchup

L.marker([1104.573, -3121.380 ])
  .addTo(Icons["KOS Ranges"])
L.circle([1104.573, -3121.380 ], {radius: 200})
  .addTo(Icons["KOS Ranges"])

// North Rockford Gas Station

L.marker([813.415, -1768.521  ])
  .addTo(Icons["KOS Ranges"])
L.circle([813.415, -1768.521  ], {radius: 200})
  .addTo(Icons["KOS Ranges"])
