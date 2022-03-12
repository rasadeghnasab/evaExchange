const load = () => {
    let configs = {};
    const basename = require('path').basename(__filename);

    require('fs')
        .readdirSync(__dirname)
        .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
        .forEach(config => {
            config = config.replace('.js', '');
            configs[config] = require(`./${config}`);
        });

    return configs;
}

const get = (configPath, defaultVal = '') => {
    const parts = configPath.split('.');
    let config = load();

    try {
        for (const configKey of parts) {
            config = config[configKey];
        }
    } catch {
        return defaultVal;
    }

    return config;
};

module.exports = {
    get
};
