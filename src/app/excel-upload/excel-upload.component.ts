import { Component } from '@angular/core';

@Component({
  selector: 'app-excel-upload',
  templateUrl: './excel-upload.component.html',
})
export class ExcelUploadComponent {
  uploadSuccessMessage: string = '';
  errorMessage: string = '';

  uploadAndCheck() {
    const inputElement = document.getElementById('myfile') as HTMLInputElement;
    
    const selectedFile = inputElement.files![0];

    if (!selectedFile) {
      this.errorMessage = 'No file selected. Please select a file.';
      this.uploadSuccessMessage = '';
      return;
    }
    if (selectedFile.type !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
      this.errorMessage = 'Invalid file format. Please select an Excel file (XLSX format).';
      this.uploadSuccessMessage = '';
      inputElement.value = ''; 
    } else {
      this.errorMessage = '';
      this.uploadSuccessMessage = 'File uploaded successfully.';
    }
  }
  pdfFiles = [
    { name: 'resume.pdf', size: '10 KB', path: 'assets\resume.pdf' },
    { name: 'Copy of White and Beige Minimalist Graphic Designer Professional Cv Resume.pdf', size: '10 KB', path: 'assets\Copy of White and Beige Minimalist Graphic Designer Professional Cv Resume.pdf' }
  ];

  downloadPdf(pdf: any) {
    const link = document.createElement('a');
    link.href = pdf.path;
    link.download = pdf.name;
    link.click();
  }

  downloadAll() {
    for (const pdf of this.pdfFiles) {
      this.downloadPdf(pdf);
    }
  }
}
// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-excel-upload',
//   templateUrl: './excel-upload.component.html',
// })
// export class ExcelUploadComponent {
//   formData: FormData = new FormData();
//   errorMessage: string = '';
//   uploadSuccessMessage: string = '';

//   constructor(private http: HttpClient) {}

//   fileChanged(event: any) {
//     const selectedFile = event.target.files[0];

//     if (!selectedFile) {
//       this.errorMessage = 'No file selected. Please select a file.';
//       this.uploadSuccessMessage = '';
//       return;
//     }

//     if (selectedFile.type !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
//       this.errorMessage = 'Invalid file format. Please select an Excel file (XLSX format).';
//       this.uploadSuccessMessage = '';
//       return;
//     }

//     this.errorMessage = '';
//     this.formData.delete('myfile'); // Clear any previous file
//     this.formData.append('myfile', selectedFile);
//   }

//   uploadAndCheck() {
//     if (!this.formData.has('myfile')) {
//       this.errorMessage = 'No file selected. Please select a file.';
//       this.uploadSuccessMessage = '';
//       return;
//     }

//     this.errorMessage = '';
//     this.uploadSuccessMessage = 'Uploading...';

//     // Replace the URL with your server endpoint where you want to handle the file upload.
//     this.http.post('http://your-server-endpoint.com/upload', this.formData).subscribe(
//       (response) => {
//         this.uploadSuccessMessage = 'File uploaded successfully.';
//       },
//       (error) => {
//         this.errorMessage = 'File upload failed. Please try again.';
//       }
//     );
//   }
// }


