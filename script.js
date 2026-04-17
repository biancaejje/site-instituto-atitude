const slides = Array.from(document.querySelectorAll(".slide"));
const dotsContainer = document.getElementById("carouselDots");
const nextButton = document.getElementById("nextSlide");
const prevButton = document.getElementById("prevSlide");
const backToTopButton = document.getElementById("backToTop");
const menuOpenButton = document.getElementById("menuOpen");
const menuCloseButton = document.getElementById("menuClose");
const mobileMenu = document.getElementById("mobileMenu");
const menuOverlay = document.getElementById("menuOverlay");

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

if (menuOpenButton && menuCloseButton && mobileMenu && menuOverlay) {
  const closeMenu = () => document.body.classList.remove("menu-open");

  menuOpenButton.addEventListener("click", () => {
    document.body.classList.add("menu-open");
  });

  menuCloseButton.addEventListener("click", closeMenu);
  menuOverlay.addEventListener("click", closeMenu);

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1136) closeMenu();
  });
}

const mainFeatureVideoFrame = document.querySelector(".video-frame");
const mainFeatureVideo = mainFeatureVideoFrame?.querySelector("video");
const mainFeaturePlayButton = mainFeatureVideoFrame?.querySelector(".video-frame-play");

if (mainFeatureVideoFrame && mainFeatureVideo && mainFeaturePlayButton) {
  mainFeaturePlayButton.addEventListener("click", () => {
    mainFeatureVideo.play().catch(() => {});
  });

  mainFeatureVideo.addEventListener("play", () => {
    mainFeatureVideoFrame.classList.add("is-playing");
  });

  mainFeatureVideo.addEventListener("pause", () => {
    mainFeatureVideoFrame.classList.remove("is-playing");
  });

  mainFeatureVideo.addEventListener("ended", () => {
    mainFeatureVideoFrame.classList.remove("is-playing");
  });
}

const galleryExplorer = document.getElementById("galleryExplorer");
const galleryBreadcrumb = document.getElementById("galleryBreadcrumb");
const galleryLightbox = document.getElementById("galleryLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");
const galleryVideoLightbox = document.getElementById("galleryVideoLightbox");
const videoLightboxClose = document.getElementById("videoLightboxClose");
const videoLightboxPlayer = document.getElementById("videoLightboxPlayer");

