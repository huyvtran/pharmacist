
let char_number = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
    'f': 6,
    'g': 7,
    'h': 8,
    'i': 9,
    'j': 10,
    'k': 11,
    'l': 12,
    'm': 13,
    'n': 14,
    'o': 15,
    'p': 16,
}
let settings = [
    {}, // nothing
    {   // a - 1
        spinner: "spinner-blue",
        p: "bgLightBlue",
        oval: "ovalBorderRightBlue",
        hr: "hrblue",
        font: "orangefont",
        arrow: "light-blue",
    },
    {   // b - 2
        spinner: "",
        p: "",

    },
    {   // c - 3
        spinner: "spinner-purple",
        p: "bgDeepPurple",
        oval: "ovalBorderRightPurple",
        hr: "hrpurple",
    },
    {   // d - 4
        spinner: "",
        p: "",
    },
    {   // e - 5
        spinner: "",
        p: "bgOrange",
        oval: "ovalBorderRightOrange",
        hr: "hrorange",
        arrow: "orange",
    },
    {   // f - 6
        spinner: "",
        p: "bgRed",
        oval: "ovalBorderRightRed",
        arrow: "red",
        hr: "hrpink",

    },
    {   // g - 7
        spinner: "spinner-green",
        p: "bgGreen",
        oval: "ovalBorderRightGreen",
        arrow: "green",
        hr: "hrgreen",
    },
    {   // h - 8
        spinner: "",
        p: "",
        oval: "ovalBorderRightGreen",
        arrow: "light-green",
        hr: "hrgreen",
    },
    {   // i - 9
        spinner: "spinner",
        p: "bgPink",
        oval: "ovalBorderRightPurple_red",
        hr: "hrpink",
        arrow: "pink",
    },
    {   // j - 10
        spinner: "",
        p: "",
    },
    {   // k - 11
        spinner: "",
        p: "",
    },
    {   // l - 12
        spinner: "",
        p: "",
    },
    {   // m - 13
        spinner: "",
        p: "",
    },
    {   // n - 14
        spinner: "spinner-blue",
        p: "bgCyan",
        oval: "ovalBorderRightBlue",
        arrow: "cyan",
        hr: "hrblue",
        
    },
    {   // o - 15
        spinner: "spinner",
        p: "bgDeepOrange",
        oval: "ovalBorderRightOrange",
        hr: "hrorange",
        arrow: "deep-orange",

    },
    {   // p - 16
        spinner: "",
        p: "bgTeal",
        oval: "",
        hr: "",
        arrow: "",

    },
]
// number_char = {
//     1: 'a',
//     2: 'b',
//     3: 'c',
//     4: 'd',
//     5: 'e',
//     6: 'f',
//     7: 'g',
//     8: 'h',
//     9: 'i',
//     10: 'j',
//     11: 'k',
//     12: 'l',
//     13: 'm',
//     14: 'n',
//     15: 'o',
// }


export var GlobalVars = {
    AbsoluteURL : "http://www.selfcarepharmacist.com",
    DeviceNumber: 0,
    RestApiURLs: 
        [
            "http://selfcarepharmacist.com/api/call.php?",  // mobile
            "api/call.php?",                                // web
        ],   
    dosingWeight: 0,
    mapData : {
        latitude: 0,
        longitude: 0,
        zoom: 1,
        location: ""
    },
    mapPlaceId: "",
    address2: "",
    firstname: "",

    // Relating pages
    pageId: 0,
    getAbsoluteURL : function() {
        return this.AbsoluteURL;
    },
    setDeviceNumber(device: number) {
        this.DeviceNumber = device;
    },
    getApiURL: function() {
    	return this.RestApiURLs[this.DeviceNumber];
    },
    getDosingWeight: function() {
    	return this.dosingWeight;
    },
    setDosingWeight: function(wei: number) {
    	this.dosingWeight = wei;
    },
    getMapData: function() {
        return this.mapData;
    },
    setMapData: function(data: any) {
        this.mapData = data;
    },
    getMapPlaceId: function() {
        return this.mapPlaceid;
    },
    setMapPlaceId: function(placeid: string) {
        this.mapPlaceid = placeid;
    },
    getAddress2: function() {
        return this.address2;
    },
    setAddress2: function(addr: string) {
        this.address2 = addr;
    },
    getFirstname: function() {
        return this.firstname;
    },
    setFirstname: function(name: string) {
        this.firstname = name;
    },
    getPageId: function() {
        return this.pageId;
    },
    setPageId: function(id: number) {
        this.pageId = id;
    },
    getPageSetting: function(id_char: string) {
        let pageSetting = {
            id: 0,
            class: "",
            spinner: "",
            p: "",
            oval: "",
        };
        if (id_char != ""){
            let num_id = char_number[id_char];
            pageSetting["id"] = num_id;
            pageSetting["class"] = "ui-page-theme-" + num_id;
            pageSetting["spinner"] = settings[num_id]["spinner"];
            pageSetting["p"] = settings[num_id]["p"];
            pageSetting["oval"] = settings[num_id]["oval"];
            pageSetting["hr"] = settings[num_id]["hr"];
            pageSetting["arrow"] = settings[num_id]["arrow"];
        }
        return pageSetting;
    },
};