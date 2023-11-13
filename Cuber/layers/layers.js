var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_wgs89_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "wgs89",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/wgs89_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [294318.036745, 4805428.601206, 350340.739119, 4853987.508319]
                            })
                        });

lyr_GoogleHybrid_0.setVisible(true);lyr_wgs89_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_wgs89_1];
