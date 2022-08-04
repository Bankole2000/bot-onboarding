module.exports = {
  transpileDependencies: ["vuetify"],
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Lugah Bot Onboarding";
      return args;
    });
  },
  publicPath: process.env.NODE_ENV === "production" ? "/bot-onboarding" : "/"
  // publicPath: '',
  // baseUrl: '/projects/vue/webpieces/dist/',
};