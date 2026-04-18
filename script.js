const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".nav-list a, .footer-links a");
const sections = document.querySelectorAll("main section[id], footer[id]");
const revealElements = document.querySelectorAll(".reveal");
const whatsappLink = document.querySelector("[data-whatsapp-app-link]");

const setHeaderState = () => {
  const shouldCompact = window.scrollY > 24;
  header.classList.toggle("is-scrolled", shouldCompact);
};

const closeMenu = () => {
  menuToggle.classList.remove("is-active");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu principal");
  siteNav.classList.remove("is-open");
};

const openMenu = () => {
  menuToggle.classList.add("is-active");
  menuToggle.setAttribute("aria-expanded", "true");
  menuToggle.setAttribute("aria-label", "Fechar menu principal");
  siteNav.classList.add("is-open");
};

const updateActiveLink = () => {
  let activeId = "inicio";

  sections.forEach((section) => {
    const top = section.offsetTop - 140;
    const bottom = top + section.offsetHeight;

    if (window.scrollY >= top && window.scrollY < bottom) {
      activeId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const matches = link.getAttribute("href") === `#${activeId}`;
    if (matches) {
      link.setAttribute("aria-current", "true");
    } else {
      link.removeAttribute("aria-current");
    }
  });
};

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.contains("is-open");

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 980) {
      closeMenu();
    }
  });
});

if (whatsappLink) {
  whatsappLink.addEventListener("click", (event) => {
    const appLink = whatsappLink.dataset.whatsappAppLink;
    const webLink = whatsappLink.dataset.whatsappWebLink;

    if (!appLink || !webLink) {
      return;
    }

    event.preventDefault();

    let didHidePage = false;
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        didHidePage = true;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.location.href = appLink;

    window.setTimeout(() => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);

      if (!didHidePage) {
        window.open(webLink, "_blank", "noopener,noreferrer");
      }
    }, 700);
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && siteNav.classList.contains("is-open")) {
    closeMenu();
    menuToggle.focus();
  }
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
    rootMargin: "0px 0px -8% 0px",
  },
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

window.addEventListener(
  "scroll",
  () => {
    setHeaderState();
    updateActiveLink();
  },
  { passive: true },
);

window.addEventListener("resize", () => {
  if (window.innerWidth > 980) {
    closeMenu();
  }
});

setHeaderState();
updateActiveLink();
