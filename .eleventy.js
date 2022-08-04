module.exports = function (eleventyConfig) {
	// Add CSS and JS support
	eleventyConfig.addPassthroughCopy("./src/css", "./src/js", { "./src/images": "/images" });
	eleventyConfig.addWatchTarget("./src/css", "./src/js", "./src/images");

	return {
		dir: {
			input: "src",
			output: "public"
		}
	};
};