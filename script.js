gsap.registerPlugin(scrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  const footer = document.querySelector(".footer");
  const lastCard = document.querySelector(".card.scroll");
  const pinnedSections = gsap.utils.toArray(".pinned");

  pinnedSections  .forEach((section, index, sections) => {
    let img = section.querySelector(".img");

    let nextSection = sections[index + 1] || lastCard;
    let endScalePoint = `top+=${nextSection.offsetTop - section.offsetTop} top`;

    gsap.to(section, {
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end:
          index === sections.length
            ? `+=${lastCard.offsetHeight / 2}`
            : footer.offsetTop - window.innerHeight,
        pin: true,
        pinSpacing: false,
        scrub: 1,
      },
    });
  });
});
