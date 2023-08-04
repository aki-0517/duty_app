/** @type {import('next').NextConfig} */

//output: "export", があれば next export せずに next build の時点で out が作られ SG されるようになる。
module.exports = {
  experimental: {
    appDir: true,
  },
  output: "export",
};
