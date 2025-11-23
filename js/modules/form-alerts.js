export function formAlerts() {

    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', (e) => {

            e.preventDefault();
            const firstInvalid = form.querySelector(':invalid');

                const label = form.querySelector(
                    `label[for="${firstInvalid.id}"]`
                );

                const fieldName = label.textContent.replace('*', '').trim();

                alert(`A value is required for the field '${fieldName}'`);

                firstInvalid.focus();
        
    });
    
}


