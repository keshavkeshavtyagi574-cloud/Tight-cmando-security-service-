/* =========================================
   TIGHT COMMANDO SECURITY SERVICE
   MAIN JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       MOBILE MENU
    ========================================= */

    const menuBtn = document.getElementById("menuBtn");
    const navbar = document.getElementById("navbar");

    if (menuBtn && navbar) {

        menuBtn.addEventListener("click", function () {
            navbar.classList.toggle("active");

            if (navbar.classList.contains("active")) {
                menuBtn.innerHTML = "✕";
            } else {
                menuBtn.innerHTML = "☰";
            }
        });

        // Menu link पर क्लिक करने के बाद mobile menu बंद
        const navLinks = navbar.querySelectorAll("a");

        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                navbar.classList.remove("active");
                menuBtn.innerHTML = "☰";
            });
        });
    }


    /* =========================================
       CURRENT YEAR
    ========================================= */

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* =========================================
       SECURITY REQUEST FORM
    ========================================= */

    const securityForm = document.getElementById("securityForm");
    const formMessage = document.getElementById("formMessage");

    if (securityForm) {

        securityForm.addEventListener("submit", function (event) {

            event.preventDefault();

            // Form values
            const fullName =
                document.getElementById("fullName").value.trim();

            const mobile =
                document.getElementById("mobile").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const company =
                document.getElementById("company").value.trim();

            const service =
                document.getElementById("service").value;

            const guards =
                document.getElementById("guards").value;

            const date =
                document.getElementById("date").value;

            const time =
                document.getElementById("time").value;

            const location =
                document.getElementById("location").value.trim();

            const message =
                document.getElementById("message").value.trim();

            const captcha =
                document.getElementById("captcha").value.trim();


            /* =========================================
               MOBILE VALIDATION
            ========================================= */

            const mobilePattern = /^[6-9][0-9]{9}$/;

            if (!mobilePattern.test(mobile)) {

                showFormMessage(
                    "Please enter a valid 10-digit Indian mobile number.",
                    "error"
                );

                return;
            }


            /* =========================================
               CAPTCHA VALIDATION
            ========================================= */

            if (captcha !== "12") {

                showFormMessage(
                    "Security check failed. Please enter the correct answer.",
                    "error"
                );

                return;
            }


            /* =========================================
               BASIC EMAIL VALIDATION
            ========================================= */

            if (email !== "") {

                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (!emailPattern.test(email)) {

                    showFormMessage(
                        "Please enter a valid email address.",
                        "error"
                    );

                    return;
                }
            }


            /* =========================================
               SUCCESS
            ========================================= */

            showFormMessage(
                "Your security request has been submitted successfully. Our team will contact you.",
                "success"
            );


            // Temporary local storage
            // यह demo/request को browser में save करता है।
            const requestData = {
                name: fullName,
                mobile: mobile,
                email: email,
                company: company,
                service: service,
                guards: guards,
                date: date,
                time: time,
                location: location,
                message: message,
                submittedAt: new Date().toISOString()
            };

            saveSecurityRequest(requestData);


            // Form clear
            securityForm.reset();

        });
    }


    /* =========================================
       FORM MESSAGE
    ========================================= */

    function showFormMessage(text, type) {

        if (!formMessage) {
            return;
        }

        formMessage.textContent = text;

        if (type === "success") {
            formMessage.style.color = "#65d68a";
        } else {
            formMessage.style.color = "#ff7777";
        }

        setTimeout(function () {
            formMessage.textContent = "";
        }, 7000);
    }


    /* =========================================
       SAVE REQUEST LOCALLY
    ========================================= */

    function saveSecurityRequest(data) {

        try {

            const oldRequests =
                JSON.parse(
                    localStorage.getItem("securityRequests")
                ) || [];

            oldRequests.push(data);

            localStorage.setItem(
                "securityRequests",
                JSON.stringify(oldRequests)
            );

        } catch (error) {

            console.log(
                "Local storage is not available."
            );
        }
    }


    /* =========================================
       GUARD LOGIN DEMO
    ========================================= */

    const guardLoginForm =
        document.getElementById("guardLoginForm");

    const guardLoginMessage =
        document.getElementById("guardLoginMessage");

    if (guardLoginForm) {

        guardLoginForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                if (guardLoginMessage) {

                    guardLoginMessage.textContent =
                        "Guard portal will be connected to the secure backend.";

                    guardLoginMessage.style.color =
                        "#d6ad45";
                }

            }
        );
    }


    /* =========================================
       CLIENT LOGIN DEMO
    ========================================= */

    const clientLoginForm =
        document.getElementById("clientLoginForm");

    const clientLoginMessage =
        document.getElementById("clientLoginMessage");

    if (clientLoginForm) {

        clientLoginForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                if (clientLoginMessage) {

                    clientLoginMessage.textContent =
                        "Client portal will be connected to the secure backend.";

                    clientLoginMessage.style.color =
                        "#d6ad45";
                }

            }
        );
    }


    /* =========================================
       NUMBER INPUT - MOBILE
    ========================================= */

    const mobileInput =
        document.getElementById("mobile");

    if (mobileInput) {

        mobileInput.addEventListener(
            "input",
            function () {

                this.value =
                    this.value.replace(/[^0-9]/g, "");

                if (this.value.length > 10) {
                    this.value =
                        this.value.substring(0, 10);
                }

            }
        );
    }


    /* =========================================
       GUARDS NUMBER
    ========================================= */

    const guardsInput =
        document.getElementById("guards");

    if (guardsInput) {

        guardsInput.addEventListener(
            "input",
            function () {

                if (this.value < 1) {
                    this.value = "";
                }

            }
        );
    }


    /* =========================================
       DATE - PREVENT PAST DATES
    ========================================= */

    const dateInput =
        document.getElementById("date");

    if (dateInput) {

        const today =
            new Date().toISOString().split("T")[0];

        dateInput.setAttribute("min", today);
    }


    /* =========================================
       SCROLL ANIMATION
    ========================================= */

    const animatedElements =
        document.querySelectorAll(
            ".service-card, .why-card, .special-card, .management-grid > div"
        );

    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.style.opacity = "1";
                            entry.target.style.transform =
                                "translateY(0)";

                            observer.unobserve(entry.target);
                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        animatedElements.forEach(function (element) {

            element.style.opacity = "0";
            element.style.transform =
                "translateY(20px)";
            element.style.transition =
                "opacity 0.6s ease, transform 0.6s ease";

            observer.observe(element);

        });
    }


    /* =========================================
       CLOSE MENU WHEN CLICKING OUTSIDE
    ========================================= */

    document.addEventListener("click", function (event) {

        if (!navbar || !menuBtn) {
            return;
        }

        const clickedInsideMenu =
            navbar.contains(event.target);

        const clickedMenuButton =
            menuBtn.contains(event.target);

        if (
            navbar.classList.contains("active") &&
            !clickedInsideMenu &&
            !clickedMenuButton
        ) {

            navbar.classList.remove("active");
            menuBtn.innerHTML = "☰";
        }

    });


    /* =========================================
       CONSOLE MESSAGE
    ========================================= */

    console.log(
        "Tight Commando Security Service website loaded successfully."
    );

});
