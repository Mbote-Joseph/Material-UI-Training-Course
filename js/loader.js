$(document).ready(function () {
  $(".modal").modal();
  $(".parallax").parallax();
  $(".sidenav").sidenav();
  $(".slider").slider({ full_width: true });
  $(".myreviews").carousel({
    numVisible: 7,
    shift: 55,
    padding: 55,
  });
});

function toggleModal() {
  var instance = M.Modal.getInstance($("#modal3"));
  instance.open();
}

$(".fixed-action-btn").floatingActionButton({
  toolbarEnabled: true,
});

// FAB
// var options = [
//   {
//     icon: "1",
//     label: "Run alert function",
//     callback: function () {
//       alert("dasd");
//     },
//   },
//   {
//     icon: '<i class="fa fa-id-card" aria-hidden="true"></i>',
//     label: "Test Element 2",
//   },
//   {
//     icon: "3",
//     label: "Test Element 3",
//     display: {
//       color: "blue",
//       background: "red",
//     },
//   },
// ];

// var context = new Bubbler(options);
