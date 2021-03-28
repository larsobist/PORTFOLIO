//Tagesübersicht
chartTable();
async function chartTable() {
    var options = {
        series: [{
                name: "12",
                data: [11251, 11182, 11142, 10981, 11132, 10958, 10741, 10893, 10849, 10951, 10883, 11440, 10855, 10952, 11191, 11352, 11481, 11675, 11935, 12009, 11680, 11388, 10338, 8069, 6574, 9543, 11665, 11855, 11956, 11889, 10394]
            },
            {
                name: "11",
                data: [11350, 11081, 11130, 11129, 11191, 11081, 11308, 11180, 10927, 11039, 11141, 11077, 10742, 11240, 11229, 11022, 11125, 11173, 11255, 11442, 11567, 10664, 9883, 10015, 9954, 10044, 9718, 10096, 10764, 10855]
            },
            {
                name: "10",
                data: [11720, 11572, 11674, 11490, 11272, 11335, 11324, 11309, 11137, 11556, 11268, 11014, 10768, 11149, 11261, 11115, 11296, 11149, 10850, 11065, 11057, 11156, 11046, 11276, 11183, 10928, 11032, 11102, 11012, 10815, 9978]
            },
            {
                name: "9",
                data: [10930, 11000, 11119, 11216, 11431, 11293, 11398, 11992, 12301, 12143, 11503, 12224, 11801, 11882, 12087, 12072, 12148, 12055, 12229, 12107, 11813, 11920, 11974, 11945, 11866, 11993, 11861, 11554, 11572, 11489]
            },
            {
                name: "8",
                data: [11775, 11580, 11332, 11569, 11610, 11586, 11589, 11951, 11721, 11491, 11608, 11749, 11468, 11692, 11921, 11788, 11548, 11681, 11637, 11771, 11643, 11825, 11655, 11452, 11576, 11620, 11737, 11855, 11924, 11800, 11555]
            },
            {
                name: "7",
                data: [11860, 11828, 11304, 8796, 10404, 11487, 12108, 11944, 11769, 11738, 11794, 11565, 11181, 11680, 11754, 11768, 11718, 11772, 11545, 11428, 11664, 11686, 11699, 11607, 11768, 11581, 11410, 11614, 11593, 11599, 11516]
            },
            {
                name: "6",
                data: [11164, 11345, 11256, 11221, 11164, 11240, 11160, 11025, 11083, 11222, 11160, 11196, 11041, 11288, 11078, 11265, 11253, 11339, 11176, 11502, 11298, 11130, 11244, 11328, 11406, 11374, 11590, 11557, 11351, 11547]
            },
            {
                name: "5",
                data: [11002, 11113, 10903, 10717, 11073, 10949, 10945, 10955, 11040, 11071, 10744, 11016, 10697, 11070, 11157, 11283, 11122, 10899, 10999, 11193, 11254, 11288, 11525, 11367, 10827, 10401, 10693, 10797, 10782, 10901, 10719]
            },
            {
                name: "4",
                data: [10300, 11004, 10899, 11219, 10900, 10639, 10859, 10890, 10830, 10826, 11059, 10953, 10389, 10812, 10883, 10909, 10897, 11004, 10891, 10714, 10817, 10877, 10864, 10845, 10996, 10882, 10664, 10803, 10735, 10731, ]
            },
            {
                name: "3",
                data: [11129, 10802, 11074, 10989, 10979, 10921, 11087, 10976, 10765, 10940, 10931, 11003, 10654, 11119, 11011, 10773, 11137, 10954, 10914, 11003, 11181, 10967, 10739, 10921, 10974, 10888, 10895, 11045, 10873, 10714, 10779]
            },
            {
                name: "2",
                data: [10929, 10949, 10843, 10905, 10685, 10794, 11149, 11063, 10893, 11015, 11015, 10898, 10604, 11636, 11188, 10948, 10854, 10940, 10673, 10886, 11008, 11111, 10927, 10904, 10974, 10727, 10858, 11053, 10462]
            },
            {
                name: "1",
                data: [7792, 9307, 10813, 11019, 10953, 10911, 10925, 10610, 10624, 11023, 10975, 10934, 10622, 10976, 10546, 10623, 10901, 10883, 10691, 10825, 10824, 10673, 10865, 11049, 10951, 10843, 10823, 10835, 10567, 10752, 10883]
            }
        ],
        chart: {
            height: "100%",
            type: "heatmap",
            toolbar: {
                show: false,
            },
        },
        tooltip: {
            custom: function({ series, seriesIndex, dataPointIndex, w }) {
                anzahl = series[seriesIndex][dataPointIndex]

                function numberWithCommas(anzahl) {
                    return anzahl.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                }

                return (
                    '<div class="tooltip">' +
                    "<span>" +
                    "On <a>" + w.globals.labels[dataPointIndex] + "/" + w.config.series[seriesIndex].name +
                    "</a> there <br> have been <a>" +
                    numberWithCommas(anzahl) + "</a><br> births on average" +
                    "</span>" +
                    "</div>"
                );
            }
        },
        dataLabels: {
            enabled: false,
        },
        grid: {
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        xaxis: {
            tooltip: 'false',
            show: true,
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", ]
        },
        plotOptions: {
            heatmap: {
                radius: 8,
                enableShades: false,
                colorScale: {
                    ranges: [{
                            from: 0,
                            to: 9999,
                            name: 'up to 10.000',
                            color: '#ffe6b5'
                        },
                        {
                            from: 10000,
                            to: 10399,
                            name: 'up to 10.400',
                            color: '#ffd480'
                        },
                        {
                            from: 10400,
                            to: 10799,
                            name: 'up to 10.800',
                            color: '#ffb974'
                        },
                        {
                            from: 10800,
                            to: 11199,
                            name: 'up to 11.200',
                            color: '#ff9c68'
                        },
                        {
                            from: 11200,
                            to: 11599,
                            name: 'up to 11.600',
                            color: '#ff805c'
                        },
                        {
                            from: 11600,
                            to: 11999,
                            name: 'up to 12.000',
                            color: '#ff644f'
                        },
                        {
                            from: 12000,
                            to: 19999,
                            name: 'over 12.000',
                            color: '#ff4542'
                        },
                    ]
                }
            }
        },
    };
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
}

// Wochentage 
chartWochentage();
async function chartWochentage() {
    const data = await getWochentageData();
    var week = {
        chart: {
            height: "100%",
            type: "bar",
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false
        },
        series: [{
            name: "Anzahl",
            data: data.ys
        }],
        yaxis: {
            show: false,
        },
        tooltip: {
            custom: function({ series, seriesIndex, dataPointIndex, w }) {
                anzahl = series[seriesIndex][dataPointIndex]

                function numberWithCommas(anzahl) {
                    return anzahl.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                }

                return (
                    '<div class="tooltip">' +
                    "<span>" +
                    "On <a>" + w.globals.labels[dataPointIndex] +
                    "s </a> there <br>have been <a>" +
                    numberWithCommas(anzahl) + "</a><br> births on average" +
                    "</span>" +
                    "</div>"
                );
            }
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                type: "vertical",
                colorStops: [{
                        offset: 10,
                        color: "#ff644f",
                        opacity: 1
                    },
                    {
                        offset: 90,
                        color: "#ffd480",
                        opacity: 1
                    },
                ]
            }
        },
        grid: {
            show: false,
        },
        xaxis: {
            categories: data.xs
        }
    };
    var chart = new ApexCharts(document.querySelector("#chartWochentage"), week);
    chart.render();
}

