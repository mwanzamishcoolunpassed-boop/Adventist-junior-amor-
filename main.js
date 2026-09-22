// =========================================
// AJM AMOR — MIZCYR
// Keep all original IDs/classes and file
// paths consistent with the supplied project.
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    // SPLASH
    const splash = document.getElementById("splash");
    const mainContent = document.getElementById("mainContent");

    setTimeout(function () {
        if (splash) {
            splash.style.opacity = "0";
            splash.style.visibility = "hidden";
            setTimeout(() => splash.style.display = "none", 700);
        }
        if (mainContent) {
            mainContent.style.display = "block";
        }
    }, 1800);

    // MASTER GUIDE
    const mgGrid = document.getElementById("mgGrid");
    if (mgGrid) {
        mgGrid.innerHTML = "";

        const MasterGuideFiles = [
            "history",
            "curriculum",
            "african",
            "manual"
        ];

        MasterGuideFiles.forEach(function (file) {
            const grid = document.createElement("div");
            grid.className = "grid";
            grid.innerText = file.toUpperCase();

            grid.onclick = function () {
                openMgDocument(
                    "pdf/masterguide/" + file + ".pdf",
                    file.toUpperCase()
                );
            };

            mgGrid.appendChild(grid);
        });
    }

    // HONORS
    const honorsContainer =
        document.getElementById("honorsContainer");

    if (honorsContainer) {
        honorsContainer.innerHTML = "";

        const honors = [
            {
                title: "First Aid",
                img: "images/honors/first.jpg",
                pdf: "pdf/hs/fd.pdf"
            },
            {
                title: "Bully Prevention",
                img: "images/honors/bully.jpg",
                pdf: "pdf/hs/bu.pdf"
            },
            {
                title: "Flags",
                img: "images/honors/flags.jpg",
                pdf: "pdf/hs/flags.pdf"
            },
            {
                title: "Prophets and Prophecy",
                img: "images/honors/prophecy.jpg",
                pdf: "pdf/hs/pp.pdf"
            },
            {
                title: "Literature Evangelism",
                img: "images/honors/literature.jpg",
                pdf: "pdf/hs/lit.pdf"
            },
            {
                title: "Judges and Kings",
                img: "images/honors/judges.jpg",
                pdf: "pdf/hs/jud.pdf"
            },
            {
                title: "Stars",
                img: "images/honors/stars.jpg",
                pdf: "pdf/hs/sts.pdf"
            },
            {
                title: "Peacemaking",
                img: "images/honors/peace.jpg",
                pdf: "pdf/hs/peace.pdf"
            },
            {
                title: "Mammals",
                img: "images/honors/mammals.jpg",
                pdf: "pdf/hs/mmm.pdf"
            },
            {
                title: "Poultry and Poultry Raising",
                img: "images/honors/poultry.jpg",
                pdf: "pdf/hs/ppr.pdf"
            },
            {
                title: "Swimming",
                img: "images/honors/swimming.jpg",
                pdf: "pdf/hs/sng.pdf"
            },
            {
                title: "Preaching",
                img: "images/honors/preaching.jpg",
                pdf: "pdf/hs/prg.pdf"
            },
            {
                title: "Stewardship",
                img: "images/honors/stewardship.jpg",
                pdf: "pdf/hs/stp.pdf"
            },
            {
                title: "Beekeeping",
                img: "images/honors/beekeeping.jpg",
                pdf: "pdf/hs/beekeeping.pdf"
            },
            {
                title: "Reptiles and Amphibians",
                img: "images/honors/reptiles.jpg",
                pdf: "pdf/hs/ar.pdf"
            },
            {
                title: "Alive Bible",
                img: "images/honors/bible.jpg",
                pdf: "pdf/hs/ab.pdf"
            },
            {
                title: "Baking",
                img: "images/honors/baking.jpg",
                pdf: "pdf/hs/baking.pdf"
            },
            {
                title: "Drill and Marching",
                img: "images/honors/drill.jpg",
                pdf: "pdf/hs/drill.pdf"
            },
            {
                title: "Knot Tying",
                img: "images/honors/knots.jpg",
                pdf: "pdf/hs/knots.pdf"
            },
            {
                title: "Birds",
                img: "images/honors/birds.jpg",
                pdf: "pdf/hs/birds.pdf"
            },
            {
                title: "Cats and Dogs of the Wild",
                img: "images/honors/cat.jpg",
                pdf: "pdf/hs/catsdogs.pdf"
            },
            {
                title: "Fire Building",
                img: "images/honors/fire.jpg",
                pdf: "pdf/hs/fb.pdf"
            },
            {
                title: "Campcraft",
                img: "images/honors/camp.jpg",
                pdf: "pdf/hs/campcraft.pdf"
            },
            {
                title: "Chairmanship",
                img: "images/honors/chair.jpg",
                pdf: "pdf/hs/chairmanship.pdf"
            },
            {
                title: "Sanctuary",
                img: "images/honors/sanctuary.jpg",
                pdf: "pdf/hs/sanctuary.pdf"
            }
        ];

        honors.forEach(function (honor) {
            const card = document.createElement("div");

            card.className = "honor-card";

            card.style.backgroundImage =
                "url('" + honor.img + "')";

            card.innerText = honor.title.toUpperCase();

            card.onclick = function () {
                openHonorDocument(
                    honor.pdf,
                    honor.title.toUpperCase()
                );
            };

            honorsContainer.appendChild(card);
        });
    }
});