if (
  galleryExplorer &&
  galleryBreadcrumb &&
  galleryLightbox &&
  lightboxImage &&
  lightboxClose &&
  lightboxPrev &&
  lightboxNext &&
  galleryVideoLightbox &&
  videoLightboxClose &&
  videoLightboxPlayer
) {
  const firstEventMediaListRaw = `PHOTO-2026-04-13-09-48-50.jpg
PHOTO-2026-04-13-09-48-54(1).jpg
PHOTO-2026-04-13-09-48-54.jpg
PHOTO-2026-04-13-09-48-55.jpg
PHOTO-2026-04-13-09-48-57(1).jpg
PHOTO-2026-04-13-09-48-57.jpg
PHOTO-2026-04-13-09-48-58(1).jpg
PHOTO-2026-04-13-09-48-58(2).jpg
PHOTO-2026-04-13-09-48-58.jpg
PHOTO-2026-04-13-09-48-59(1).jpg
PHOTO-2026-04-13-09-48-59.jpg
PHOTO-2026-04-13-09-49-00(1).jpg
PHOTO-2026-04-13-09-49-00.jpg
PHOTO-2026-04-13-09-49-01(1).jpg
PHOTO-2026-04-13-09-49-01.jpg
PHOTO-2026-04-13-09-49-02(1).jpg
PHOTO-2026-04-13-09-49-02.jpg
PHOTO-2026-04-13-09-49-03(1).jpg
PHOTO-2026-04-13-09-49-03.jpg
PHOTO-2026-04-13-09-49-04(1).jpg
PHOTO-2026-04-13-09-49-04(2).jpg
PHOTO-2026-04-13-09-49-04.jpg
PHOTO-2026-04-13-09-49-33(1).jpg
PHOTO-2026-04-13-09-49-33(2).jpg
PHOTO-2026-04-13-09-49-33(3).jpg
PHOTO-2026-04-13-09-49-33.jpg
PHOTO-2026-04-13-09-49-34(1).jpg
PHOTO-2026-04-13-09-49-34(2).jpg
PHOTO-2026-04-13-09-49-34(3).jpg
PHOTO-2026-04-13-09-49-34.jpg
PHOTO-2026-04-13-09-49-35(1).jpg
PHOTO-2026-04-13-09-49-35.jpg
PHOTO-2026-04-13-09-49-36(1).jpg
PHOTO-2026-04-13-09-49-36(2).jpg
PHOTO-2026-04-13-09-49-36.jpg
PHOTO-2026-04-13-09-49-37(1).jpg
PHOTO-2026-04-13-09-49-37(2).jpg
PHOTO-2026-04-13-09-49-37(3).jpg
PHOTO-2026-04-13-09-49-37.jpg
PHOTO-2026-04-13-09-49-38(1).jpg
PHOTO-2026-04-13-09-49-38(2).jpg
PHOTO-2026-04-13-09-49-38(3).jpg
PHOTO-2026-04-13-09-49-38.jpg
PHOTO-2026-04-13-09-49-39(1).jpg
PHOTO-2026-04-13-09-49-39(2).jpg
PHOTO-2026-04-13-09-49-39.jpg
PHOTO-2026-04-13-09-49-40.jpg
PHOTO-2026-04-13-09-49-41(1).jpg
PHOTO-2026-04-13-09-49-41(2).jpg
PHOTO-2026-04-13-09-49-41.jpg
PHOTO-2026-04-13-09-49-42(1).jpg
PHOTO-2026-04-13-09-49-42.jpg
PHOTO-2026-04-13-09-53-54.jpg
PHOTO-2026-04-13-09-54-05.jpg
VIDEO-2026-04-13-09-48-28.mp4
VIDEO-2026-04-13-09-48-31.mp4
VIDEO-2026-04-13-09-48-32.mp4
VIDEO-2026-04-13-09-48-33.mp4
VIDEO-2026-04-13-09-48-35.mp4
VIDEO-2026-04-13-09-48-36.mp4
VIDEO-2026-04-13-09-48-38.mp4
VIDEO-2026-04-13-09-48-43.mp4
VIDEO-2026-04-13-09-48-44.mp4
VIDEO-2026-04-13-09-48-47.mp4
VIDEO-2026-04-13-09-48-50.mp4
VIDEO-2026-04-13-09-48-53.mp4
VIDEO-2026-04-13-09-48-57.mp4
VIDEO-2026-04-13-09-49-04.mp4
VIDEO-2026-04-13-09-49-42(1).mp4
VIDEO-2026-04-13-09-49-42.mp4
VIDEO-2026-04-13-09-49-44.mp4
VIDEO-2026-04-13-09-49-45(1).mp4
VIDEO-2026-04-13-09-49-45(2).mp4
VIDEO-2026-04-13-09-49-45.mp4
VIDEO-2026-04-13-09-49-46(1).mp4
VIDEO-2026-04-13-09-49-46.mp4
VIDEO-2026-04-13-09-49-48.mp4
VIDEO-2026-04-13-09-49-50.mp4
VIDEO-2026-04-13-09-49-53.mp4
VIDEO-2026-04-13-09-49-55.mp4
VIDEO-2026-04-13-09-50-00.mp4
VIDEO-2026-04-13-09-50-01.mp4
VIDEO-2026-04-13-09-50-05.mp4
VIDEO-2026-04-13-09-50-08.mp4
VIDEO-2026-04-13-09-50-10.mp4
VIDEO-2026-04-13-09-50-11.mp4
VIDEO-2026-04-13-09-50-12.mp4
VIDEO-2026-04-13-09-50-18.mp4
VIDEO-2026-04-13-09-50-21.mp4
VIDEO-2026-04-13-09-53-29(1).mp4
VIDEO-2026-04-13-09-53-29(2).mp4
VIDEO-2026-04-13-09-53-29.mp4
VIDEO-2026-04-13-09-53-30.mp4
VIDEO-2026-04-13-09-53-31.mp4
VIDEO-2026-04-13-09-53-32.mp4
VIDEO-2026-04-13-09-53-34.mp4
VIDEO-2026-04-13-09-53-36.mp4
VIDEO-2026-04-13-09-53-38.mp4
VIDEO-2026-04-13-09-53-39.mp4
VIDEO-2026-04-13-09-53-40.mp4
VIDEO-2026-04-13-09-53-41.mp4
VIDEO-2026-04-13-09-53-42.mp4
VIDEO-2026-04-13-09-53-43.mp4
VIDEO-2026-04-13-09-53-44.mp4
VIDEO-2026-04-13-09-53-47.mp4
VIDEO-2026-04-13-09-53-48.mp4
VIDEO-2026-04-13-09-53-49(1).mp4
VIDEO-2026-04-13-09-53-49.mp4
VIDEO-2026-04-13-09-53-50.mp4
VIDEO-2026-04-13-09-53-51.mp4
VIDEO-2026-04-13-09-53-52.mp4
VIDEO-2026-04-13-09-53-53.mp4
VIDEO-2026-04-13-09-53-54.mp4
VIDEO-2026-04-13-09-53-55.mp4
VIDEO-2026-04-13-09-53-56.mp4
VIDEO-2026-04-13-09-53-59.mp4
VIDEO-2026-04-13-09-54-00.mp4
VIDEO-2026-04-13-09-54-01.mp4
VIDEO-2026-04-13-09-54-03.mp4
VIDEO-2026-04-13-09-54-04.mp4
VIDEO-2026-04-13-09-54-05.mp4
VIDEO-2026-04-13-09-54-06.mp4`;

  const normalizeMediaKey = (fileName) =>
    fileName
      .toLowerCase()
      .replace(/\(\d+\)(?=\.[^.]+$)/, "")
      .trim();

  const firstEventMediaList = firstEventMediaListRaw
    .split("\n")
    .map((fileName) => fileName.trim())
    .filter(Boolean)
    // Remove arquivos duplicados do tipo "foto(1).jpg", "foto(2).jpg", etc.
    .filter((fileName, index, all) => {
      const currentKey = normalizeMediaKey(fileName);
      return (
        index ===
        all.findIndex((candidate) => normalizeMediaKey(candidate) === currentKey)
      );
    });

  const galleryFolders = [
    {
      id: "eventos",
      label: "Eventos",
      events: [
        {
          title:
            "Dia de integração às Famílias do Centro de Atendimento Multidisciplinar Raphael Marques de Andrade",
          titleHtml:
            '<span class="title-soft">Dia de integração às</span> <span class="title-strong">Famílias</span>',
          cardMeta: "04/04/2026",
          mediaFolder: "src/eventos/Dia de integração à família/",
          mediaList: firstEventMediaList,
        },
      ],
    },
    { id: "outras-atividades", label: "Atividades", events: [] },
    { id: "oficinas", label: "Oficinas", events: [] },
    { id: "nosso-espaco", label: "Nosso espaço", events: [] },
  ];

  const setBreadcrumb = (parts) => {
    galleryBreadcrumb.textContent = parts.join(" / ");
  };

  const clearExplorer = () => {
    galleryExplorer.innerHTML = "";
  };

  const openVideoLightbox = (videoUrl) => {
    videoLightboxPlayer.src = videoUrl;
    galleryVideoLightbox.classList.add("open");
    galleryVideoLightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    videoLightboxPlayer.play().catch(() => {});
  };

  const closeVideoLightbox = () => {
    galleryVideoLightbox.classList.remove("open");
    galleryVideoLightbox.setAttribute("aria-hidden", "true");
    videoLightboxPlayer.pause();
    videoLightboxPlayer.removeAttribute("src");
    document.body.style.overflow = "";
  };

  let currentPhotos = [];
  let currentPhotoIndex = 0;

  const openLightbox = (photos, index) => {
    currentPhotos = photos;
    currentPhotoIndex = index;
    lightboxImage.src = currentPhotos[currentPhotoIndex];
    galleryLightbox.classList.add("open");
    galleryLightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    galleryLightbox.classList.remove("open");
    galleryLightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    lightboxImage.removeAttribute("src");
  };

  const goToPhoto = (direction) => {
    if (!currentPhotos.length) return;
    currentPhotoIndex =
      (currentPhotoIndex + direction + currentPhotos.length) % currentPhotos.length;
    lightboxImage.src = currentPhotos[currentPhotoIndex];
  };

  const createFolderHeader = (title, titleHtml, metaText) => {
    const wrapper = document.createElement("div");
    wrapper.className = "gallery-folder-head";

    const titleNode = document.createElement("span");
    titleNode.className = "gallery-folder-title";
    if (titleHtml) {
      titleNode.innerHTML = titleHtml;
    } else {
      titleNode.textContent = title;
    }

    wrapper.appendChild(titleNode);

    if (metaText) {
      const metaNode = document.createElement("span");
      metaNode.className = "gallery-folder-meta";
      metaNode.textContent = metaText;
      wrapper.appendChild(metaNode);
    }

    return wrapper;
  };

  const renderMediaGrid = (eventItem) => {
    const eventArticle = document.createElement("article");
    eventArticle.className = "gallery-event";

    const eventHeader = document.createElement("div");
    eventHeader.className = "gallery-event-header";

    const title = document.createElement("h3");
    title.textContent = eventItem.title;
    const titleWrap = document.createElement("div");
    titleWrap.className = "gallery-event-title-wrap";
    titleWrap.appendChild(title);

    const backButton = document.createElement("button");
    backButton.className = "gallery-back-button";
    backButton.textContent = "VOLTAR";
    backButton.addEventListener("click", () => renderEvents(eventItem.parentFolder));

    eventHeader.appendChild(titleWrap);
    eventArticle.appendChild(eventHeader);

    const mediaGrid = document.createElement("div");
    mediaGrid.className = "gallery-media-grid";
    const photoUrls = eventItem.mediaList
      .filter((fileName) => !fileName.toLowerCase().endsWith(".mp4"))
      .map(
        (fileName) =>
          `${encodeURI(eventItem.mediaFolder)}${encodeURIComponent(fileName)}`
      );

    eventItem.mediaList.forEach((fileName) => {
      const item = document.createElement("article");
      item.className = "gallery-media-item";
      const mediaUrl = `${encodeURI(eventItem.mediaFolder)}${encodeURIComponent(fileName)}`;

      if (fileName.toLowerCase().endsWith(".mp4")) {
        const videoThumb = document.createElement("div");
        videoThumb.className = "gallery-video-thumb";

        const video = document.createElement("video");
        video.className = "gallery-video-preview";
        video.src = mediaUrl;
        video.controls = false;
        video.preload = "auto";
        video.muted = true;
        video.playsInline = true;
        video.setAttribute("aria-label", `Vídeo do evento ${eventItem.title}`);

        // Em alguns navegadores mobile, o primeiro frame só aparece
        // quando fazemos um pequeno seek após carregar os metadados.
        video.addEventListener("loadedmetadata", () => {
          try {
            if (video.currentTime === 0 && Number.isFinite(video.duration) && video.duration > 0) {
              video.currentTime = Math.min(0.1, video.duration / 2);
            }
          } catch (_) {}
        });

        const playButton = document.createElement("button");
        playButton.className = "gallery-video-play-btn";
        playButton.type = "button";
        playButton.setAttribute(
          "aria-label",
          `Reproduzir vídeo do evento ${eventItem.title}`
        );
        playButton.textContent = "▶";

        playButton.addEventListener("click", () => {
          if (window.innerWidth <= 820) {
            openVideoLightbox(mediaUrl);
            return;
          }

          video.controls = true;
          video.muted = false;
          video
            .play()
            .then(() => {
              videoThumb.classList.add("is-playing");
            })
            .catch(() => {
              video.controls = false;
              videoThumb.classList.remove("is-playing");
            });
        });

        video.addEventListener("pause", () => {
          video.controls = false;
          videoThumb.classList.remove("is-playing");
        });

        video.addEventListener("ended", () => {
          video.currentTime = 0;
          video.controls = false;
          videoThumb.classList.remove("is-playing");
        });

        videoThumb.appendChild(video);
        videoThumb.appendChild(playButton);
        item.appendChild(videoThumb);
      } else {
        const image = document.createElement("img");
        image.src = mediaUrl;
        image.loading = "lazy";
        image.alt = `Foto do evento ${eventItem.title}`;
        const photoIndex = photoUrls.indexOf(mediaUrl);
        image.addEventListener("click", () => openLightbox(photoUrls, photoIndex));
        item.appendChild(image);
      }

      mediaGrid.appendChild(item);
    });

    eventArticle.appendChild(mediaGrid);
    clearExplorer();
    galleryExplorer.appendChild(backButton);
    galleryExplorer.appendChild(eventArticle);
    setBreadcrumb(["Galeria", eventItem.parentFolder.label, eventItem.title]);
  };

  const renderEvents = (folder) => {
    clearExplorer();
    setBreadcrumb(["Galeria", folder.label]);

    const eventsHeader = document.createElement("div");
    eventsHeader.className = "gallery-event-header";

    const backToFoldersButton = document.createElement("button");
    backToFoldersButton.className = "gallery-back-button";
    backToFoldersButton.textContent = "VOLTAR";
    backToFoldersButton.addEventListener("click", renderFolders);

    eventsHeader.appendChild(backToFoldersButton);
    galleryExplorer.appendChild(eventsHeader);

    const eventsGrid = document.createElement("div");
    eventsGrid.className = "gallery-folder-grid";

    if (!folder.events.length) {
      const empty = document.createElement("article");
      empty.className = "gallery-event";
      empty.innerHTML = "<p class=\"gallery-event-subtitle\">Nenhum evento cadastrado nesta pasta ainda.</p>";
      galleryExplorer.appendChild(empty);
    } else {
      folder.events.forEach((eventItem) => {
        const card = document.createElement("button");
        card.className = "gallery-folder";
        card.appendChild(
          createFolderHeader(eventItem.title, eventItem.titleHtml, eventItem.cardMeta)
        );

        card.addEventListener("click", () =>
          renderMediaGrid({ ...eventItem, parentFolder: folder })
        );
        eventsGrid.appendChild(card);
      });
      galleryExplorer.appendChild(eventsGrid);
    }
  };

  const renderFolders = () => {
    clearExplorer();
    setBreadcrumb(["Galeria"]);

    const foldersGrid = document.createElement("div");
    foldersGrid.className = "gallery-folder-grid";

    galleryFolders.forEach((folder) => {
      const folderCard = document.createElement("button");
      folderCard.className = "gallery-folder";
      folderCard.appendChild(createFolderHeader(folder.label));
      folderCard.addEventListener("click", () => renderEvents(folder));
      foldersGrid.appendChild(folderCard);
    });

    galleryExplorer.appendChild(foldersGrid);
  };

  renderFolders();

  lightboxClose.addEventListener("click", closeLightbox);
  lightboxPrev.addEventListener("click", () => goToPhoto(-1));
  lightboxNext.addEventListener("click", () => goToPhoto(1));
  videoLightboxClose.addEventListener("click", closeVideoLightbox);

  galleryLightbox.addEventListener("click", (event) => {
    if (event.target === galleryLightbox) closeLightbox();
  });

  galleryVideoLightbox.addEventListener("click", (event) => {
    if (event.target === galleryVideoLightbox) closeVideoLightbox();
  });

  window.addEventListener("keydown", (event) => {
    if (!galleryLightbox.classList.contains("open")) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") goToPhoto(-1);
    if (event.key === "ArrowRight") goToPhoto(1);
  });

  window.addEventListener("keydown", (event) => {
    if (!galleryVideoLightbox.classList.contains("open")) return;
    if (event.key === "Escape") closeVideoLightbox();
  });
}

