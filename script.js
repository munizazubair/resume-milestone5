document.addEventListener("DOMContentLoaded", function () {
    var generateButton = document.getElementById("generate-btn");
    var resumeForm = document.getElementById("resume-input");
    var editResume = document.getElementById("editResume");
    var downloadAsPdf = document.getElementById("downloadAsPdf");
    var shareableLinkContainer = document.getElementById('shareAbleLink');
    var generatedResume = document.getElementById("resume-output");
    generateButton.addEventListener("click", function (event) {
        event.preventDefault();
        var obj = document.getElementById("fill-obj").value;
        var name = document.getElementById("fill-name").value;
        var nationality = document.getElementById("fill-nat").value;
        var gmail = document.getElementById("fill-gmail").value;
        var contact = document.getElementById("fill-contact").value;
        var linkedin = document.getElementById("fill-linkedin").value;
        var education = document.getElementById("fill-education").value;
        var skills = document.getElementById("fill-skills").value;
        if (!obj || !name || !nationality || !gmail || !contact || !linkedin || !education || !skills) {
            alert("To proceed with resume generation, kindly complete all necessary fields!");
            return;
        }
        document.getElementById("getName").textContent = name;
        document.getElementById("getGmail").textContent = gmail;
        document.getElementById("getNumber").textContent = contact;
        document.getElementById("getNat").textContent = nationality;
        document.getElementById("getSkills").textContent = skills;
        document.getElementById("getEdu").textContent = education;
        document.getElementById("getObj").textContent = obj;
        document.getElementById("getLinkedin").textContent = linkedin;
        resumeForm.reset();
        resumeForm.style.display = "none";
        generatedResume.style.display = "block";
        editResume.style.display = "block";
        shareableLinkContainer.style.display = "block";
        downloadAsPdf.style.display = "block";
        // Generate shareable link
        var uniqueURL = "".concat(window.location.origin, "?resume=").concat(encodeURIComponent(name));
        shareableLinkContainer.innerHTML = "<h2>Shareable Link:</h2><a href=\"".concat(uniqueURL, "\" target=\"_blank\">").concat(uniqueURL, "</a>");
    });
    editResume.addEventListener('click', function () {
        generatedResume.contentEditable = "true";
    });
    // PDF download functionality using html2pdf.js
    downloadAsPdf.addEventListener('click', function () {
        var resumeElement = document.getElementById('resume-output');
        if (resumeElement) {
            window.html2pdf().from(resumeElement).save("resume.pdf");
        }
    });
});
