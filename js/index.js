function downloadResume() {
    // Replace the URL with your Firebase Storage URL
    var fileUrl = 'https://firebasestorage.googleapis.com/v0/b/resume-store-750a4.appspot.com/o/Resume-Amjathkhan-Shiekusman.pdf?alt=media';

    var a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'Resume-Amjathkhan-Shiekusman.pdf';

    // Append the anchor element to the body
    document.body.appendChild(a);

    // Trigger a click event on the anchor element
    a.click();

    // Remove the anchor element from the body
    document.body.removeChild(a);
  }