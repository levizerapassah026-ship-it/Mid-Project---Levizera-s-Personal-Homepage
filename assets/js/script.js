document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const btn = contactForm.querySelector('button');
            btn.textContent = 'Sending...';
            btn.style.opacity = '0.5';

            // Simulasi AJAX
            setTimeout(() => {
                alert('Pesan terkirim! 🌸');
                contactForm.reset();
                btn.textContent = 'Send Request';
                btn.style.opacity = '1';
            }, 1500);
        });
    }

    // Efek Hover Navigasi Minimalis
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.letterSpacing = '1px';
        });
        link.addEventListener('mouseleave', () => {
            link.style.letterSpacing = '0px';
        });
    });
});

// --- EFEK PARALLAX BACKGROUND PADA SCROLL ---
    const blobs = document.querySelectorAll('.blob');
    
    // Event listener ini akan terus memantau setiap kali layar discroll
    window.addEventListener('scroll', () => {
        // Mengambil angka seberapa jauh layar sudah discroll ke bawah
        const scrollValue = window.scrollY;
        
        if (blobs.length > 0) {
            // Menggerakkan blob 1 (Turun dan ke kanan)
            blobs[0].style.transform = `translateY(${scrollValue * 0.4}px) translateX(${scrollValue * 0.2}px)`;
            
            // Menggerakkan blob 2 (Naik dan ke kiri - kecepatannya beda)
            blobs[1].style.transform = `translateY(${scrollValue * -0.3}px) translateX(${scrollValue * -0.1}px)`;
            
            // Menggerakkan blob 3 (Turun perlahan ke kiri)
            blobs[2].style.transform = `translateY(${scrollValue * 0.2}px) translateX(${scrollValue * -0.2}px)`;
        }
    });

    // --- ANIMASI MUNCUL SAAT SCROLL (Intersection Observer) ---
    const faders = document.querySelectorAll('.fade-in-on-scroll');

    const appearOptions = {
        threshold: 0.3, // Muncul saat 30% elemen terlihat di layar
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target); // Supaya animasinya cuma jalan sekali
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
// ===== BOOK BIODATA: scroll indicator =====
document.addEventListener('DOMContentLoaded', function () {
  const bookContent = document.querySelector('.book-content');
  const bookFooter = document.querySelector('.book-footer');

  if (!bookContent || !bookFooter) return;

  bookContent.addEventListener('scroll', function () {
    const isAtBottom =
      bookContent.scrollTop + bookContent.clientHeight >= bookContent.scrollHeight - 10;

    if (isAtBottom) {
      bookFooter.textContent = '~ you reached the end ✦ ~';
      bookFooter.style.color = '#c0405a';
    } else {
      bookFooter.textContent = '~ scroll to read more ~';
      bookFooter.style.color = '#d480a0';
    }
  });
});
