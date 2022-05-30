module.exports = ({ configDefaultConfig }) => {
  const external = ['leaflet', 'react-leaflet']
  for (let config of configDefaultConfig) {
    config.external = config.external ? config.external.concat(external) : external
  }
  return configDefaultConfig
};
