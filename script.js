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

  const projectIsaMediaListRaw = `0185dde2-e616-4840-9678-35632e4b7461.jpg
01e36433-0abf-4da6-856e-a0f981606f68.jpg
07D20BC7-DB70-4882-9EF8-E4D9904EEF6E.jpg
08c6a712-d235-47ba-a7f2-f9f17639f703.jpg
0bdccad6-c71c-4b2c-af67-b3759728467c.jpg
0d1b648b-508d-41af-9538-54dbac6b681b.jpg
12590f93-a475-4d48-a4e6-ca1f9879e8b7.jpg
12757932-4707-4481-9205-feb4595a84a0.jpg
154b46ad-8076-45b8-9dda-b10063adc162.jpg
16fefa99-88d4-48d4-9443-547669f975bd.jpg
1703d7a2-0995-4311-b8ff-0dbbcf034b72.jpg
17256dc9-9057-46ca-8dc3-e0cf0ae5fc01.jpg
1c438a15-3406-40f5-bd7d-15f4e145a016.jpg
1c6bba13-fcf7-465c-a34e-46b90e4e27e9.mp4
1ec20deb-c7d2-41e6-a92b-1ad607651afe.jpg
1efbfc31-859e-4bd2-afde-4bc71bbc77fb.jpg
1f2dc25a-281b-41a7-94f5-43bd92b6ac12.jpg
228cfec5-dfe5-48e2-8b56-90de58a7e8d8.jpg
22ac3434-d064-429e-9a37-2f0caffeb282.jpg
240e3609-495e-4c6f-8fa4-4380fba12efe.jpg
24a75141-2645-43f9-b4d6-8a269412708d.jpg
250626eb-4743-4d5b-b061-73d49eb8b3ae.jpg
2935dc3a-b70f-4301-8cd8-5fb6956b2d58.jpg
29A207EF-4A8A-4C5C-ACC8-A39F56DBBEF4.jpg
29cc1599-8910-46f0-8028-a9eb71e3e8da.jpg
29fde749-6765-462a-9432-40111cb709c6.jpg
2a49bc9a-cc4d-453c-b11e-b86460eca30d.jpg
2a8eec3a-c14f-417e-bb37-a0f75df36ee7.jpg
2b0d6c34-5b77-440c-a988-6a2668943f3d.jpg
2cba6035-4d5a-4788-b01e-27b8d916f345.mp4
2dfa9c3a-ce57-4307-9cfe-7dd52290d7b0.jpg
2e0b8d49-7275-4f15-a0e9-20c1cce0c07c.jpg
30a7a79e-b569-46a4-9606-580b9f744fab.jpg
323de10d-cd57-4900-a408-179b1ef8aede.jpg
3349c921-8e94-4f18-be12-a39abd09b706.jpg
33afb408-7077-47ee-ae40-4ff22f63525d.jpg
35fc8dbd-26cf-4a65-b08f-1bf66009030f.jpg
36dd083f-1940-4068-bf8a-f1126a75d4f6.jpg
39e23199-4289-4bb3-acc4-87a3cfa04625.jpg
3cd614e9-a1ea-4840-9182-4025ca33c561.jpg
3e5eb061-c311-48fa-8182-22ff50d18999.jpg
3ea437c8-120e-4453-93d2-3ea32d197791.jpg
40e61062-4760-4c9c-a28c-002b68762d71.jpg
432fff51-91d0-4a97-a5a5-bbda79ba1e4a.jpg
4377e746-d051-4930-8510-b11dc26417a1.jpg
43a7df17-9646-4159-aa11-880acde8e817.jpg
4496457C-E412-4827-AE84-E7739FFC336F.jpg
46f92402-3ec4-45e4-913c-85979448b190.jpg
482d52c9-0e8e-45b0-891e-c33f7086bde9.jpg
4835c65e-8c44-435f-b154-4e2bfed5175b.jpg
49f94ed2-728a-48da-aaca-a1f83ee64252.jpg
4dce0c9e-e8fc-4622-bf81-b3972ea02024.jpg
52419726-7290-42af-9edb-fc2b9a7fe814.jpg
53d58b3a-33cc-4c1a-8d9c-a5f07c283c71.jpg
54881b87-ef0d-485a-b18b-da441a7660b8.jpg
54e624d7-2099-4cfb-83bc-3926029d7977.jpg
54fc6329-814f-40a1-a9c4-f45b07aebb20.jpg
55c16a25-0eb9-43de-a033-8833e57df2cb.jpg
5801c19d-a6f2-4d0a-a821-617659f0eb7d.jpg
5b38d358-556f-4d1d-9a7a-582578c09827.jpg
5ca74dba-46bc-40bd-8dd9-e4a8ffcd0115.jpg
5d8cc10f-0937-484a-ac61-d9c02c8d9a14.jpg
5e59504c-2fb8-43a9-a3e0-f3de73046904.jpg
62af39c8-2391-46db-8e5f-a74ac8c73c3b.jpg
63927364-28f3-4a64-874b-2f3a675f135a.jpg
63e37b33-dc29-466b-82ed-6aec58823dd7.jpg
65d3d4dc-2644-44d8-b03b-d0411b097b10.jpg
65d45cc1-7db0-4a90-b913-5368df5034ae.jpg
65e6c6d9-0d58-48b2-8a1b-dda89195c806.jpg
66a21d0a-5da7-4134-8724-7b4cfa53e2e3.jpg
66e747fa-1358-4f99-ad20-9e058a0624e7.jpg
67863594-da6d-4df8-a2e4-fcd49cca5d41.jpg
69361d2a-0615-4039-8f6c-9e1ad07c6ce1.jpg
6aed27e9-7d9a-4055-bac7-9b4483932d5a.jpg
6de6e39c-ad64-4937-adab-f354ee0cef18.jpg
7363f079-a057-44d0-921e-4f93705d382e.jpg
73ac589c-8df6-4f84-8bfc-4f94d1ad99c9.jpg
743fc907-af6a-4dba-991a-e1fce0db7c8f.jpg
783f9b2a-095a-48c9-a853-26b86200fca8.jpg
7CF9176A-BC29-4588-A827-74BD5CC5C57E.jpg
7b8d08d3-3c1f-4029-8cc5-6db3c1cf5686.jpg
7df6bc87-ae77-4d24-a522-8067091be3d2.jpg
7ea1a4f9-8101-4968-8e20-2b3cb0d837dc.jpg
7fd9bc8a-dace-43d0-a6cf-52a68b548f31.jpg
81234d99-daa6-40b0-b8f1-167df099558f.jpg
819b599e-daff-490b-814a-b413bde40d04.mp4
839c1fec-8791-41e5-9a40-2317412849ab.jpg
843326c1-6a9a-4ea6-92ca-335bbbc1ebd3.jpg
849aabee-0214-4401-8906-52e143be3f45.jpg
85412143-ba69-42c9-8707-fbcf8929ebb6.jpg
857a746f-e56e-442c-bdb7-ada6af2ebfa7.jpg
86d08a8a-f3e8-4948-8de2-d97cdb446ea1.jpg
875f4d1f-52e8-471a-8cce-708f82141e00.jpg
87c564a8-a03d-4387-86ca-579163e6fe45.jpg
87da3204-9cb8-410a-9ca0-6de16cedf863.jpg
87fbc0ff-f825-431c-985a-bb174c343991.jpg
89ebe7c2-1d60-4536-b487-c6e88c7a36f7.jpg
8aba1223-c039-4470-856b-baedb4cd1572.jpg
8b8d78a3-e072-40ba-8b60-d9113c71b2c9.jpg
8c081823-5840-478f-b13c-86f17c7ec978.jpg
8c252d0d-b0ec-492e-8817-7567c213fe84.jpg
8c8e0bcc-2bdf-45ef-ab7a-bd8d4273c4af.jpg
8e12bb51-e661-4ff2-b7db-3878984c7c92.mp4
8ecafa90-874e-4388-a7f9-1e16c3822b82.jpg
91022fa1-8ee0-41c8-9a0b-e735b88449db.jpg
91DB5C84-1E2A-4F0B-8A6A-2BF43DA24E13.jpg
9274532f-ad56-43c2-a0b5-51b3420e5aa0.jpg
9292522b-a141-4529-b569-235e3e873820.jpg
93649ee4-21d4-4b14-9cc0-df7d13f10c4f.jpg
95fdd9b9-3116-498a-a42f-e710c3fc6909.jpg
96d49663-4f7e-4abb-9778-9c5ff5e37f13.jpg
98e1272c-f9ec-422e-a5a3-0ab03db0c562.jpg
9a18cb48-5837-422d-90e9-1fbe0f75602e.jpg
9cc58719-f5e1-4954-b15c-9a33ec01de3d.jpg
9d0fbfa8-41ee-40c2-bea1-42d17f80953f.jpg
9ed2eab9-0ee7-47e6-ad3b-c131b9f1c902.jpg
9ef95d2f-e3d2-4083-9eeb-163f3ac49068.jpg
F90B45A8-D85D-4086-AEFE-AF493047A70E.jpg
a0050180-6543-4d40-90ad-84ddcd79cbfd.jpg
a0222b09-e804-44c6-ba98-26363ff64956.jpg
a05c0a65-ada9-4509-bc4d-8799a1d22e38.jpg
a23e9ce5-5aa5-40c1-8a01-e9bb6c9183c0.jpg
a3d9439f-e391-4163-8fa9-77e9c0a5d399.jpg
a4cf33f0-a889-4946-b38b-c92c63b2ef54.jpg
a592987f-3612-4913-ad1b-deb98712970b.jpg
a5bb7249-f38c-4873-bd81-b618dbb8f0f1.jpg
a5f0194d-6100-4564-879c-42eefb2dc2ec.jpg
a67f3f93-d0cd-43c6-b71a-02ebb4c10920.jpg
a680363a-996b-49d9-9c85-99195f637ca7.jpg
a70a56d8-9b5d-4789-a027-5f0c20d8d34b.jpg
a7bdaf94-dc69-4898-9e5d-d8fe31d24dab.jpg
a8081cf7-7937-4389-a720-edb4b31bc93a.jpg
a8311638-7c3b-4aad-bcf7-20ca526ec4e1.jpg
a836e79b-c146-4166-9686-2c4d946d2c10.jpg
a9eb6af7-c910-4529-b6f3-27c8787d9fdf.jpg
ab49a970-4aba-4e16-addc-f2be35f90812.jpg
ab4db272-875a-43f9-87a6-b7a2cc2edead.jpg
acd38ad6-2d61-4d8d-9906-96d3e7855578.jpg
afaa21e8-35fb-4d06-bfce-8b0bca931333.jpg
afd63a4c-c407-4a66-9d71-992f9439eb87.jpg
b1bc3c55-e79a-465c-920c-c87b00d9fcda.jpg
b2e1b36e-138a-4b3f-adaf-dfc8ce752a5c.jpg
b4536cc9-ec09-4e97-83ca-ddeab0370dc2.jpg
b483f522-dfb6-4581-bcd7-9a4db6ee321c.jpg
b555a77d-b9df-4cf8-90fe-08619f8bd775.jpg
b85a57af-a4b1-4ef7-9023-fc70a2106564.jpg
bae61b35-2c9a-4898-930b-b478acba13aa.jpg
bb7bbeec-2287-4cb0-94d6-9d6fa6bb68a8.jpg
bc0c2488-5f2a-4a1f-ac18-0e8f6074dec1.jpg
bda18747-a18f-4fc8-b74f-47e45ee7c74f.jpg
be5a699f-3559-4267-8aea-7462672c310d.jpg
bfb71572-32d5-4daa-88c1-ef56e62f5326.jpg
c080a3a9-48c0-4788-a019-0fc4a432c549.jpg
c4beda57-6e60-4632-8a3b-90d53959b547.jpg
c58ee8b8-78bc-4ce0-b1c5-7e93021d0c8f.jpg
ca827534-7fae-42f8-9ca8-cdd713a27045.jpg
cb5782e7-8584-4d31-8b64-6789328ebd2e.jpg
cd910daf-382b-406b-8485-34fb8f9ec1f8.jpg
ce7c5767-7052-4e67-a458-dcd9bc2af5a0.jpg
cf035ed2-6fbf-4303-98f5-fc92fda7b180.jpg
cf112e29-f8b0-4079-8742-3171ac45b98f.jpg
cfcedf6f-0ae6-43ca-a916-30fbfc6b6d06.jpg
d51a54cf-c712-4a1b-b9e3-be333b601503.jpg
d536ea35-0d2f-4e63-86bd-653053edbd8c.jpg
d5bc01e1-37a3-4ff0-a4d7-28ceafadab05.jpg
d5e51721-722a-4ee1-be9e-9eb76470c42d.jpg
d62eb87b-31a3-4bfd-a5da-254b346f9140.jpg
d681d375-8c94-4440-9fdb-2b058a4d6644.jpg
d7938eee-ef91-456e-ae66-6a8fd05fa698.jpg
d8376bbb-2a75-426b-a353-27147577ad9b.jpg
dab352a2-5cc6-4373-84d3-c88590162329.jpg
dc51e346-5150-4bc8-b025-409d7d11af98.jpg
dcbb0a66-485a-414a-a730-f01665800894.jpg
dd4b3f6f-c2bd-44cb-bbe0-fd03dd3e8e9c.jpg
dd677520-09cf-4060-a1fe-9838b2ebcc66.jpg
ddd54c5d-d370-42d6-b49c-d53b3dca6482.jpg
df3d16e7-3eab-48a9-bff9-b486e0480a54.mp4
e38a6e2f-f1ee-4d0b-a4e4-b024d71b18bb.jpg
e3a20f22-0d39-4fc3-ac0a-fceac5934438.jpg
e783d7f7-3d61-4ccd-9793-077f8954ee6f.jpg
e8ed93c8-100a-4e80-b60e-cdb47ec5632d.jpg
eaf700f1-6af3-404a-afa6-cdd88182e837.jpg
ebc71dc4-eeb9-4288-aee6-ec08dc56f818.jpg
ecb0a446-6ab6-4899-86b4-a4127c5b3cf2.jpg
f2af0f9e-8724-4582-b679-ca0753bcdbed.jpg
f2cf1cb3-8b98-4835-9821-290921f6b115.jpg
f4770530-2bbf-44e7-830d-d2de7ad554a5.jpg
f4de00cd-0221-4395-81c8-234ef0019f10.jpg
f568c6fa-50af-4f28-8f57-9e247840584e.jpg
f6206420-3b18-4f04-95ea-70a91af1b1ec.jpg
f652aa21-2822-45c2-b068-25821586515a.jpg
f80cdc77-90ae-4a24-b594-886f5f29ac75.jpg
fcd573eb-fe74-4c88-a80a-de3566fb440c.jpg
ff16f49b-9cb9-49c4-bdd9-2f124dc589ba.jpg
ff3d984d-5d4b-423a-bfee-d9748fd7352e.jpg`;

  const projectIsaMediaList = projectIsaMediaListRaw
    .split("\n")
    .map((fileName) => fileName.trim())
    .filter(Boolean)
    .filter((fileName, index, all) => {
      const currentKey = normalizeMediaKey(fileName);
      return (
        index ===
        all.findIndex((candidate) => normalizeMediaKey(candidate) === currentKey)
      );
    });

  const projectIsaMediaDimensions = {
    "0185dde2-e616-4840-9678-35632e4b7461.webp": { width: 800, height: 1423 },
    "01e36433-0abf-4da6-856e-a0f981606f68.webp": { width: 800, height: 1421 },
    "07D20BC7-DB70-4882-9EF8-E4D9904EEF6E.webp": { width: 800, height: 1067 },
    "08c6a712-d235-47ba-a7f2-f9f17639f703.webp": { width: 800, height: 1422 },
    "0bdccad6-c71c-4b2c-af67-b3759728467c.webp": { width: 800, height: 1422 },
    "0d1b648b-508d-41af-9538-54dbac6b681b.webp": { width: 720, height: 1280 },
    "12590f93-a475-4d48-a4e6-ca1f9879e8b7.webp": { width: 800, height: 1422 },
    "12757932-4707-4481-9205-feb4595a84a0.webp": { width: 800, height: 1067 },
    "154b46ad-8076-45b8-9dda-b10063adc162.webp": { width: 800, height: 1422 },
    "16fefa99-88d4-48d4-9443-547669f975bd.webp": { width: 800, height: 1423 },
    "1703d7a2-0995-4311-b8ff-0dbbcf034b72.webp": { width: 800, height: 1422 },
    "17256dc9-9057-46ca-8dc3-e0cf0ae5fc01.webp": { width: 800, height: 1422 },
    "1c438a15-3406-40f5-bd7d-15f4e145a016.webp": { width: 800, height: 1067 },
    "1ec20deb-c7d2-41e6-a92b-1ad607651afe.webp": { width: 800, height: 1421 },
    "1efbfc31-859e-4bd2-afde-4bc71bbc77fb.webp": { width: 800, height: 1422 },
    "1f2dc25a-281b-41a7-94f5-43bd92b6ac12.webp": { width: 800, height: 1421 },
    "228cfec5-dfe5-48e2-8b56-90de58a7e8d8.webp": { width: 800, height: 1067 },
    "22ac3434-d064-429e-9a37-2f0caffeb282.webp": { width: 800, height: 1422 },
    "240e3609-495e-4c6f-8fa4-4380fba12efe.webp": { width: 800, height: 1067 },
    "24a75141-2645-43f9-b4d6-8a269412708d.webp": { width: 800, height: 1067 },
    "250626eb-4743-4d5b-b061-73d49eb8b3ae.webp": { width: 800, height: 1067 },
    "2935dc3a-b70f-4301-8cd8-5fb6956b2d58.webp": { width: 800, height: 1067 },
    "29A207EF-4A8A-4C5C-ACC8-A39F56DBBEF4.webp": { width: 800, height: 1067 },
    "29cc1599-8910-46f0-8028-a9eb71e3e8da.webp": { width: 800, height: 1422 },
    "29fde749-6765-462a-9432-40111cb709c6.webp": { width: 800, height: 1422 },
    "2a49bc9a-cc4d-453c-b11e-b86460eca30d.webp": { width: 800, height: 1067 },
    "2a8eec3a-c14f-417e-bb37-a0f75df36ee7.webp": { width: 800, height: 1422 },
    "2b0d6c34-5b77-440c-a988-6a2668943f3d.webp": { width: 800, height: 1423 },
    "2dfa9c3a-ce57-4307-9cfe-7dd52290d7b0.webp": { width: 800, height: 1067 },
    "2e0b8d49-7275-4f15-a0e9-20c1cce0c07c.webp": { width: 800, height: 1067 },
    "30a7a79e-b569-46a4-9606-580b9f744fab.webp": { width: 800, height: 1422 },
    "323de10d-cd57-4900-a408-179b1ef8aede.webp": { width: 800, height: 1422 },
    "3349c921-8e94-4f18-be12-a39abd09b706.webp": { width: 800, height: 1067 },
    "33afb408-7077-47ee-ae40-4ff22f63525d.webp": { width: 800, height: 1067 },
    "35fc8dbd-26cf-4a65-b08f-1bf66009030f.webp": { width: 800, height: 1069 },
    "36dd083f-1940-4068-bf8a-f1126a75d4f6.webp": { width: 800, height: 1422 },
    "39e23199-4289-4bb3-acc4-87a3cfa04625.webp": { width: 800, height: 1067 },
    "3cd614e9-a1ea-4840-9182-4025ca33c561.webp": { width: 800, height: 1423 },
    "3e5eb061-c311-48fa-8182-22ff50d18999.webp": { width: 800, height: 1067 },
    "3ea437c8-120e-4453-93d2-3ea32d197791.webp": { width: 800, height: 1423 },
    "40e61062-4760-4c9c-a28c-002b68762d71.webp": { width: 800, height: 1422 },
    "432fff51-91d0-4a97-a5a5-bbda79ba1e4a.webp": { width: 800, height: 1067 },
    "4377e746-d051-4930-8510-b11dc26417a1.webp": { width: 800, height: 1421 },
    "43a7df17-9646-4159-aa11-880acde8e817.webp": { width: 800, height: 1422 },
    "4496457C-E412-4827-AE84-E7739FFC336F.webp": { width: 800, height: 1067 },
    "46f92402-3ec4-45e4-913c-85979448b190.webp": { width: 800, height: 1423 },
    "482d52c9-0e8e-45b0-891e-c33f7086bde9.webp": { width: 800, height: 1423 },
    "4835c65e-8c44-435f-b154-4e2bfed5175b.webp": { width: 800, height: 1067 },
    "49f94ed2-728a-48da-aaca-a1f83ee64252.webp": { width: 800, height: 1422 },
    "4dce0c9e-e8fc-4622-bf81-b3972ea02024.webp": { width: 800, height: 1067 },
    "52419726-7290-42af-9edb-fc2b9a7fe814.webp": { width: 800, height: 1421 },
    "53d58b3a-33cc-4c1a-8d9c-a5f07c283c71.webp": { width: 800, height: 1422 },
    "54881b87-ef0d-485a-b18b-da441a7660b8.webp": { width: 800, height: 1067 },
    "54e624d7-2099-4cfb-83bc-3926029d7977.webp": { width: 800, height: 1067 },
    "54fc6329-814f-40a1-a9c4-f45b07aebb20.webp": { width: 800, height: 1067 },
    "55c16a25-0eb9-43de-a033-8833e57df2cb.webp": { width: 800, height: 1422 },
    "5801c19d-a6f2-4d0a-a821-617659f0eb7d.webp": { width: 800, height: 1423 },
    "5b38d358-556f-4d1d-9a7a-582578c09827.webp": { width: 800, height: 1423 },
    "5ca74dba-46bc-40bd-8dd9-e4a8ffcd0115.webp": { width: 800, height: 1067 },
    "5d8cc10f-0937-484a-ac61-d9c02c8d9a14.webp": { width: 800, height: 1421 },
    "5e59504c-2fb8-43a9-a3e0-f3de73046904.webp": { width: 800, height: 1067 },
    "62af39c8-2391-46db-8e5f-a74ac8c73c3b.webp": { width: 720, height: 1280 },
    "63927364-28f3-4a64-874b-2f3a675f135a.webp": { width: 800, height: 1422 },
    "63e37b33-dc29-466b-82ed-6aec58823dd7.webp": { width: 800, height: 1422 },
    "65d3d4dc-2644-44d8-b03b-d0411b097b10.webp": { width: 800, height: 1423 },
    "65d45cc1-7db0-4a90-b913-5368df5034ae.webp": { width: 800, height: 1067 },
    "65e6c6d9-0d58-48b2-8a1b-dda89195c806.webp": { width: 800, height: 1067 },
    "66a21d0a-5da7-4134-8724-7b4cfa53e2e3.webp": { width: 800, height: 1422 },
    "66e747fa-1358-4f99-ad20-9e058a0624e7.webp": { width: 800, height: 1422 },
    "67863594-da6d-4df8-a2e4-fcd49cca5d41.webp": { width: 800, height: 1067 },
    "69361d2a-0615-4039-8f6c-9e1ad07c6ce1.webp": { width: 800, height: 1422 },
    "6aed27e9-7d9a-4055-bac7-9b4483932d5a.webp": { width: 800, height: 1422 },
    "6de6e39c-ad64-4937-adab-f354ee0cef18.webp": { width: 800, height: 1067 },
    "7363f079-a057-44d0-921e-4f93705d382e.webp": { width: 800, height: 1422 },
    "73ac589c-8df6-4f84-8bfc-4f94d1ad99c9.webp": { width: 800, height: 1421 },
    "743fc907-af6a-4dba-991a-e1fce0db7c8f.webp": { width: 800, height: 1421 },
    "783f9b2a-095a-48c9-a853-26b86200fca8.webp": { width: 800, height: 1067 },
    "7CF9176A-BC29-4588-A827-74BD5CC5C57E.webp": { width: 800, height: 1067 },
    "7b8d08d3-3c1f-4029-8cc5-6db3c1cf5686.webp": { width: 800, height: 1422 },
    "7df6bc87-ae77-4d24-a522-8067091be3d2.webp": { width: 800, height: 1067 },
    "7ea1a4f9-8101-4968-8e20-2b3cb0d837dc.webp": { width: 800, height: 1067 },
    "7fd9bc8a-dace-43d0-a6cf-52a68b548f31.webp": { width: 800, height: 1067 },
    "81234d99-daa6-40b0-b8f1-167df099558f.webp": { width: 800, height: 1067 },
    "839c1fec-8791-41e5-9a40-2317412849ab.webp": { width: 800, height: 1422 },
    "843326c1-6a9a-4ea6-92ca-335bbbc1ebd3.webp": { width: 800, height: 1067 },
    "849aabee-0214-4401-8906-52e143be3f45.webp": { width: 800, height: 1067 },
    "85412143-ba69-42c9-8707-fbcf8929ebb6.webp": { width: 800, height: 1067 },
    "857a746f-e56e-442c-bdb7-ada6af2ebfa7.webp": { width: 800, height: 1067 },
    "86d08a8a-f3e8-4948-8de2-d97cdb446ea1.webp": { width: 800, height: 1067 },
    "875f4d1f-52e8-471a-8cce-708f82141e00.webp": { width: 800, height: 1422 },
    "87c564a8-a03d-4387-86ca-579163e6fe45.webp": { width: 800, height: 1422 },
    "87da3204-9cb8-410a-9ca0-6de16cedf863.webp": { width: 800, height: 1067 },
    "87fbc0ff-f825-431c-985a-bb174c343991.webp": { width: 800, height: 1422 },
    "89ebe7c2-1d60-4536-b487-c6e88c7a36f7.webp": { width: 800, height: 1423 },
    "8aba1223-c039-4470-856b-baedb4cd1572.webp": { width: 800, height: 1421 },
    "8b8d78a3-e072-40ba-8b60-d9113c71b2c9.webp": { width: 800, height: 1421 },
    "8c081823-5840-478f-b13c-86f17c7ec978.webp": { width: 800, height: 1067 },
    "8c252d0d-b0ec-492e-8817-7567c213fe84.webp": { width: 800, height: 1067 },
    "8c8e0bcc-2bdf-45ef-ab7a-bd8d4273c4af.webp": { width: 800, height: 1423 },
    "8ecafa90-874e-4388-a7f9-1e16c3822b82.webp": { width: 800, height: 1422 },
    "91022fa1-8ee0-41c8-9a0b-e735b88449db.webp": { width: 800, height: 1067 },
    "91DB5C84-1E2A-4F0B-8A6A-2BF43DA24E13.webp": { width: 800, height: 1067 },
    "9274532f-ad56-43c2-a0b5-51b3420e5aa0.webp": { width: 800, height: 1422 },
    "9292522b-a141-4529-b569-235e3e873820.webp": { width: 800, height: 1423 },
    "93649ee4-21d4-4b14-9cc0-df7d13f10c4f.webp": { width: 800, height: 1422 },
    "95fdd9b9-3116-498a-a42f-e710c3fc6909.webp": { width: 800, height: 1423 },
    "96d49663-4f7e-4abb-9778-9c5ff5e37f13.webp": { width: 800, height: 1422 },
    "98e1272c-f9ec-422e-a5a3-0ab03db0c562.webp": { width: 800, height: 1423 },
    "9a18cb48-5837-422d-90e9-1fbe0f75602e.webp": { width: 800, height: 1069 },
    "9cc58719-f5e1-4954-b15c-9a33ec01de3d.webp": { width: 800, height: 1067 },
    "9d0fbfa8-41ee-40c2-bea1-42d17f80953f.webp": { width: 800, height: 1422 },
    "9ed2eab9-0ee7-47e6-ad3b-c131b9f1c902.webp": { width: 800, height: 450 },
    "9ef95d2f-e3d2-4083-9eeb-163f3ac49068.webp": { width: 800, height: 1423 },
    "F90B45A8-D85D-4086-AEFE-AF493047A70E.webp": { width: 800, height: 1067 },
    "a0050180-6543-4d40-90ad-84ddcd79cbfd.webp": { width: 800, height: 1421 },
    "a0222b09-e804-44c6-ba98-26363ff64956.webp": { width: 800, height: 1421 },
    "a05c0a65-ada9-4509-bc4d-8799a1d22e38.webp": { width: 800, height: 1067 },
    "a23e9ce5-5aa5-40c1-8a01-e9bb6c9183c0.webp": { width: 800, height: 1067 },
    "a3d9439f-e391-4163-8fa9-77e9c0a5d399.webp": { width: 800, height: 1421 },
    "a4cf33f0-a889-4946-b38b-c92c63b2ef54.webp": { width: 800, height: 1422 },
    "a592987f-3612-4913-ad1b-deb98712970b.webp": { width: 800, height: 1422 },
    "a5bb7249-f38c-4873-bd81-b618dbb8f0f1.webp": { width: 800, height: 1422 },
    "a5f0194d-6100-4564-879c-42eefb2dc2ec.webp": { width: 800, height: 1421 },
    "a67f3f93-d0cd-43c6-b71a-02ebb4c10920.webp": { width: 800, height: 1421 },
    "a680363a-996b-49d9-9c85-99195f637ca7.webp": { width: 800, height: 1422 },
    "a70a56d8-9b5d-4789-a027-5f0c20d8d34b.webp": { width: 800, height: 1067 },
    "a7bdaf94-dc69-4898-9e5d-d8fe31d24dab.webp": { width: 800, height: 1423 },
    "a8081cf7-7937-4389-a720-edb4b31bc93a.webp": { width: 800, height: 1423 },
    "a8311638-7c3b-4aad-bcf7-20ca526ec4e1.webp": { width: 800, height: 1423 },
    "a836e79b-c146-4166-9686-2c4d946d2c10.webp": { width: 800, height: 1423 },
    "a9eb6af7-c910-4529-b6f3-27c8787d9fdf.webp": { width: 800, height: 1421 },
    "ab49a970-4aba-4e16-addc-f2be35f90812.webp": { width: 800, height: 1067 },
    "ab4db272-875a-43f9-87a6-b7a2cc2edead.webp": { width: 800, height: 1423 },
    "acd38ad6-2d61-4d8d-9906-96d3e7855578.webp": { width: 800, height: 1421 },
    "afaa21e8-35fb-4d06-bfce-8b0bca931333.webp": { width: 800, height: 1422 },
    "afd63a4c-c407-4a66-9d71-992f9439eb87.webp": { width: 800, height: 1421 },
    "b1bc3c55-e79a-465c-920c-c87b00d9fcda.webp": { width: 800, height: 1422 },
    "b2e1b36e-138a-4b3f-adaf-dfc8ce752a5c.webp": { width: 800, height: 1422 },
    "b4536cc9-ec09-4e97-83ca-ddeab0370dc2.webp": { width: 800, height: 1067 },
    "b483f522-dfb6-4581-bcd7-9a4db6ee321c.webp": { width: 800, height: 1067 },
    "b555a77d-b9df-4cf8-90fe-08619f8bd775.webp": { width: 800, height: 1422 },
    "b85a57af-a4b1-4ef7-9023-fc70a2106564.webp": { width: 800, height: 1421 },
    "bae61b35-2c9a-4898-930b-b478acba13aa.webp": { width: 800, height: 1067 },
    "bb7bbeec-2287-4cb0-94d6-9d6fa6bb68a8.webp": { width: 800, height: 1422 },
    "bc0c2488-5f2a-4a1f-ac18-0e8f6074dec1.webp": { width: 800, height: 1422 },
    "bda18747-a18f-4fc8-b74f-47e45ee7c74f.webp": { width: 800, height: 1422 },
    "be5a699f-3559-4267-8aea-7462672c310d.webp": { width: 800, height: 1421 },
    "bfb71572-32d5-4daa-88c1-ef56e62f5326.webp": { width: 800, height: 1067 },
    "c080a3a9-48c0-4788-a019-0fc4a432c549.webp": { width: 800, height: 1423 },
    "c4beda57-6e60-4632-8a3b-90d53959b547.webp": { width: 800, height: 1422 },
    "c58ee8b8-78bc-4ce0-b1c5-7e93021d0c8f.webp": { width: 800, height: 1067 },
    "ca827534-7fae-42f8-9ca8-cdd713a27045.webp": { width: 800, height: 1067 },
    "cb5782e7-8584-4d31-8b64-6789328ebd2e.webp": { width: 800, height: 1423 },
    "cd910daf-382b-406b-8485-34fb8f9ec1f8.webp": { width: 800, height: 1422 },
    "ce7c5767-7052-4e67-a458-dcd9bc2af5a0.webp": { width: 800, height: 1421 },
    "cf035ed2-6fbf-4303-98f5-fc92fda7b180.webp": { width: 800, height: 1422 },
    "cf112e29-f8b0-4079-8742-3171ac45b98f.webp": { width: 800, height: 1422 },
    "cfcedf6f-0ae6-43ca-a916-30fbfc6b6d06.webp": { width: 800, height: 1067 },
    "d51a54cf-c712-4a1b-b9e3-be333b601503.webp": { width: 800, height: 1422 },
    "d536ea35-0d2f-4e63-86bd-653053edbd8c.webp": { width: 800, height: 1422 },
    "d5bc01e1-37a3-4ff0-a4d7-28ceafadab05.webp": { width: 800, height: 1421 },
    "d5e51721-722a-4ee1-be9e-9eb76470c42d.webp": { width: 800, height: 1421 },
    "d62eb87b-31a3-4bfd-a5da-254b346f9140.webp": { width: 720, height: 1280 },
    "d681d375-8c94-4440-9fdb-2b058a4d6644.webp": { width: 800, height: 1422 },
    "d7938eee-ef91-456e-ae66-6a8fd05fa698.webp": { width: 800, height: 1421 },
    "d8376bbb-2a75-426b-a353-27147577ad9b.webp": { width: 800, height: 1421 },
    "dab352a2-5cc6-4373-84d3-c88590162329.webp": { width: 800, height: 1422 },
    "dc51e346-5150-4bc8-b025-409d7d11af98.webp": { width: 800, height: 1421 },
    "dcbb0a66-485a-414a-a730-f01665800894.webp": { width: 800, height: 1422 },
    "dd4b3f6f-c2bd-44cb-bbe0-fd03dd3e8e9c.webp": { width: 800, height: 1421 },
    "dd677520-09cf-4060-a1fe-9838b2ebcc66.webp": { width: 800, height: 450 },
    "ddd54c5d-d370-42d6-b49c-d53b3dca6482.webp": { width: 800, height: 1421 },
    "e38a6e2f-f1ee-4d0b-a4e4-b024d71b18bb.webp": { width: 800, height: 1067 },
    "e3a20f22-0d39-4fc3-ac0a-fceac5934438.webp": { width: 800, height: 1067 },
    "e783d7f7-3d61-4ccd-9793-077f8954ee6f.webp": { width: 800, height: 1067 },
    "e8ed93c8-100a-4e80-b60e-cdb47ec5632d.webp": { width: 800, height: 1421 },
    "eaf700f1-6af3-404a-afa6-cdd88182e837.webp": { width: 800, height: 1421 },
    "ebc71dc4-eeb9-4288-aee6-ec08dc56f818.webp": { width: 800, height: 1422 },
    "ecb0a446-6ab6-4899-86b4-a4127c5b3cf2.webp": { width: 800, height: 1423 },
    "f2af0f9e-8724-4582-b679-ca0753bcdbed.webp": { width: 800, height: 1422 },
    "f2cf1cb3-8b98-4835-9821-290921f6b115.webp": { width: 800, height: 1421 },
    "f4770530-2bbf-44e7-830d-d2de7ad554a5.webp": { width: 800, height: 1423 },
    "f4de00cd-0221-4395-81c8-234ef0019f10.webp": { width: 800, height: 1422 },
    "f568c6fa-50af-4f28-8f57-9e247840584e.webp": { width: 800, height: 1422 },
    "f6206420-3b18-4f04-95ea-70a91af1b1ec.webp": { width: 800, height: 1067 },
    "f652aa21-2822-45c2-b068-25821586515a.webp": { width: 800, height: 1067 },
    "f80cdc77-90ae-4a24-b594-886f5f29ac75.webp": { width: 800, height: 1067 },
    "fcd573eb-fe74-4c88-a80a-de3566fb440c.webp": { width: 800, height: 1067 },
    "ff16f49b-9cb9-49c4-bdd9-2f124dc589ba.webp": { width: 800, height: 1067 },
    "ff3d984d-5d4b-423a-bfee-d9748fd7352e.webp": { width: 800, height: 1423 },
  };


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
        {
          title: "Projeto ISA",
          cardMeta: "27/04/2026 a 30/04/2026",
          mediaFolder: "src/eventos/Projeto isa/",
          useWebpForImages: true,
          mediaDimensions: projectIsaMediaDimensions,
          mediaList: projectIsaMediaList,
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

  const convertImageFileNameToWebp = (fileName) =>
    fileName.replace(/\.(jpe?g|png)$/i, ".webp");

  const createHomeButton = () => {
    const homeButton = document.createElement("a");
    homeButton.className = "gallery-back-button";
    homeButton.textContent = "INÍCIO";
    homeButton.href = "index.html";
    return homeButton;
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
      .map((fileName) => {
        const imageFileName = eventItem.useWebpForImages
          ? convertImageFileNameToWebp(fileName)
          : fileName;
        return `${encodeURI(eventItem.mediaFolder)}${encodeURIComponent(imageFileName)}`;
      });

    eventItem.mediaList.forEach((fileName) => {
      const item = document.createElement("article");
      item.className = "gallery-media-item";
      const imageFileName =
        eventItem.useWebpForImages && !fileName.toLowerCase().endsWith(".mp4")
          ? convertImageFileNameToWebp(fileName)
          : fileName;
      const mediaUrl = `${encodeURI(eventItem.mediaFolder)}${encodeURIComponent(imageFileName)}`;

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
        image.decoding = "async";
        const mediaDimensions = eventItem.mediaDimensions?.[imageFileName];
        if (mediaDimensions) {
          image.width = mediaDimensions.width;
          image.height = mediaDimensions.height;
        } else {
          image.width = 800;
          image.height = 600;
        }
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

    const rootActions = document.createElement("div");
    rootActions.className = "gallery-top-actions";
    rootActions.appendChild(createHomeButton());
    galleryExplorer.appendChild(rootActions);

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
let isCarouselAnimating = false;

function getDirectionClass(direction) {
  if (direction < 0) {
    return {
      entering: "is-entering-from-left",
      exiting: "is-exiting-right",
    };
  }

  return {
    entering: "is-entering-from-right",
    exiting: "is-exiting-left",
  };
}

function clearSlideMotionClasses(slide) {
  slide.classList.remove(
    "is-entering-from-right",
    "is-entering-from-left",
    "is-exiting-left",
    "is-exiting-right"
  );
}

function renderDots() {
  slides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.setAttribute("aria-label", `Ir para o slide ${index + 1}`);
    dot.addEventListener("click", () => {
      goToSlide(index, index > currentSlide ? 1 : -1);
      resetAutoPlay();
    });
    dotsContainer.appendChild(dot);
  });
}

function updateCarousel() {
  slides.forEach((slide, index) => {
    clearSlideMotionClasses(slide);
    slide.classList.toggle("active", index === currentSlide);
  });

  const dots = dotsContainer.querySelectorAll("button");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

function goToSlide(index, direction = 1) {
  const nextSlideIndex = (index + slides.length) % slides.length;

  if (nextSlideIndex === currentSlide) return;
  if (isCarouselAnimating) return;

  const currentSlideElement = slides[currentSlide];
  const nextSlideElement = slides[nextSlideIndex];
  const { entering, exiting } = getDirectionClass(direction);

  isCarouselAnimating = true;
  clearSlideMotionClasses(currentSlideElement);
  clearSlideMotionClasses(nextSlideElement);

  nextSlideElement.classList.add("active", entering);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      currentSlideElement.classList.add(exiting);
      nextSlideElement.classList.remove(entering);
    });
  });

  const onTransitionEnd = (event) => {
    if (event.target !== nextSlideElement || event.propertyName !== "transform") return;

    nextSlideElement.removeEventListener("transitionend", onTransitionEnd);
    currentSlideElement.classList.remove("active", exiting);
    clearSlideMotionClasses(currentSlideElement);
    clearSlideMotionClasses(nextSlideElement);

    currentSlide = nextSlideIndex;
    isCarouselAnimating = false;
    updateCarousel();
  };

  nextSlideElement.addEventListener("transitionend", onTransitionEnd);
}

function nextSlide() {
  goToSlide(currentSlide + 1, 1);
}

function prevSlide() {
  goToSlide(currentSlide - 1, -1);
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
