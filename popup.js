function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0];
    var url = tab.url;
    callback(url);
  });
}

function submitForm (url) {
  var email = $("#inputEmail").val();
  var description = $("#inputDescription").val();
  var tags = $('#inputTags').val();
  var data = {
    'url' : url,
    'user_email' : email,
    'description' : description,
    'tags' : tags
  };

  $.post( "http://localhost:3000/api/websites", data, function(data) {window.close();});
  return true;
}

$().ready(function() {
  //$("#buttonSubmit").on("click", function () {window.close();});
  $("#buttonSubmit").on("click", function () {getCurrentTabUrl(submitForm)});
});