// =========================================
// MENU
// =========================================

function toggleMenu() {
    const menuOptions =
        document.getElementById("menuOptions");

    const menuButton =
        document.getElementById("menuDots");

    if (!menuOptions) return;

    const isOpen =
        menuOptions.style.display === "block";

    menuOptions.style.display =
        isOpen ? "none" : "block";

    if (menuButton) {
        menuButton.setAttribute(
            "aria-expanded",
            String(!isOpen)
        );
    }
}

// Keyboard support for hamburger
document.addEventListener("keydown", function (event) {

    const menuButton =
        document.getElementById("menuDots");

    if (
        event.key === "Enter" &&
        document.activeElement === menuButton
    ) {
        toggleMenu();
    }
});

// Close menu when tapping outside it
document.addEventListener("click", function (event) {

    const menu =
        document.getElementById("menuOptions");

    const button =
        document.getElementById("menuDots");

    if (!menu || !button) return;

    if (
        menu.style.display === "block" &&
        !menu.contains(event.target) &&
        !button.contains(event.target)
    ) {
        menu.style.display = "none";

        button.setAttribute(
            "aria-expanded",
            "false"
        );
    }
});

// =========================================
// WHATSAPP / SHARE
// =========================================

function showWhatsAppLink() {

    const message =
        document.getElementById("whatsappMessage");

    if (!message) return;

    message.style.display = "block";

    setTimeout(function () {
        message.style.display = "none";
    }, 5000);
}

async function shareSite() {

    const shareData = {
        title: "AJM AMOR",
        text:
            "AJM AMOR — Adventist club resources by MIZCYR."
    };

    try {

        if (navigator.share) {

            await navigator.share(shareData);

        } else {

            await navigator.clipboard.writeText(
                window.location.href
            );

            alert("LINK COPIED.");
        }

    } catch (error) {

        // User cancelled the share sheet.
        // No action needed.

    }
}

// =========================================
// SHOW SECTIONS
// =========================================

