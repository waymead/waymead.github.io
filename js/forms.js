window.onload = function() {
  //console.info('Creating form for ' + htmlForm.dataset.formid);
  Formio.createForm(
    document.getElementById("leadform"),
    "https://dowgiibihvbvpju.form.io/leadform"
  ).then(function(form) {
    form.on("submit", function(event) {
      console.log(event.data);
      analytics.identify(event.data);
    });
  });
};
