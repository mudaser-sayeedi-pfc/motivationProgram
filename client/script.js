document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.getElementById('backButton');
    const companyType = document.getElementById('companyType');

    backButton.addEventListener('click', () => {
        // Add your logic for the back button click
        console.log('Back button clicked');
    });

    companyType.addEventListener('click', () => {
        // Add your logic for the company type selection
        console.log('Company type selected');
    });
});