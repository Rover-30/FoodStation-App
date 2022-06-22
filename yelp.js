import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
         'Bearer dhWYzqUWiS-CAsBkqsPrLX_7IwCSSDAwsfTkGfm62tKLtG32YpcDws-HEdA1AsZlZoq7eDtX3WGtEXawaq_-BtYqr-6-7uckxKO7LC7xWCfLIfPTAf-N4EGfgzrKYHYx '
    }
});

