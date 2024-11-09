document.addEventListener("DOMContentLoaded", () => {
  
      const generateButton = document.getElementById("generate-btn") as HTMLButtonElement;
      const resumeForm = document.getElementById("resume-input") as HTMLFormElement;
      const editResume = document.getElementById("editResume") as HTMLButtonElement;
      const downloadAsPdf = document.getElementById("downloadAsPdf") as HTMLButtonElement;
      const shareableLinkContainer = document.getElementById('shareAbleLink') as HTMLDivElement;
      const generatedResume = document.getElementById("resume-output") as HTMLDivElement;

    generateButton.addEventListener("click", (event) => {
        event.preventDefault();

      const obj = (document.getElementById("fill-obj") as HTMLInputElement).value;
      const name = (document.getElementById("fill-name") as HTMLInputElement).value;
      const nationality = (document.getElementById("fill-nat") as HTMLInputElement).value;
      const gmail = (document.getElementById("fill-gmail") as HTMLInputElement).value;
      const contact = (document.getElementById("fill-contact") as HTMLInputElement).value;
      const linkedin = (document.getElementById("fill-linkedin") as HTMLInputElement).value;
      const education = (document.getElementById("fill-education") as HTMLInputElement).value;
      const skills = (document.getElementById("fill-skills") as HTMLInputElement).value;
     
      if (!obj || !name || !nationality || !gmail || !contact || !linkedin || !education || !skills ) {
          alert(`To proceed with resume generation, kindly complete all necessary fields!`);
          return; 
        }

        (document.getElementById("getName") as HTMLSpanElement).textContent = name;
        (document.getElementById("getGmail") as HTMLSpanElement).textContent = gmail;
        (document.getElementById("getNumber") as HTMLSpanElement).textContent = contact;
        (document.getElementById("getNat") as HTMLSpanElement).textContent = nationality;
        (document.getElementById("getSkills") as HTMLSpanElement).textContent = skills;
        (document.getElementById("getEdu") as HTMLSpanElement).textContent = education;
        (document.getElementById("getObj") as HTMLSpanElement).textContent = obj;
        (document.getElementById("getLinkedin") as HTMLSpanElement).textContent = linkedin;


        resumeForm.reset();
  resumeForm.style.display = "none"
  generatedResume.style.display = "block"
  editResume.style.display = "block"
  shareableLinkContainer.style.display = "block"
  downloadAsPdf.style.display = "block"




        // Generate shareable link
        const uniqueURL = `${window.location.origin}?resume=${encodeURIComponent(name)}`;
        shareableLinkContainer.innerHTML = `<h2>Shareable Link:</h2><a href="${uniqueURL}" target="_blank">${uniqueURL}</a>`;

      });

    editResume.addEventListener('click', () => {
    generatedResume.contentEditable="true";


    });

    // PDF download functionality using html2pdf.js
    downloadAsPdf.addEventListener('click', () => {

        const resumeElement = document.getElementById('resume-output');
        if (resumeElement) {
            (window as any).html2pdf().from(resumeElement).save("resume.pdf");
        }
    });
   
  
})