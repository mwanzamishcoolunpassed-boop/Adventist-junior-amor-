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

});



// MASTER GUIDE
const mgGrid = document.getElementById("mgGrid");

if (mgGrid) {
    mgGrid.innerHTML = "";

    const MasterGuideFiles = [
        {
            file: "history",
            title: "history"
        },
        {
            file: "curriculum",
            title: "curriculum"
        },
        {
            file: "african",
            title: "african"
        },
        {
            file: "masterguide-manual",
            title: "manual"
        }
    ];

    MasterGuideFiles.forEach(function (item) {
        const grid = document.createElement("div");
        grid.className = "grid";
        grid.innerText = item.title.toUpperCase();

        grid.onclick = function () {
            openMgDocument(
                item.file + ".pdf",
                item.title.toUpperCase()
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
                pdf: "fd.pdf"
            },
            {
                title: "Bully Prevention",
                img: "images/honors/bully.jpg",
                pdf: "bu.pdf"
            },
            {
                title: "Flags",
                img: "images/honors/flags.jpg",
                pdf: "flags.pdf"
            },
            {
                title: "Prophets and Prophecy",
                img: "images/honors/prophecy.jpg",
                pdf: "pp.pdf"
            },
            {
                title: "Literature Evangelism",
                img: "images/honors/literature.jpg",
                pdf: "lit.pdf"
            },
            {
                title: "Judges and Kings",
                img: "images/honors/judges.jpg",
                pdf: "jud.pdf"
            },
            {
                title: "Stars",
                img: "images/honors/stars.jpg",
                pdf: "sts.pdf"
            },
            {
                title: "Peacemaking",
                img: "images/honors/peace.jpg",
                pdf: "peace.pdf"
            },
            {
                title: "Mammals",
                img: "images/honors/mammals.jpg",
                pdf: "mmm.pdf"
            },
            {
                title: "Poultry and Poultry Raising",
                img: "images/honors/poultry.jpg",
                pdf: "ppr.pdf"
            },
            {
                title: "Swimming",
                img: "images/honors/swimming.jpg",
                pdf: "sng.pdf"
            },
            {
                title: "Preaching",
                img: "images/honors/preaching.jpg",
                pdf: "prg.pdf"
            },
            {
                title: "Stewardship",
                img: "images/honors/stewardship.jpg",
                pdf: "stp.pdf"
            },
            {
                title: "Beekeeping",
                img: "images/honors/beekeeping.jpg",
                pdf: "beekeeping.pdf"
            },
            {
                title: "Reptiles and Amphibians",
                img: "images/honors/reptiles.jpg",
                pdf: "ar.pdf"
            },
            {
                title: "Alive Bible",
                img: "images/honors/bible.jpg",
                pdf: "ab.pdf"
            },
            {
                title: "Baking",
                img: "images/honors/baking.jpg",
                pdf: "baking.pdf"
            },
            {
                title: "Drill and Marching",
                img: "images/honors/drill.jpg",
                pdf: "drill.pdf"
            },
            {
                title: "Knot Tying",
                img: "images/honors/knots.jpg",
                pdf: "knots.pdf"
            },
            {
                title: "Birds",
                img: "images/honors/birds.jpg",
                pdf: "birds.pdf"
            },
            {
                title: "Cats and Dogs of the Wild",
                img: "images/honors/cat.jpg",
                pdf: "catsdogs.pdf"
            },
            {
                title: "Fire Building",
                img: "images/honors/fire.jpg",
                pdf: "fb.pdf"
            },
            {
                title: "Campcraft",
                img: "images/honors/camp.jpg",
                pdf: "campcraft.pdf"
            },
            {
                title: "Chairmanship",
                img: "images/honors/chair.jpg",
                pdf: "chairmanship.pdf"
            },
            {
                title: "Sanctuary",
                img: "images/honors/sanctuary.jpg",
                pdf: "sanctuary.pdf"
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
}


// =========================================
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
        "pl.pdf",
        "PLEDGE"
    );
}


function openHancock() {

    openPfDocument(
        "historyh.pdf",
        "HISTORY HANCOCK"
    );
}


function openSummary() {

    openPfDocument(
        "history-summary.pdf",
        "HISTORY SUMMARY"
    );
}


function openLaw() {

    openPfDocument(
        "lw.pdf",
        "LAW"
    );
}


function openSong() {

    openPfDocument(
        "sg.pdf",
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
