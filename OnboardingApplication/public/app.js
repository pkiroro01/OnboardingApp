document.addEventListener('DOMContentLoaded', () => {
    let currentStep = 1;

    function nextStep(step) {
        if (validateStep(step)) {
            toggleStepVisibility(step, false);
            currentStep++;
            toggleStepVisibility(currentStep, true);
            updateProgressBar();
        }
    }

    function prevStep(step) {
        toggleStepVisibility(step, false);
        currentStep--;
        toggleStepVisibility(currentStep, true);
        updateProgressBar();
    }

    function toggleStepVisibility(step, isVisible) {
        const display = isVisible ? 'block' : 'none';
        document.getElementById(`step${step}`).style.display = display;
    }

    function updateProgressBar() {
        const progress = ((currentStep - 1) / 3) * 100;
        document.getElementById('progressBar').style.width = `${progress}%`;
    }

    function validateStep(step) {
        const form = document.getElementById('onboardingForm');
        const inputs = form.querySelectorAll(`#step${step} input, #step${step} select`);
        for (let input of inputs) {
            if (!input.checkValidity()) {
                input.reportValidity();
                return false;
            }
        }
        return true;
    }

    function showResult() {
        const name = document.getElementById('fullName').value;
        const startDate = document.getElementById('startDate').value;
        const jobRole = document.getElementById('jobRole').value;

        // Get the corresponding learning path
        const learningPath = learningPaths[jobRole] || { pathName: "Unknown Role", courses: [] };

        document.getElementById('resultName').innerText = `Full Name: ${name}`;
        document.getElementById('resultStartDate').innerText = `Starting Date: ${startDate}`;
        document.getElementById('resultJobRole').innerText = `Job Role: ${jobRole}`;
        document.getElementById('resultPath').innerText = `Learning Path: ${learningPath.pathName}`;

        const coursesList = learningPath.courses.map(course => `<li>${course}</li>`).join('');
        document.getElementById('resultCourses').innerHTML = `<ul>${coursesList}</ul>`;

        toggleFormAndResult(false);
    }

    function editDetails() {
        toggleFormAndResult(true);
    }

    function resetForm() {
        document.getElementById('onboardingForm').reset();
        currentStep = 1; // Reset the step to the beginning
        toggleStepVisibility(1, true); // Show the first step
        toggleStepVisibility(2, false); // Hide all other steps
        toggleStepVisibility(3, false); // Hide all other steps
        updateProgressBar(); // Reset the progress bar
        toggleFormAndResult(true); // Show the form and hide the result
    }

    function toggleFormAndResult(showForm) {
        const formDisplay = showForm ? 'block' : 'none';
        const resultDisplay = showForm ? 'none' : 'block';
        document.getElementById('onboardingForm').style.display = formDisplay;
        document.getElementById('result').style.display = resultDisplay;
    }

    // Event listeners for form buttons
    document.querySelectorAll('.btn-next').forEach(button => {
        button.addEventListener('click', function () {
            nextStep(currentStep);
        });
    });

    document.querySelectorAll('.btn-back').forEach(button => {
        button.addEventListener('click', function () {
            prevStep(currentStep);
        });
    });

    document.getElementById('onboardingForm').addEventListener('submit', function (e) {
        e.preventDefault();
        if (validateStep(3)) {
            showResult();
        }
    });

    // Event listeners for result buttons
    document.querySelector('.btn-edit').addEventListener('click', editDetails);
    document.querySelector('.btn-reset').addEventListener('click', resetForm);

    // Back to Top Button functionality
    const backToTopButton = document.getElementById('backToTop');

    function toggleBackToTopButton() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
            backToTopButton.classList.remove('hide');
        } else {
            backToTopButton.classList.remove('show');
            backToTopButton.classList.add('hide');
        }
    }

    window.addEventListener('scroll', toggleBackToTopButton);

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    toggleBackToTopButton();

    // Carousel Logic
    let currentImageIndex = 0;
    const images = document.querySelectorAll('.carousel-image');
    const imageInterval = 5000; // 5 seconds

    function showImage(index) {
        images.forEach((img) => {
            img.classList.remove('active');
        });
        images[index].classList.add('active');
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    }

    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        showImage(currentImageIndex);
    }

    let carouselInterval = setInterval(nextImage, imageInterval);

    images.forEach(image => {
        image.addEventListener('click', () => {
            clearInterval(carouselInterval);
            nextImage();
            carouselInterval = setInterval(nextImage, imageInterval);
        });
    });

    showImage(currentImageIndex);

    const nextButton = document.querySelector('.next-btn');
    const prevButton = document.querySelector('.prev-btn');

    if (nextButton) {
        nextButton.addEventListener('click', nextImage);
    }

    if (prevButton) {
        prevButton.addEventListener('click', prevImage);
    }
});

// Define learning paths and courses
const learningPaths = {
    engineering: {
        pathName: "Engineering Onboarding Path",
        courses: [
            "Introduction to Engineering",
            "Advanced Engineering Principles",
            "Engineering Tools and Technologies",
            "Code Standards and Practices"
        ]
    },
    sales: {
        pathName: "Sales Onboarding Path",
        courses: [
            "Sales Techniques and Strategies",
            "Customer Relationship Management",
            "Sales Tools and Platforms",
            "Sales Reporting and Analytics"
        ]
    },
    HR: {
        pathName: "HR Onboarding Path",
        courses: [
            "Human Resources Fundamentals",
            "Employee Relations",
            "HR Compliance and Policies",
            "HR Tools and Systems"
        ]
    }
};