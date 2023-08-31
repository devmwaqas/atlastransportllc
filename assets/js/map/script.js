var _____WB$wombat$assign$function_____ = function (name) { return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function (obj) { this.__WB_source = obj; return this; } }
{
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");

    $(function () {

        $(".mapcontainer").mapael({
            map: {
                name: "usa_states",
                defaultArea: {
                    attrs: {
                        fill: "#ece9f7",
                        stroke: "#a394d7"
                    },
                    attrsHover: {
                        fill: "#ece9f7"
                    }
                },
                // zoom: {
                //     enabled: true,
                //     step: 0.25,
                //     maxLevel: 20
                // }chica
            },
            legend: {

                area: {
                    slices: [
                        {
                            sliceValue: "Service Areas",
                            attrs: {
                                fill: "#b0a9cb"
                            },
                            label: "Service Areas"
                        }
                    ]
                },

                plot: {
                    labelAttrs: {
                        fill: "#4628ab"
                    },
                    titleAttrs: {
                        fill: "#4628ab"
                    },
                    cssClass: 'plotLegend',
                    mode: 'horizontal',
                    //title: "Services Areas",
                    marginBottomTitle: 5,
                    slices: [{
                        size: 20,
                        attrs: {
                            fill: "#4628ab"
                        },
                        label: "Office Locations",
                        sliceValue: "Ofice Locations",
                        type: "svg",
                        path: "M 24.267286,27.102843 15.08644,22.838269 6.3686216,27.983579 7.5874348,17.934248 0,11.2331 9.9341158,9.2868473 13.962641,0 l 4.920808,8.8464793 10.077199,0.961561 -6.892889,7.4136777 z",
                        width: 20,
                        height: 20,
                    }, {
                        size: 40,
                        label: "Headquarters",
                        sliceValue: "Headquarters",
                        type: "svg",
                        path: "M 24.267286,27.102843 15.08644,22.838269 6.3686216,27.983579 7.5874348,17.934248 0,11.2331 9.9341158,9.2868473 13.962641,0 l 4.920808,8.8464793 10.077199,0.961561 -6.892889,7.4136777 z",
                        width: 40,
                        height: 40,
                        attrs: {
                            fill: "#4628ab"
                        }
                    }, {
                        size: 10,
                        label: "Warehouses",
                        sliceValue: "Warehouses",
                        type: "square",
                        attrs: {
                            fill: "#160062",
                            stroke: "#ffffff"
                        }
                    }, /*{
                    size: 7,
                    label: "Service Areas",
                    sliceValue: "Service Areas",
                    attrs: {
                        fill: "#4628ab"
                    }
                }*/]
                }
            },
            areas: {
                'MI': {
                    value: "Service Areas",
                    tooltip: { content: "<span style=\"font-weight:bold;\">MICHIGAN</span><br/>Atlas Transport, LLC<br/>Service Area" }
                },
                'IL': {
                    value: "Service Areas",
                    tooltip: { content: "<span style=\"font-weight:bold;\">ILLINOIS</span><br/>Atlas Transport, LLC<br/>Service Area" }
                },
                'LA': {
                    value: "Service Areas",
                    tooltip: { content: "<span style=\"font-weight:bold;\">LOUISIANA</span><br/>Atlas Transport, LLC<br/>Service Area" }
                },
                'CA': {
                    value: "Service Areas",
                    tooltip: { content: "<span style=\"font-weight:bold;\">CALIFORNIA</span><br/>Atlas Transport, LLC<br/>Service Area" }
                },
                'OR': {
                    value: "Service Areas",
                    tooltip: { content: "<span style=\"font-weight:bold;\">ORGEGON</span><br/>Atlas Transport, LLC<br/>Service Area" }
                },
                'AZ': {
                    value: "Service Areas",
                    tooltip: { content: "<span style=\"font-weight:bold;\">ARIZONA</span><br/>Atlas Transport, LLC<br/>Service Area" }
                },
                'IN': {
                    value: "Service Areas",
                    tooltip: { content: "<span style=\"font-weight:bold;\">INDIANA</span><br/>Atlas Transport, LLC<br/>Service Area" }
                },
                'WI': {
                    value: "Service Areas",
                    tooltip: { content: "<span style=\"font-weight:bold;\">WISCONSIN</span><br/>Atlas Transport, LLC<br/>Service Area" }
                },
                'OH': {
                    value: "Service Areas",
                    tooltip: { content: "<span style=\"font-weight:bold;\">OHIO</span><br/>Atlas Transport, LLC<br/>Service Area" }
                },
                'NY': {
                    value: "Service Areas",
                    tooltip: { content: "<span style=\"font-weight:bold;\">NEW YORK</span><br/>Atlas Transport, LLC<br/>Service Area" }
                },
                'GA': {
                    value: "Service Areas",
                    tooltip: { content: "<span style=\"font-weight:bold;\">GEORGIA</span><br/>Atlas Transport, LLC<br/>Service Area" }
                },
                'PA': {
                    value: "Service Areas",
                    tooltip: { content: "<span style=\"font-weight:bold;\">PENNSYLVANIA</span><br/>Atlas Transport, LLC<br/>Service Area" }
                },
                'MA': {
                    value: "Service Areas",
                    tooltip: { content: "<span style=\"font-weight:bold;\">MASSACHUSETTS</span><br/>Atlas Transport, LLC<br/>Service Area" }
                },
                'WA': {
                    value: "Service Areas",
                    tooltip: { content: "<span style=\"font-weight:bold;\">WASHINGTON</span><br/>Atlas Transport, LLC<br/>Service Area" }
                },
                'FL': {
                    value: "Service Areas",
                    tooltip: { content: "<span style=\"font-weight:bold;\">FLORIDA</span><br/>Atlas Transport, LLC<br/>Service Area" }
                },
                'RI': {
                    value: "Service Areas",
                    tooltip: { content: "<span style=\"font-weight:bold;\">RHODE ISLAND</span><br/>Atlas Transport, LLC<br/>Service Area" }
                },
                'CT': {
                    value: "Service Areas",
                    tooltip: { content: "<span style=\"font-weight:bold;\">CONNECTICUT</span><br/>Atlas Transport, LLC<br/>Service Area" }
                },
                'DC': {
                    value: "Service Areas",
                    tooltip: { content: "<span style=\"font-weight:bold;\">WASHINGTON DC</span><br/>Atlas Transport, LLC<br/>Service Area" }
                },
                'TX': {
                    value: "Service Areas",
                    tooltip: { content: "<span style=\"font-weight:bold;\">TEXAS</span><br/>Atlas Transport, LLC<br/>Service Area" }
                },
                'MS': {
                    value: "Service Areas",
                    tooltip: { content: "<span style=\"font-weight:bold;\">MISSISSIPPI</span><br/>Atlas Transport, LLC<br/>Service Area" }
                },
                'NJ': {
                    value: "Service Areas",
                    tooltip: { content: "<span style=\"font-weight:bold;\">NEW JERSEY</span><br/>Atlas Transport, LLC<br/>Service Area" }
                },
                'VA': {
                    value: "Service Areas",
                    tooltip: { content: "<span style=\"font-weight:bold;\">VIRGINIA</span><br/>Atlas Transport, LLC<br/>Service Area" }
                },
                'NV': {
                    value: "Service Areas",
                    tooltip: { content: "<span style=\"font-weight:bold;\">NEVADA</span><br/>Atlas Transport, LLC<br/>Service Area" }
                },
                'CO': {
                    value: "Service Areas",
                    tooltip: { content: "<span style=\"font-weight:bold;\">COLORADO</span><br/>Atlas Transport, LLC<br/>Service Area" }
                },
                'MN': {
                    value: "Service Areas",
                    tooltip: { content: "<span style=\"font-weight:bold;\">MINNESOTA</span><br/>Atlas Transport, LLC<br/>Service Area" }
                },
                'MD': {
                    value: "Service Areas",
                    tooltip: { content: "<span style=\"font-weight:bold;\">MARYLAND</span><br/>Atlas Transport, LLC<br/>Service Area" }
                },
                'DE': {
                    value: "Service Areas",
                    tooltip: { content: "<span style=\"font-weight:bold;\">DELAWARE</span><br/>Atlas Transport, LLC<br/>Service Area" }
                },
                'NC': {
                    value: "Service Areas",
                    tooltip: { content: "<span style=\"font-weight:bold;\">NORTH CAROLINA</span><br/>Atlas Transport, LLC<br/>Service Area" }
                },
                'SC': {
                    value: "Service Areas",
                    tooltip: { content: "<span style=\"font-weight:bold;\">SOUTH CAROLINA</span><br/>Atlas Transport, LLC<br/>Service Area" }
                },
                'MO': {
                    value: "Service Areas",
                    tooltip: { content: "<span style=\"font-weight:bold;\">MISSOURI</span><br/>Atlas Transport, LLC<br/>Service Area" }
                },
                'TN': {
                    value: "Service Areas",
                    tooltip: { content: "<span style=\"font-weight:bold;\">TENNESSEE</span><br/>Atlas Transport, LLC<br/>Service Area" }
                }
            },
            plots: {

                'dt': {
                    latitude: 42.3314,
                    longitude: -83.0458,
                    tooltip: { content: "<h6>Office</h6><p>Detroit MI</p>" },
                    value: "Ofice Locations",
                },
                'mf': {
                    latitude: 25.7617,
                    longitude: -80.1918,
                    tooltip: { content: "<h6>Office</h6><p>Miami FL</p>" },
                    value: "Ofice Locations",
                },
                'sb': {
                    latitude: 41.6764,
                    longitude: -86.2520,
                    tooltip: { content: "<h6>Office</h6><p>South Bend IN</p>" },
                    value: "Ofice Locations",
                },
                'mp': {
                    latitude: 35.1495,
                    longitude: -90.0490,
                    tooltip: { content: "<h6>Office</h6><p>Memphis TN</p>" },
                    value: "Ofice Locations",
                },
                'ph': {
                    latitude: 33.448376,
                    longitude: -112.074036,
                    tooltip: { content: "<h6>Office</h6><p>Phoenix AZ</p>" },
                    value: "Ofice Locations",
                },
                'la': {
                    latitude: 34.025052,
                    longitude: -118.192006,
                    tooltip: { content: "<h6>Office</h6><p>Los Angeles CA</p>" },
                    value: "Ofice Locations",
                },
                'ch': {
                    latitude: 41.8755616,
                    longitude: -87.6244212,
                    tooltip: { content: "<h6>Office</h6><p>Chicago IL</p>" },
                    value: "Ofice Locations",
                },
                'nv': {
                    latitude: 36.8462923,
                    longitude: -76.2929252,
                    tooltip: { content: "<h6>Office</h6><p>Norfolk VA</p>" },
                    value: "Ofice Locations",
                },
                'sa': {
                    latitude: 27.336520,
                    longitude: -82.538570,
                    tooltip: { content: "<h6>Office</h6><p>Sarasota FL</p>" },
                    value: "Ofice Locations",
                },
                'seattle': {
                    latitude: 47.599571,
                    longitude: -122.319426,
                    tooltip: { content: "<h6>Office</h6><p>Seattle WA</p>" },
                    value: "Ofice Locations",
                },
                // Service Areas

                /*'sa1': {
                    latitude: 36.731651,
                    longitude: -119.785858,
                    tooltip: { content: "<h6>Service Area</h6><p>Fresno CA</p>" },
                    value: "Service Areas",
                },
                'sa2': {
                    latitude: 34.052235,
                    longitude: -119.243683,
                    tooltip: { content: "<h6>Service Area</h6><p>Los Angeles CA</p>" },
                    value: "Service Areas",
                },
                'sa3': {
                    latitude: 45.512230,
                    longitude: -122.658722,
                    tooltip: { content: "<h6>Service Area</h6><p>Portland OR</p>" },
                    value: "Service Areas",
                },
                'sa4': {
                    latitude: 37.774929,
                    longitude: -122.419418,
                    tooltip: { content: "<h6>Service Area</h6><p>Sacramento CA</p>" },
                    value: "Service Areas",
                },
                'sa5': {
                    latitude: 38.576931,
                    longitude: -121.494949,
                    tooltip: { content: "<h6>Service Area</h6><p>San Francisco CA</p>" },
                    value: "Service Areas",
                },
                'sa6': {
                    latitude: 32.715736,
                    longitude: -117.161087,
                    tooltip: { content: "<h6>Service Area</h6><p>San Diego CA</p>" },
                    value: "Service Areas",
                },
                'sa7': {
                    latitude: 32.222607,
                    longitude: -110.974709,
                    tooltip: { content: "<h6>Service Area</h6><p>Tucson AZ</p>" },
                    value: "Service Areas",
                },
                'sa8': {
                    latitude: 35.373291,
                    longitude: -119.018715,
                    tooltip: { content: "<h6>Service Area</h6><p>Bakersfield CA</p>" },
                    value: "Service Areas",
                },
                'sa9': {
                    latitude: 30.451468,
                    longitude: -91.187149,
                    tooltip: { content: "<h6>Service Area</h6><p>Baton Rouge LA</p>" },
                    value: "Service Areas",
                },
                'sa10': {
                    latitude: 41.675030,
                    longitude: -86.251961,
                    tooltip: { content: "<h6>Service Area</h6><p>South Bend IN</p>" },
                    value: "Service Areas",
                },
                'sa11': {
                    latitude: 39.768402,
                    longitude:-86.158066,
                    tooltip: { content: "<h6>Service Area</h6><p>Indianapolis IN </p>" },
                    value: "Service Areas",
                },
                'sa12': {
                    latitude: 43.038902,
                    longitude: -87.906471,
                    tooltip: { content: "<h6>Service Area</h6><p>Milwaukee WI </p>" },
                    value: "Service Areas",
                },
                'sa13': {
                    latitude: 39.961178,
                    longitude: -82.998795,
                    tooltip: { content: "<h6>Service Area</h6><p>Columbus OH </p>" },
                    value: "Service Areas",
                },
                'sa14': {
                    latitude: 42.651718,
                    longitude: -73.755089,
                    tooltip: { content: "<h6>Service Area</h6><p>Albany NY</p>" },
                    value: "Service Areas",
                },
                'sa15': {
                    latitude: 33.748997,
                    longitude: -84.387985,
                    tooltip: { content: "<h6>Service Area</h6><p>Atlanta GA</p>" },
                    value: "Service Areas",
                },
                'sa16': {
                    latitude: 40.440624,
                    longitude: -79.995888,
                    tooltip: { content: "<h6>Service Area</h6><p>Pittsburgh PA</p>" },
                    value: "Service Areas",
                },
                'sa17': {
                    latitude: 42.360081,
                    longitude: -71.058884,
                    tooltip: { content: "<h6>Service Area</h6><p>Boston MA </p>" },
                    value: "Service Areas",
                },
                'sa18': {
                    latitude: 39.758949,
                    longitude: -84.191605,
                    tooltip: { content: "<h6>Service Area</h6><p>Dayton OH</p>" },
                    value: "Service Areas",
                },
                'sa19': {
                    latitude: 32.840694,
                    longitude: -83.632401,
                    tooltip: { content: "<h6>Service Area</h6><p>Macon GA</p>" },
                    value: "Service Areas",
                },
                'sa20': {
                    latitude: 47.252876,
                    longitude: -122.444290,
                    tooltip: { content: "<h6>Service Area</h6><p>Tacoma WA</p>" },
                    value: "Service Areas",
                },
                'sa21': {
                    latitude: 44.052071,
                    longitude: -123.086754,
                    tooltip: { content: "<h6>Service Area</h6><p>Eugene OR</p>" },
                    value: "Service Areas",
                },
                'sa22': {
                    latitude: 28.538336,
                    longitude: -81.379234,
                    tooltip: { content: "<h6>Service Area</h6><p>Orlando FL</p>" },
                    value: "Service Areas",
                },
                'sa23': {
                    latitude: 30.332184,
                    longitude: -81.655647,
                    tooltip: { content: "<h6>Service Area</h6><p>Jacksonville FL</p>" },
                    value: "Service Areas",
                },
                'sa24': {
                    latitude: 41.823990,
                    longitude: -71.412834,
                    tooltip: { content: "<h6>Service Area</h6><p>Providence RI </p>" },
                    value: "Service Areas",
                },
                'sa25': {
                    latitude: 26.122438,
                    longitude: -80.137314,
                    tooltip: { content: "<h6>Service Area</h6><p>Ft Lauderdale FL</p>" },
                    value: "Service Areas",
                },
                'sa26': {
                    latitude: 27.950575,
                    longitude: -82.457176,
                    tooltip: { content: "<h6>Service Area</h6><p>Tampa</p>" },
                    value: "Service Areas",
                },
                'sa27': {
                    latitude: 41.765804,
                    longitude: -72.673370,
                    tooltip: { content: "<h6>Service Area</h6><p>Hartford CT</p>" },
                    value: "Service Areas",
                },
                // 'sa28': {
                //     latitude: 40.602295,
                //     longitude: -75.471413,
                //     tooltip: { content: "<h6>Service Area</h6><p>Allentown</p>" },
                //     value: "Service Areas",
                // },
                'sa29': {
                    latitude: 38.907192,
                    longitude: -77.036873,
                    tooltip: { content: "<h6>Service Area</h6><p>Washington DC</p>" },
                    value: "Service Areas",
                },
                // 'sa30': {
                //     latitude: 40.620720,
                //     longitude: -75.378490,
                //     tooltip: { content: "<h6>Service Area</h6><p>Bethlehem PA</p>" },
                //     value: "Service Areas",
                // },
                'sa31': {
                    latitude: 29.424122,
                    longitude: -97.493629,
                    tooltip: { content: "<h6>Service Area</h6><p>San Antonio TX</p>" },
                    value: "Service Areas",
                },
                 'sa32': {
                    latitude: 40.6544756,
                    longitude: -75.4385675,
                    tooltip: { content: "<h6>Service Area</h6><p>Lehigh Valley PA</p>" },
                    value: "Service Areas",
                },*/
                //warehouses
                'wh1': {
                    latitude: 47.606209,
                    longitude: -121.332069,
                    tooltip: { content: "<h6>Warehouse</h6><p>Seattle WA</p><p><img src='https://web.archive.org/web/20220630181952/https://atlastransportllc.com/front_assets/images/SeattleWW400x300.jpg'></p>" },
                    value: "Warehouses",
                },
                'wh2': {
                    latitude: 41.878113,
                    longitude: -88.629799,
                    tooltip: { content: "<h6>Warehouse</h6><p>Chicago IL</p><p><img src='https://web.archive.org/web/20220630181952/https://atlastransportllc.com/front_assets/images/ChicagoWW400x300.jpg'></p>" },
                    value: "Warehouses",
                },
                'wh3': {
                    latitude: 29.424122,
                    longitude: -98.493629,
                    tooltip: { content: "<h6>Warehouse</h6><p>San Antonio TX</p><p><img src='https://web.archive.org/web/20220630181952/https://atlastransportllc.com/front_assets/images/SanAntonioWW400x300.jpg'></p>" },
                    value: "Warehouses",
                },
                'wh4': {
                    latitude: 26.1004,
                    longitude: -80.3998,
                    tooltip: { content: "<h6>Warehouse</h6><p>Miami FL</p><p><img src='https://web.archive.org/web/20220630181952/https://atlastransportllc.com/front_assets/images/FtLauderdaleWW400x300.jpg'></p>" },
                    value: "Warehouses",
                },
                'wh5': {
                    latitude: 34.052235,
                    longitude: -117.243683,
                    tooltip: { content: "<h6>Warehouse</h6><p>Los Angeles CA</p><p><img src='https://web.archive.org/web/20220630181952/https://atlastransportllc.com/front_assets/images/losangelesww500x225.jpg'></p>" },
                    value: "Warehouses",
                },
                'wh6': {
                    latitude: 42.4734,
                    longitude: -83.2219,
                    tooltip: { content: "<h6>Warehouse</h6><p>Detroit MI</p><p><img src='https://web.archive.org/web/20220630181952/https://atlastransportllc.com/front_assets/images/DetroitWW400x300.jpg'></p>" },
                    value: "Warehouses",
                },
                'wh7': {
                    latitude: 45.512230,
                    longitude: -121.658722,
                    tooltip: { content: "<h6>Warehouse</h6><p>Portland OR</p>" },
                    value: "Warehouses",
                },
                'wh8': {
                    latitude: 36.852900,
                    longitude: -75.978000,
                    tooltip: { content: "<h6>Warehouse</h6><p>Virginia Beach VA</p><p><img src='https://web.archive.org/web/20220630181952/https://atlastransportllc.com/front_assets/images/virginiabeachww.jpg'></p>" },
                    value: "Warehouses",
                },
                'wh9': {
                    latitude: 42.360100,
                    longitude: -71.058900,
                    tooltip: { content: "<h6>Warehouse</h6><p>Boston MA</p><p><img src='https://web.archive.org/web/20220630181952/https://atlastransportllc.com/front_assets/images/bostonww400x200.jpg'></p>" },
                    value: "Warehouses",
                },
                //Headquarters
                'hq1': {
                    latitude: 27.336520,
                    longitude: -82.538570,
                    tooltip: { content: "<h6>Headquarters</h6><p>Sarasota, FL</p>" },
                    value: "Headquarters",
                },
            }
        });
    });

}
/*
     FILE ARCHIVED ON 18:19:52 Jun 30, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 05:58:36 Aug 23, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 219.168
  exclusion.robots: 0.061
  exclusion.robots.policy: 0.053
  cdx.remote: 0.051
  esindex: 0.008
  LoadShardBlock: 188.547 (3)
  PetaboxLoader3.datanode: 71.06 (4)
  load_resource: 43.58
  PetaboxLoader3.resolve: 26.988
*/