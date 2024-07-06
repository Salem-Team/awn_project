const webpack = require("webpack");

module.exports = {
    // إعدادات Webpack الأخرى
    plugins: [
        new webpack.DefinePlugin({
            __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(true),
        }),
    ],
};