let currentSlide = 0;
let autoPlayTimer;

function renderDots() {
  slides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.setAttribute("aria-label", `Ir para o slide ${index + 1}`);
    dot.addEventListener("click", () => {
      goToSlide(index);
      resetAutoPlay();
    });
    dotsContainer.appendChild(dot);
  });
}

function updateCarousel() {
  slides.forEach((slide, index) => {
    slide.classList.toggle("active", index === currentSlide);
  });

  const dots = dotsContainer.querySelectorAll("button");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

function goToSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  updateCarousel();
}

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function prevSlide() {
  goToSlide(currentSlide - 1);
}

function startAutoPlay() {
  autoPlayTimer = setInterval(nextSlide, 5000);
}

function resetAutoPlay() {
  clearInterval(autoPlayTimer);
  startAutoPlay();
}

if (slides.length && dotsContainer && nextButton && prevButton) {
  nextButton.addEventListener("click", () => {
    nextSlide();
    resetAutoPlay();
  });

  prevButton.addEventListener("click", () => {
    prevSlide();
    resetAutoPlay();
  });

  renderDots();
  updateCarousel();
  startAutoPlay();
}

const professionalsTrack = document.getElementById("professionalsTrack");
const professionalsPrev = document.getElementById("professionalsPrev");
const professionalsNext = document.getElementById("professionalsNext");

