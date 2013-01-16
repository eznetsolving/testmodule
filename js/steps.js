(function ($) {
  // API Call configuration
Drupal.behaviors.testmoduleSteps = {
  attach: function (context) {
    var api_server = "http://aveda.ugc.bazaarvoice.com/data";
    var api_key = "ira2dftpe0uo9wvh4fw7e16pb";
    var num_items = 3; 
    function productOutput(product) {
      var output = '<div class="review-wrapper">';
      var ReviewProduct = product;
      var averageRating = 100*(ReviewProduct.ReviewStatistics.AverageOverallRating/5);               
      output += '<div class="product_name"><a href="' + ReviewProduct.ProductPageUrl + '" target="_blank">' + ReviewProduct.Name + '</a></div>';
      output += '<div class="average_rating"><span class="rating"><span class="ratingHighlight" style="width:' + averageRating + '%"></span></span><span class="review-count"><a href="' + ReviewProduct.ProductPageUrl + '" target="_blank"> (' + ReviewProduct.TotalReviewCount + ' ' + Drupal.t('reviews') + ')</a></span></div>';
      return output;      
    }    
    $.ajaxSetup({ cache: true });
    $.getJSON(api_server+"/products.json?callback=?", "apiversion=5.3&passkey=" + api_key + "&filter=id:21056&stats=reviews",
      function(json){
        jQuery.each(json.Results, function(index, product) {
          $("#step1-bv").append(productOutput(product));
        });
      });
      $.getJSON(api_server+"/products.json?callback=?", "apiversion=5.3&passkey=" + api_key + "&filter=id:21057&stats=reviews",
      function(json){
        jQuery.each(json.Results, function(index, product) {
          $("#step2-bv").append(productOutput(product));
        });
      });
      $.getJSON(api_server+"/products.json?callback=?", "apiversion=5.3&passkey=" + api_key + "&filter=id:21058&stats=reviews",
      function(json){
        jQuery.each(json.Results, function(index, product) {
          $("#step3-bv").append(productOutput(product));
        });
      });
  }
};  
})(jQuery);