// Function to toggle the detailed project view on click
function toggleDetail(projectId) {
    var detail = document.getElementById('project-detail-' + projectId);
    
    // Toggle visibility
    if (detail.style.display === "block") {
      detail.style.display = "none";
    } else {
      // Hide all other project details
      var allDetails = document.querySelectorAll('.project-detail');
      allDetails.forEach(function(detail) {
        detail.style.display = "none";
      });
  
      // Show the clicked project detail
      detail.style.display = "block";
    }
  }
  