async function getWochentageData() {
    const xs = [];
    const ys = [];
    const response = await fetch('./data/Wochentagdurchschnitt.csv');
    const wochentageData = await response.text();

    const table = wochentageData.split('\n');
    table.forEach(row => {
        const columns = row.split(';');
        const Wochentage = columns[0];
        xs.push(Wochentage);
        const Anzahl = columns[1];
        ys.push(Anzahl);
    });
    return { xs, ys };
}

// Monate 
chartMonate();
async function chartMonate() {
    const data = await getMonateData();
    var month = {
        chart: {
            height: "100%",
            type: "bar",
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false
        },
        series: [{
            name: "Anzahl",
            data: data.ys
        }],
        yaxis: {
            show: false,
        },
        tooltip: {
            custom: function({ series, seriesIndex, dataPointIndex, w }) {
                anzahl = series[seriesIndex][dataPointIndex]

                function numberWithCommas(anzahl) {
                    return anzahl.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                }

                return (
                    '<div class="tooltip">' +
                    "<span>" +
                    "In <a>" + w.globals.labels[dataPointIndex] +
                    "</a> there <br> have been <a>" +
                    numberWithCommas(anzahl) + "</a><br> births on average" +
                    "</span>" +
                    "</div>"
                );
            }
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                type: "vertical",
                opacityFrom: 0.7,
                opacityTo: 0.9,
                colorStops: [{
                        offset: 10,
                        color: "#ff644f",
                        opacity: 1
                    },
                    {
                        offset: 90,
                        color: "#ffd480",
                        opacity: 1
                    },
                ]
            }
        },
        grid: {
            show: false,
        },
        xaxis: {
            categories: data.xs
        }
    };
    var chart = new ApexCharts(document.querySelector("#chartMonate"), month);
    chart.render();
}

