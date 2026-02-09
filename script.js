$(document).ready(function () {
  // Hide loader after page loads
  setTimeout(function() {
    $('#loader').fadeOut(500);
  }, 1500);

  // Typing animation
  (function ($) {
    $.fn.writeText = function (content) {
      var contentArray = content.split(""),
        current = 0,
        elem = this;
      setInterval(function () {
        if (current < contentArray.length) {
          elem.text(elem.text() + contentArray[current++]);
        }
      }, 80);
    };
  })(jQuery);

  // Input text for typing animation
  $("#holder").writeText("EMBEDDED ENGINEER | FIRMWARE DEVELOPER");

  // Initialize WOW.js for scroll animations
  new WOW().init();

  // Mobile navigation
  var main = function () {
    $(".fa-bars").click(function () {
      $(".nav-screen").animate({ right: "0px" }, 300);
      $("body").animate({ right: "0px" }, 300);
    });

    $(".fa-times").click(function () {
      $(".nav-screen").animate({ right: "-300px" }, 300);
      $("body").animate({ right: "0px" }, 300);
    });

    $(".nav-links a").click(function () {
      $(".nav-screen").animate({ right: "-300px" }, 500);
      $("body").animate({ right: "0px" }, 500);
    });
  };

  $(document).ready(main);

  // Initialize FullPage.js
  $("#fullpage").fullpage({
    scrollBar: true,
    responsiveWidth: 768,
    navigation: true,
    navigationTooltips: ["HOME", "SKILLS", "PROJECTS", "CONTACT", "CONNECT"],
    anchors: ["home", "skills", "projects", "contact", "connect"],
    menu: "#myMenu",
    fitToSection: false,
    scrollingSpeed: 700,

    afterLoad: function (origin, destination, direction) {
      var loadedSection = $(this);

      // Show/hide arrow on first section
      if (destination.index == 0) {
        $(".fa-chevron-down").css("opacity", "1");
      } else {
        $(".fa-chevron-down").css("opacity", "0");
      }

      // Add entrance animations to sections
      if (destination.index == 1) {
        $(".skills-grid").addClass("animate__animated animate__fadeInUp");
      }

      if (destination.index == 2) {
        $(".project-details").addClass("animate__animated animate__fadeIn");
      }
    }
  });

  // Move section down on arrow click
  $(document).on("click", "#moveDown", function () {
    $.fn.fullpage.moveSectionDown();
  });

  // Smooth scrolling for anchor links
  $(function () {
    $("a[href*=#]:not([href=#])").click(function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top
            },
            700
          );
          return false;
        }
      }
    });
  });

  // Circuit animation on hero section
  function createCircuitNode() {
    const circuitBg = document.querySelector('.circuit-bg');
    if (!circuitBg) return;

    const node = document.createElement('div');
    node.style.position = 'absolute';
    node.style.width = '4px';
    node.style.height = '4px';
    node.style.background = '#00ff88';
    node.style.borderRadius = '50%';
    node.style.boxShadow = '0 0 10px #00ff88';
    node.style.left = Math.random() * 100 + '%';
    node.style.top = Math.random() * 100 + '%';
    node.style.animation = 'pulse-dot 2s infinite';

    circuitBg.appendChild(node);

    setTimeout(() => {
      node.remove();
    }, 2000);
  }

  // Create random circuit nodes
  setInterval(createCircuitNode, 500);

  // Skill category hover effect with sound-like feedback
  $('.skill-category').hover(
    function() {
      $(this).find('.pulse-dot').css('animation-duration', '0.5s');
    },
    function() {
      $(this).find('.pulse-dot').css('animation-duration', '2s');
    }
  );

  // Project cards entrance animation
  $('.slide').each(function(index) {
    $(this).css('animation-delay', (index * 0.1) + 's');
  });

  // Contact card pulse on hover
  $('.contact-card').hover(
    function() {
      $(this).find('i').addClass('animate__animated animate__pulse');
    },
    function() {
      $(this).find('i').removeClass('animate__animated animate__pulse');
    }
  );

  // Parallax effect on scroll
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $('.circuit-bg').css('transform', 'translateY(' + (scroll * 0.5) + 'px)');
  });

  // Add glitch effect to logo on hover
  $('.logo-container').hover(
    function() {
      $(this).find('i').addClass('animate__animated animate__headShake');
    },
    function() {
      $(this).find('i').removeClass('animate__animated animate__headShake');
    }
  );

  // Custom cursor effect (optional)
  if (window.innerWidth > 768) {
    const cursor = $('<div class="custom-cursor"></div>');
    $('body').append(cursor);

    $(document).mousemove(function(e) {
      cursor.css({
        left: e.pageX + 'px',
        top: e.pageY + 'px'
      });
    });

    // Add cursor styles dynamically
    $('<style>')
      .text('.custom-cursor { position: fixed; width: 20px; height: 20px; border: 2px solid #00ff88; border-radius: 50%; pointer-events: none; z-index: 9999; transition: all 0.1s ease; box-shadow: 0 0 10px rgba(0, 255, 136, 0.5); }')
      .appendTo('head');
  }

  // Easter egg: Konami code
  var konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  var konamiIndex = 0;

  $(document).keydown(function(e) {
    if (e.keyCode === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        // Activate matrix effect
        activateMatrixMode();
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });

  function activateMatrixMode() {
    $('body').css('background', '#000');
    $('.circuit-bg').css('background-image', 'none');
    
    // Create matrix rain effect
    const canvas = $('<canvas id="matrix-canvas"></canvas>');
    canvas.css({
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 1,
      pointerEvents: 'none'
    });
    $('body').prepend(canvas);

    const c = document.getElementById('matrix-canvas');
    const ctx = c.getContext('2d');

    c.width = window.innerWidth;
    c.height = window.innerHeight;

    const binary = '01';
    const binaryArray = binary.split('');
    const fontSize = 10;
    const columns = c.width / fontSize;
    const drops = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    function drawMatrix() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, c.width, c.height);
      ctx.fillStyle = '#00ff88';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = binaryArray[Math.floor(Math.random() * binaryArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > c.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const matrixInterval = setInterval(drawMatrix, 33);

    // Remove after 10 seconds
    setTimeout(function() {
      clearInterval(matrixInterval);
      $('#matrix-canvas').fadeOut(1000, function() {
        $(this).remove();
      });
      $('body').css('background', 'var(--primary-dark)');
    }, 10000);
  }

  // Binary clock in console (Easter egg)
  function binaryClock() {
    const now = new Date();
    const hours = now.getHours().toString(2).padStart(8, '0');
    const minutes = now.getMinutes().toString(2).padStart(8, '0');
    const seconds = now.getSeconds().toString(2).padStart(8, '0');
    console.clear();
    console.log('%c Binary Time:', 'color: #00ff88; font-size: 20px; font-weight: bold;');
    console.log('%c ' + hours + ' : ' + minutes + ' : ' + seconds, 'color: #ff6b35; font-size: 16px; font-family: monospace;');
  }

  // Update binary clock every second
  setInterval(binaryClock, 1000);
  
  // Initial call
  binaryClock();

  // Log welcome message
  console.log('%c Welcome to Muhammed Jowhar\'s Portfolio! ', 'background: #00ff88; color: #0a0e1a; font-size: 16px; font-weight: bold; padding: 10px;');
  console.log('%c Embedded Engineer | Firmware Developer ', 'color: #ff6b35; font-size: 14px;');
  console.log('%c Try the Konami Code for a surprise! (↑↑↓↓←→←→BA) ', 'color: #4ecdc4; font-size: 12px; font-style: italic;');
});
