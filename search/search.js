jQuery(function () {
  // Initalize lunr with the fields it will be searching on. I've given title
  // a boost of 10 to indicate matches on this field are more important.
  window.idx = lunr(function () {
    this.field("desc", { boost: 10 });
    this.field("phe");
  });

  // Download the data from the JSON file we generated
  window.data = $.getJSON("search/nwr.json");

  // Wait for the data to load and add it to lunr
  window.data.then(function (loaded_data) {
    $.each(loaded_data, function (index, value) {
      window.idx.add($.extend({ id: index }, value));
    });
  });

  // Event when the form is submitted
  $("#site_search").submit(function (event) {
    event.preventDefault();
    var query = $("#search_box").val(); // Get the value for the text field
    var results = window.idx.search(query); // Get lunr to perform a search
    display_search_results(results); // Hand the results off to be displayed
  });

  function display_search_results(results) {
    $(".search-info").remove(); // Remove search info
    var $search_results = $("#search_results");

    // Wait for data to load
    window.data.then(function (loaded_data) {
      // Are there any results?
      if (results.length) {
        $search_results.empty(); // Clear any old results

        // Build a snippet of HTML for this result
        var appendHeader =
          "<thead><tr><th>" +
          "Beschreibung</th><th>" +
          "Phenyl&shy;alanin pro 100&nbsp;g</th></tr></thead><tbody>";

        // Add it to the results
        $search_results.append(appendHeader);

        // Iterate over the results
        results.forEach(function (result) {
          var item = loaded_data[result.ref];

          // Build a snippet of HTML for this result
          var appendBody =
            "<tr><td>" +
            item.desc +
            '</td><td class="nowrap">' +
            item.phe.replace(/\.?0+$/, "") +
            " mg</td></tr>";

          // Add it to the results
          $search_results.append(appendBody);
        });

        // Build a snippet of HTML for this result
        var appendFooter = "</tbody>";

        // Add it to the results
        $search_results.append(appendFooter);
      } else {
        $search_results.html("<tbody><tr><td>No results found.</td></tr></tbody>");
      }
    });
  }
});
