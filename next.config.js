const withFonts = require('next-fonts');
const path = require('path');

const localeSubpaths = {};

const settings = {
    env: {
        NEXT_APP_EXPIRE_TOKEN_DATE: 365,
        NEXT_APP_TOASTER_CLOSE_TIMEOUT: 5000,
    },
    devIndicators: {
        autoPrerender: false
    },
    include: path.resolve(__dirname, 'src/assets/svg'),
    webpack: (config) => {
        config.module.rules.push(
            {
                test: /\.(jpe?g|png)$/i,
                use: [
                    {
                        loader: 'responsive-images-loader',
                        options: {
                            adapter: require('responsive-images-loader/sharp'),
                            publicPath: '/_next',
                            name: 'static/media/[hash]-[width].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader'
            }
        );

        return config;
    }
};

module.exports = withFonts(settings);