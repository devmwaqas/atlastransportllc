$(function() {

    $(".mapcontainer").mapael({
        map: {
            name: "usa_states",
            defaultArea: {
                attrs: {
                    fill: "#ece9f7",
                    stroke: "#a394d7"
                },
                attrsHover: {
                    fill: "#482ab0"
                }
            },
            zoom: {
                enabled: true,
                step: 0.25,
                maxLevel: 20
            }
        },
        legend: {
            plot: [{
                labelAttrs: {
                    fill: "#ece9f7"
                },
                titleAttrs: {
                    fill: "#ece9f7"
                },
                cssClass: 'population',
                mode: 'horizontal',
                title: "Population",
                marginBottomTitle: 5,
                slices: [{
                    size: 15,
                    legendSpecificAttrs: {
                        fill: '#a394d7',
                        stroke: '#ece9f7',
                        "stroke-width": 2
                    },
                    label: "< 10 000",
                    max: "10000"
                }, {
                    size: 30,
                    legendSpecificAttrs: {
                        fill: '#a394d7',
                        stroke: '#ece9f7',
                        "stroke-width": 2
                    },
                    label: "> 10 000 and < 100 000",
                    min: "10000",
                    max: "100000"
                }, {
                    size: 50,
                    legendSpecificAttrs: {
                        fill: '#a394d7',
                        stroke: '#ece9f7',
                        "stroke-width": 2
                    },
                    label: "> 100 000",
                    min: "100000"
                }]
            }, {
                labelAttrs: {
                    fill: "#ece9f7"
                },
                titleAttrs: {
                    fill: "#ece9f7"
                },
                cssClass: 'density',
                mode: 'horizontal',
                title: "Density",
                marginBottomTitle: 5,
                slices: [{
                    label: "< 50",
                    max: "50",
                    attrs: {
                        fill: "#7c67c3"
                    },
                    legendSpecificAttrs: {
                        r: 25
                    }
                }, {
                    label: "> 50 and < 500",
                    min: "50",
                    max: "500",
                    attrs: {
                        fill: "#8e7ccb"
                    },
                    legendSpecificAttrs: {
                        r: 25
                    }
                }, {
                    label: "> 500",
                    min: "500",
                    attrs: {
                        fill: "#6a52bb"
                    },
                    legendSpecificAttrs: {
                        r: 25
                    }
                }]
            }]
        },
        plots: {

            'ph': {
                latitude: 33.448376,
                longitude: -112.074036,
                tooltip: { content: "<h6>Phoenix AZ</h6><p>Lorem Ipsum dollar asmet</p>" },
                value: [5000, 200]
            },
            'la': {
                latitude: 34.025052,
                longitude: -118.192006,
                tooltip: { content: "<h6>Los Angeles</h6><p>Lorem Ipsum dollar asmet</p>" },
                value: [50000, 200]
            },
            'ch': {
                latitude: 41.8755616,
                longitude: -87.6244212,
                tooltip: { content: "<h6>Chicago IL</h6><p>Lorem Ipsum dollar asmet</p>" },
                value: [150000, 200]
            },
            'nv': {
                latitude: 36.8462923,
                longitude: -76.2929252,
                tooltip: { content: "<h6>Norfolk VA</h6><p>Lorem Ipsum dollar asmet</p>" },
                value: [5000, 2000]
            },
            'sa': {
                latitude: 27.3364347,
                longitude: -82.5306527,
                tooltip: { content: "<h6>Sarasota FL</h6><p>Lorem Ipsum dollar asmet</p>" },
                value: [50000, 2000]
            },
            'seattle': {
                latitude: 47.599571,
                longitude: -122.319426,
                tooltip: { content: "<h6>Seattle WA</h6><p>Lorem Ipsum dollar asmet</p>" },
                value: [150000, 2000]
            }
        }
    });
});