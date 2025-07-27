 
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const category = document.getElementById('category').value;
            const query = document.getElementById('query').value;
            
            // Basic validation
            if (!email || !category || !query) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Simulate form submission
            const submitBtn = document.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.style.background = '#9f7aea';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.textContent = 'Message Sent!';
                submitBtn.style.background = '#48bb78';
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
                    submitBtn.disabled = false;
                    document.getElementById('contactForm').reset();
                }, 2000);
            }, 1500);
        });

        // Add interactive hover effects
        document.querySelectorAll('input, select, textarea').forEach(element => {
            element.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-1px)';
            });
            
            element.addEventListener('mouseleave', function() {
                if (this !== document.activeElement) {
                    this.style.transform = 'translateY(0)';
                }
            });
        });
    

