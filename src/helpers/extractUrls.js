const extractSkuUrls = require("./extractSkuUrls");

function extractUrls(node) {
  switch (node.object) {
    case "product":
      return node.images.map((url) => ({ location: "root", url }));
    case "sku":
    case "price":
      return extractSkuUrls(node);
    default:
      return [];
  }
}

module.exports = extractUrls;
