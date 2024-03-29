const { withFaust } = require("@faustjs/next");

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withFaust();
module.exports = {
  images: {
    domains: ["staging.jitensha-hoken.jp", "jitensha-hoken.jp", "asset.jitensha-hoken.jp"],
  },
};