function showContent(sectionId) {

    const sections =
        document.querySelectorAll(
            ".content-section"
        );

    sections.forEach(function (section) {
        section.style.display = "none";
    });

    const mainGrids =
        document.getElementById("mainGrids");

    if (mainGrids) {
        mainGrids.style.display = "none";
    }

    const target =
        document.getElementById(sectionId);

    if (target) {

        target.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}

function goBack() {

    const sections =
        document.querySelectorAll(
            ".content-section"
        );

    sections.forEach(function (section) {
        section.style.display = "none";
    });

    const mainGrids =
        document.getElementById("mainGrids");

    if (mainGrids) {
        mainGrids.style.display = "grid";
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// =========================================
// POPUP HELPERS
// =========================================

function showPopup(id) {

    const popup =
        document.getElementById(id);

    if (!popup) return;

    popup.style.display = "flex";

    popup.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow = "hidden";
}

function hidePopup(id) {

    const popup =
        document.getElementById(id);

    if (!popup) return;

    popup.style.display = "none";

    popup.setAttribute(
        "aria-hidden",
        "true"
    );

    const openPopup =
        document.querySelector(
            ".popup[aria-hidden='false']"
        );

    if (!openPopup) {
        document.body.style.overflow = "";
    }
}

// =========================================
// ADVENTURER POPUPS
// =========================================

function openCoreOptions() {
    showPopup("corePopup");
}

function closeCoreOptions() {
    hidePopup("corePopup");
}

function openSkillsOptions() {
    showPopup("skillsPopup");
}

function closeSkillsOptions() {
    hidePopup("skillsPopup");
}

function openManualOptions() {
    showPopup("manualPopup");
}

function closeManualOptions() {
    hidePopup("manualPopup");
}// =========================================
// PATHFINDER POPUP
// =========================================

function openPfDocument(
    file,
    title = "PATHFINDER DOCUMENT"
) {

    const view =
        document.getElementById("pfView");

    const download =
        document.getElementById("pfDownload");

    const frame =
        document.getElementById("pfFrame");

    const titleBox =
        document.getElementById("pfPopupTitle");

    if (!view || !download || !frame) return;

    view.href = file;

    download.href = file;

    frame.src = file;

    if (titleBox) {
        titleBox.textContent = title;
    }

    showPopup("pfPopup");
}

function openPledge() {

    openPfDocument(
        "pdf/pl.pdf",
        "PLEDGE"
    );
}

function openHancock() {

    openPfDocument(
        "pdf/historyh.pdf",
        "HISTORY HANCOCK"
    );
}

function openSummary() {

    openPfDocument(
        "pdf/history-summary.pdf",
        "HISTORY SUMMARY"
    );
}

function openLaw() {

    openPfDocument(
        "pdf/lw.pdf",
        "LAW"
    );
}

function openSong() {

    openPfDocument(
        "pdf/sg.pdf",
        "SONG"
    );
}

function closePfPopup() {

    const frame =
        document.getElementById("pfFrame");

    if (frame) {
        frame.src = "about:blank";
    }

    hidePopup("pfPopup");
}

// =========================================
// MASTER GUIDE POPUP
// =========================================

function openMgDocument(file, title) {

    const view =
        document.getElementById("mgView");

    const download =
        document.getElementById("mgDownload");

    const frame =
        document.getElementById("mgFrame");

    const titleBox =
        document.getElementById("mgPopupTitle");

    if (!view || !download || !frame) return;

    view.href = file;

    download.href = file;

    frame.src = file;

    if (titleBox) {
        titleBox.textContent = title;
    }

    showPopup("mgPopup");
}

function closeMgPopup() {

    const frame =
        document.getElementById("mgFrame");

    if (frame) {
        frame.src = "about:blank";
    }

    hidePopup("mgPopup");
}

// =========================================
// HONORS POPUP
// =========================================

function openHonorDocument(file, title) {

    const view =
        document.getElementById("honorView");

    const download =
        document.getElementById("honorDownload");

    const frame =
        document.getElementById("honorFrame");

    const titleBox =
        document.getElementById("honorPopupTitle");

    if (!view || !download || !frame) return;

    view.href = file;

    download.href = file;

    frame.src = file;

    if (titleBox) {
        titleBox.textContent = title;
    }

    showPopup("honorPopup");
}

function closeHonorPopup() {

    const frame =
        document.getElementById("honorFrame");

    if (frame) {
        frame.src = "about:blank";
    }

    hidePopup("honorPopup");
}

// =========================================
// UNIVERSAL POPUP BEHAVIOUR
// =========================================

document.addEventListener("click", function (event) {

    if (
        event.target.classList.contains("popup")
    ) {

        event.target.style.display = "none";

        event.target.setAttribute(
            "aria-hidden",
            "true"
        );

        const frame =
            event.target.querySelector("iframe");

        if (frame) {
            frame.src = "about:blank";
        }

        const openPopup =
            document.querySelector(
                ".popup[aria-hidden='false']"
            );

        if (!openPopup) {
            document.body.style.overflow = "";
        }
    }
});

document.addEventListener("keydown", function (event) {

    if (event.key !== "Escape") return;

    const openPopups =
        document.querySelectorAll(
            ".popup[aria-hidden='false']"
        );

    openPopups.forEach(function (popup) {

        popup.style.display = "none";

        popup.setAttribute(
            "aria-hidden",
            "true"
        );

        const frame =
            popup.querySelector("iframe");

        if (frame) {
            frame.src = "about:blank";
        }
    });

    document.body.style.overflow = "";
});