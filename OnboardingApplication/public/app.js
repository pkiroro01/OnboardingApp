let currentStep = 1;

function nextStep(step) {
    if (validateStep(step)) {
        document.getElementById(`step${step}`).style.display = 'none';
        currentStep++;
        document.getElementById(`step${currentStep}`).style.display = 'block';
        updateProgressBar();
    }
}

function prevStep(step) {
    document.getElementById(`step${step}`).style.display = 'none';
    currentStep--;
    document.getElementById(`step${currentStep}`).style.display = 'block';
    updateProgressBar();
}

function updateProgressBar() {
    const progress = (currentStep - 1) / 3 * 100;
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

document.getElementById('onboardingForm').addEventListener('submit', function (e) {
    e.preventDefault();
    if (validateStep(3)) {
        showResult();
    }
});

function showResult() {
    const name = document.getElementById('fullName').value;
    const startDate = document.getElementById('startDate').value;
    const jobRole = document.getElementById('jobRole').value;

    document.getElementById('resultName').innerText = `Full Name: ${name}`;
    document.getElementById('resultStartDate').innerText = `Starting Date: ${startDate}`;
    document.getElementById('resultJobRole').innerText = `Job Role: ${jobRole}`;

    document.getElementById('onboardingForm').style.display = 'none';
    document.getElementById('result').style.display = 'block';
}

function editDetails() {
    document.getElementById('result').style.display = 'none';
    document.getElementById('onboardingForm').style.display = 'block';
}

function resetForm() {
    document.getElementById('onboardingForm').reset();
    document.getElementById('result').style.display = 'none';
    document.getElementById('onboardingForm').style.display = 'block';
    document.getElementById(`step${currentStep}`).style.display = 'none';
    currentStep = 1;
    document.getElementById(`step${currentStep}`).style.display = 'block';
    updateProgressBar();
}
