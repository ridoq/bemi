
bmiSlider.addEventListener('input', () => {
  const bmi = parseFloat(bmiSlider.value);
  bmiValue.textContent = bmi.toFixed(1);

  if (bmi < 18.5) {
    bmiStatus.textContent = 'Underweight';
    bmiStatus.style.color = '#ff9800';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    bmiStatus.textContent = 'You\'re Healthy';
    bmiStatus.style.color = '#8bc34a';
  } else if (bmi >= 25 && bmi <= 29.9) {
    bmiStatus.textContent = 'Overweight';
    bmiStatus.style.color = '#ff9800';
  } else {
    bmiStatus.textContent = 'Obese';
    bmiStatus.style.color = '#f44336';
  }
});