async function getMonateData() {
    const xs = [];
    const ys = [];
    const response = await fetch('./data/Monatsdurchschnitt.csv');
    const MonateData = await response.text();

    const table = MonateData.split('\n');
    table.forEach(row => {
        const columns = row.split(';');
        const Monate = columns[0];
        xs.push(Monate);
        const Anzahl = columns[1];
        ys.push(Anzahl);
    });
    return { xs, ys };
}

// Jahre 
chartJahre();
async function chartJahre() {
    const data = await getJahreData();
    var year = {
        chart: {
            height: "100%",
            type: "bar",
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false
        },
        series: [{
            name: "Anzahl",
            data: data.ys
        }],
        yaxis: {
            show: false,
        },
        tooltip: {
            custom: function({ series, seriesIndex, dataPointIndex, w }) {
                anzahl = series[seriesIndex][dataPointIndex]

                function numberWithCommas(anzahl) {
                    return anzahl.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                }

                return (
                    '<div class="tooltip">' +
                    "<span>" +
                    "In <a>" + w.globals.labels[dataPointIndex] +
                    "</a> there <br>have been <a>" +
                    numberWithCommas(anzahl) + "</a><br> births in total" +
                    "</span>" +
                    "</div>"
                );
            }
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                type: "vertical",
                opacityFrom: 0.7,
                opacityTo: 0.9,
                colorStops: [{
                        offset: 10,
                        color: "#ff644f",
                        opacity: 1
                    },
                    {
                        offset: 90,
                        color: "#ffd480",
                        opacity: 1
                    },
                ]
            }
        },
        grid: {
            show: false,
        },
        xaxis: {
            categories: data.xs
        }
    };
    var chart = new ApexCharts(document.querySelector("#chartJahre"), year);
    chart.render();
}

async function getJahreData() {
    const xs = [];
    const ys = [];
    const response = await fetch('./data/Jahrestabelle.csv');
    const JahreData = await response.text();

    const table = JahreData.split('\n');
    table.forEach(row => {
        const columns = row.split(';');
        const Jahre = columns[0];
        xs.push(Jahre);
        const Anzahl = columns[1];
        ys.push(Anzahl);
    });
    return { xs, ys };
}