if (professionalsTrack && professionalsPrev && professionalsNext) {
  const professionalCards = Array.from(
    professionalsTrack.querySelectorAll(".professional-card")
  );

  let professionalIndex = 0;

  function getVisibleCards() {
    if (window.innerWidth <= 820) return 1;
    return 2;
  }

  function getStepSize() {
    const style = window.getComputedStyle(professionalsTrack);
    const gap = parseFloat(style.columnGap || style.gap || "0");
    const cardWidth = professionalCards[0]?.getBoundingClientRect().width || 0;
    return cardWidth + gap;
  }

  function getMaxIndex() {
    return Math.max(0, professionalCards.length - getVisibleCards());
  }

  function updateProfessionalsTrack() {
    const maxIndex = getMaxIndex();
    professionalIndex = Math.min(Math.max(professionalIndex, 0), maxIndex);

    professionalsTrack.style.transform = `translateX(-${
      professionalIndex * getStepSize()
    }px)`;
  }

  professionalsNext.addEventListener("click", () => {
    const maxIndex = getMaxIndex();
    professionalIndex = professionalIndex >= maxIndex ? 0 : professionalIndex + 1;
    updateProfessionalsTrack();
  });

  professionalsPrev.addEventListener("click", () => {
    const maxIndex = getMaxIndex();
    professionalIndex = professionalIndex <= 0 ? maxIndex : professionalIndex - 1;
    updateProfessionalsTrack();
  });

  window.addEventListener("resize", updateProfessionalsTrack);
  updateProfessionalsTrack();
}

const revealTargets = document.querySelectorAll(
  "main .section, .welcome-card, .about-box, .card, .professional-card, .event-card"
);

if (revealTargets.length) {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    revealTargets.forEach((target) => target.classList.add("reveal-visible"));
  } else {
    revealTargets.forEach((target) => target.classList.add("reveal-item"));

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    revealTargets.forEach((target) => revealObserver.observe(target));
  }
}

if (backToTopButton) {
  const toggleBackToTop = () => {
    backToTopButton.classList.toggle("visible", window.scrollY > 220);
  };

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", toggleBackToTop, { passive: true });
  toggleBackToTop();
}
