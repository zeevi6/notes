class ExamplePlugin {
    apply(complier) {
        complier.plugin("run", (complier, callback) => {
            console.log(`webpack is running`);
            callback();
        });
    }
}

module.exports = ExamplePlugin;