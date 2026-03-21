module.exports = function(eleventyConfig) {
    // 设置输入目录
    eleventyConfig.setInputDirectory("src");
    // 设置输出目录
    eleventyConfig.setOutputDirectory("_site");
    
    // 告诉 Eleventy 在哪里找 includes 文件（默认就是 _includes，但显式声明更稳妥）
    eleventyConfig.setIncludesDirectory("_includes");
    
    // 复制静态资源
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/docs");
    eleventyConfig.addPassthroughCopy("src/videos");
    
    return {
        templateFormats: ["njk", "html", "md"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    };
};