const pricing = {
  jio: {
    name: "Jio",
    real: { six: 1841, year: 3599 },
    logo: "assets/jio-logo.webp",
  },
  airtel: {
    name: "Airtel",
    real: { six: 2098, year: 3599 },
    logo: "assets/airtel-logo.png",
  },
  vi: {
    name: "Vi",
    real: { six: 2130, year: 3599 },
    logo: "assets/vi-logo.jpg",
  },
};

const plans = {
  six: {
    title: "6 months",
    days: 180,
    data: "360GB",
    offer: 599,
  },
  year: {
    title: "1 year",
    days: 365,
    data: "730GB",
    offer: 999,
  },
};

const state = {
  operator: "jio",
  plan: "six",
  orderId: "",
  chatStarted: false,
};

const merchant = {
  vpa: "prashant166@ptaxis",
  name: "netbase",
};

const inr = new Intl.NumberFormat("en-IN", {
  maximumFractionDigits: 0,
});

const appSchemes = {
  gpay: "tez://upi/pay",
  phonepe: "phonepe://pay",
  paytm: "paytmmp://pay",
  bhim: "bhim://upi/pay",
  any: "upi://pay",
};

const rechargeForm = document.querySelector("#rechargeForm");
const rechargeSection = document.querySelector("#recharge");
const orderPage = document.querySelector("#orderPage");
const afterPaymentDetails = document.querySelector("#afterPaymentDetails");
const mobileInput = document.querySelector("#mobileNumber");
const mobileError = document.querySelector("#mobileError");
const operatorButtons = document.querySelectorAll("[data-operator]");
const planButtons = document.querySelectorAll("[data-plan]");
const backToRecharge = document.querySelector("#backToRecharge");
const openUpiApps = document.querySelector("#openUpiApps");
const upiModal = document.querySelector("#upiModal");
const closeModalButtons = document.querySelectorAll("[data-close-modal]");
const upiAppButtons = document.querySelectorAll("[data-upi-app]");
const paymentStatus = document.querySelector("#paymentStatus");
const orderLogo = document.querySelector("[data-order-logo]");
const summaryLogo = document.querySelector("[data-summary-logo]");
const visualLogo = document.querySelector("[data-visual-logo]");
const chatLauncher = document.querySelector("#chatLauncher");
const supportChat = document.querySelector("#supportChat");
const chatClose = document.querySelector("#chatClose");
const chatMessages = document.querySelector("#chatMessages");
const chatForm = document.querySelector("#chatForm");
const chatInput = document.querySelector("#chatInput");
const quickReplyButtons = document.querySelectorAll("[data-chat-question]");
const infoButtons = document.querySelectorAll("[data-info-modal]");
const infoModal = document.querySelector("#infoModal");
const closeInfoButtons = document.querySelectorAll("[data-close-info]");
const infoModalTitle = document.querySelector("#infoModalTitle");
const infoModalEyebrow = document.querySelector("#infoModalEyebrow");
const infoModalBody = document.querySelector("#infoModalBody");
const showOttApps = document.querySelector("#showOttApps");
const ottModal = document.querySelector("#ottModal");
const closeOttButtons = document.querySelectorAll("[data-close-ott]");
const ottFullGrid = document.querySelector("#ottFullGrid");

const ottApps = [
  "ZEE5",
  "SonyLIV",
  "Sun NXT",
  "Lionsgate Play",
  "Discovery+",
  "Hoichoi",
  "Eros Now",
  "ShemarooMe",
  "Epic ON",
  "DocuBay",
  "Chaupal",
  "Planet Marathi",
  "Aha",
  "ManoramaMAX",
  "NammaFlix",
  "Dangal Play",
  "Playflix",
  "FanCode",
  "Stage",
  "Ultra Jhakaas",
  "Klikk",
  "Travelxp",
];

const contactEmail = "netbase@gmail.com";

const infoPages = {
  about: {
    title: "About us",
    eyebrow: "Who we are",
    sections: [
      {
        heading: "About netbase",
        paragraphs: [
          "netbase is an independent recharge offer page made for users who want long-validity mobile packs with simple UPI payment.",
          "The website focuses on Jio, Airtel, and Vi users, with 2GB daily data, unlimited calls, and OTT benefits shown clearly before payment.",
        ],
      },
      {
        heading: "What users can check",
        items: [
          "Compare the 6 month and 1 year recharge offer before paying.",
          "See the selected operator, mobile number, amount, savings, and pack details in the order summary.",
          "Use the support chat for common questions about activation time, data benefits, OTT access, UPI payment, and refunds.",
        ],
      },
      {
        heading: "Important note",
        paragraphs: [
          "netbase is not an official Jio, Airtel, or Vi website. Recharge activation and benefits may depend on operator rules, service circle, payment status, and number eligibility.",
        ],
      },
    ],
  },
  contact: {
    title: "Contact",
    eyebrow: "Support",
    sections: [
      {
        heading: "Email support",
        paragraphs: [
          `For support, email us at ${contactEmail}.`,
          "When contacting us, include your mobile number, selected operator, selected plan, payment amount, order ID if visible, and UPI reference number if payment was deducted.",
        ],
      },
      {
        heading: "What we can help with",
        items: [
          "Recharge not active after payment.",
          "UPI payment deducted but order still pending.",
          "OTT benefit or activation question.",
          "Wrong plan selected before payment.",
          "Refund status for a failed recharge.",
        ],
      },
      {
        heading: "Before sending email",
        paragraphs: [
          "Please wait a few minutes after UPI payment because some bank confirmations can be delayed. Do not pay twice for the same order until the first payment status is clear.",
        ],
      },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    eyebrow: "Your data",
    sections: [
      {
        heading: "Information we use",
        paragraphs: [
          "We use the mobile number, selected operator, selected plan, order amount, and basic order details only to show the recharge summary, support information, and payment request.",
          "If you contact support, we may also use the order ID, UPI reference number, screenshots, and messages you provide to check the issue.",
        ],
      },
      {
        heading: "Payment privacy",
        paragraphs: [
          "UPI payment is handled inside the UPI app chosen on your device. netbase does not ask for your UPI PIN, bank password, card PIN, or OTP on this website.",
        ],
      },
      {
        heading: "How information is protected",
        items: [
          "Use your details only for recharge, support, refund checks, and order communication.",
          "Do not sell personal information to advertisers.",
          "Avoid sharing your UPI PIN, OTP, or banking password with anyone claiming to be support.",
        ],
      },
    ],
  },
  terms: {
    title: "Terms",
    eyebrow: "Usage rules",
    sections: [
      {
        heading: "Using this website",
        paragraphs: [
          "By using netbase, you agree to enter the correct mobile number, choose the correct operator, review the amount, and confirm the order before making payment.",
          "Recharge offers, discount display, OTT benefits, and activation time may vary based on operator rules, payment status, circle availability, and technical processing.",
        ],
      },
      {
        heading: "User responsibility",
        items: [
          "Check the mobile number carefully before payment.",
          "Select the correct operator for the SIM number.",
          "Do not share UPI PIN, OTP, bank password, or private banking details with anyone.",
          "Keep your UPI payment reference if you need support.",
        ],
      },
      {
        heading: "Service note",
        paragraphs: [
          "netbase is an independent website and is not an official website of Jio, Airtel, or Vi. Operator names and logos are shown only to help users identify their selected network.",
        ],
      },
    ],
  },
  refund: {
    title: "Refund Policy",
    eyebrow: "Failed recharge",
    sections: [
      {
        heading: "When refund may apply",
        paragraphs: [
          "A refund may apply if payment is successfully deducted but the recharge fails, the order cannot be processed, or the same order is paid twice by mistake.",
        ],
      },
      {
        heading: "When refund may not apply",
        items: [
          "Recharge is successful on the selected mobile number.",
          "The wrong mobile number or wrong operator was entered by the user.",
          "The payment is still pending at the bank or UPI app and has not been confirmed as successful.",
          "The operator has already activated the pack or benefit.",
        ],
      },
      {
        heading: "How to request refund",
        paragraphs: [
          `Email ${contactEmail} with your mobile number, order ID, selected operator, amount paid, UPI reference number, and a screenshot of the payment if available.`,
          "After verification, eligible refunds are sent back through the original payment route. Final timing can depend on bank, UPI, and payment provider processing.",
        ],
      },
    ],
  },
};

function money(value) {
  return `\u20B9${inr.format(value)}`;
}

function getSelection(planKey = state.plan, operatorKey = state.operator) {
  const operator = pricing[operatorKey];
  const plan = plans[planKey];
  const real = operator.real[planKey];
  const saving = real - plan.offer;
  const discount = Math.round((saving / real) * 100);

  return { operator, plan, real, saving, discount };
}

function setText(selector, value) {
  const node = document.querySelector(selector);
  if (node) node.textContent = value;
}

function setActive(buttons, key, value) {
  buttons.forEach((button) => {
    const active = button.dataset[key] === value;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function refreshPlanSavings() {
  const six = getSelection("six");
  const year = getSelection("year");

  setText("[data-saving-six]", `Save ${money(six.saving)}`);
  setText("[data-saving-year]", `Save ${money(year.saving)}`);
}

function refreshSummary() {
  const { operator, plan, real, saving, discount } = getSelection();

  setText("[data-visual-operator]", operator.name);
  setText("[data-visual-days]", plan.days);
  setText("[data-visual-price]", money(plan.offer));
  setText("[data-summary-title]", `${operator.name} ${plan.title}`);
  setText("[data-summary-real]", money(real));
  setText("[data-summary-offer]", money(plan.offer));
  setText("[data-summary-saving]", money(saving));
  setText("[data-summary-data]", plan.data);
  setText("[data-summary-days]", `${plan.days} days`);
  setText("[data-summary-discount]", `${discount}% off`);
  summaryLogo.src = operator.logo;
  summaryLogo.alt = `${operator.name} logo`;
  visualLogo.src = operator.logo;
  visualLogo.alt = `${operator.name} logo`;
}

function refreshOrder() {
  const { operator, plan, real, saving } = getSelection();
  const mobile = mobileInput.value.trim();

  setText("[data-order-mobile]", `+91 ${mobile}`);
  setText("[data-order-operator]", operator.name);
  setText("[data-order-pack]", `${plan.title} · ${plan.days} days`);
  setText("[data-order-saving]", money(saving));
  setText("[data-order-total]", money(plan.offer));
  setText("[data-modal-amount]", money(plan.offer));
  openUpiApps.innerHTML = `<i data-lucide="smartphone"></i> Pay ${money(plan.offer)} with UPI`;
  orderLogo.src = operator.logo;
  orderLogo.alt = `${operator.name} logo`;

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function validateMobile() {
  const mobile = mobileInput.value.trim();

  if (!mobile) {
    mobileError.textContent = "Enter mobile number.";
    return false;
  }

  if (!/^[6-9]\d{9}$/.test(mobile)) {
    mobileError.textContent = "Enter a valid 10-digit mobile number.";
    return false;
  }

  mobileError.textContent = "";
  return true;
}

function showOrderPage() {
  state.orderId = `RP${Date.now().toString().slice(-7)}`;
  refreshOrder();
  rechargeSection.hidden = true;
  orderPage.hidden = false;
  afterPaymentDetails.hidden = false;
  orderPage.scrollIntoView({ behavior: "smooth", block: "start" });
}

function showRechargePage() {
  orderPage.hidden = true;
  afterPaymentDetails.hidden = true;
  rechargeSection.hidden = false;
  rechargeSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function createUpiUrl(appKey) {
  const { operator, plan } = getSelection();
  const baseUrl = appSchemes[appKey] || appSchemes.any;
  const params = new URLSearchParams({
    pa: merchant.vpa,
    pn: merchant.name,
    tr: state.orderId || `RP${Date.now().toString().slice(-7)}`,
    tn: `${operator.name} ${plan.title} recharge`,
    am: String(plan.offer),
    mam: String(plan.offer),
    cu: "INR",
  });

  return `${baseUrl}?${params.toString()}`;
}

function getDayGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

function getGreeting() {
  const greetings = [
    `${getDayGreeting()}, how may I help you?`,
    `${getDayGreeting()}! I can help with recharge status, data plans, OTT apps, or refunds.`,
    `Hi, I am netbase AI. Ask me about activation time, UPI payment, or the 22 OTT apps.`,
  ];

  return greetings[Math.floor(Math.random() * greetings.length)];
}

function hasAny(text, keywords) {
  return keywords.some((keyword) => text.includes(keyword));
}

function addChatMessage(sender, text, type = "bot") {
  const message = document.createElement("div");
  const label = document.createElement("strong");
  const bubble = document.createElement("div");

  message.className = `chat-message ${type}`;
  label.textContent = sender;
  bubble.className = "chat-bubble";
  bubble.textContent = text;

  message.append(label, bubble);
  chatMessages.append(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotReply(question) {
  const text = question.toLowerCase();
  const { operator, plan, saving, real, discount } = getSelection();
  const selectedPack = `${operator.name} ${plan.title}`;
  const orderId = state.orderId || "created after you continue to payment";

  if (text.includes("ott") && hasAny(text, ["active", "activation", "activate", "login", "password", "coupon", "voucher", "code"])) {
    return "OTT access details are shared after recharge activation. Use the mobile number from the order when the OTT app asks for login or verification.";
  }

  if (hasAny(text, ["active", "activation", "when", "time", "start", "activated"])) {
    return `Your ${selectedPack} recharge usually becomes active within 5 to 15 minutes after payment. In some circles it can take up to 30 minutes.`;
  }

  if (hasAny(text, ["track", "status", "order", "where", "processing"])) {
    return `Your order ID is ${orderId}. After payment, status moves from Payment received to Recharge processing, then Active.`;
  }

  if (hasAny(text, ["data", "gb", "plan", "validity", "benefit", "benefits", "pack"])) {
    return `${selectedPack} gives 2GB data per day, unlimited calls, ${plan.data} total data, and ${plan.days} days validity.`;
  }

  if (hasAny(text, ["ott", "app", "subscription", "movie", "series", "stream", "zee", "sony", "prime", "hotstar"])) {
    return `You get free access to 22 OTT apps with this recharge. Popular apps shown here include ${ottApps.slice(0, 6).join(", ")}, and more.`;
  }

  if (hasAny(text, ["login", "password", "coupon", "voucher", "code"])) {
    return "OTT access details are shared after recharge activation. Use the mobile number from the order when the OTT app asks for login or verification.";
  }

  if (hasAny(text, ["price", "amount", "cost", "discount", "save", "saving", "real price"])) {
    return `The selected ${selectedPack} pack costs ${money(plan.offer)}. Real price is ${money(real)}, so you save ${money(saving)} with ${discount}% off.`;
  }

  if (hasAny(text, ["refund", "fail", "failed", "money", "deduct", "deducted", "debited"])) {
    return "If payment succeeds but recharge cannot be completed, the order should be marked failed and the amount should be refunded to the original payment method.";
  }

  if (hasAny(text, ["pending", "stuck", "not paid", "payment pending"])) {
    return "If UPI is pending, wait for your bank confirmation. Do not pay twice for the same order. If money is deducted, keep the UPI reference number for support.";
  }

  if (hasAny(text, ["upi", "payment", "pay", "gpay", "phonepe", "paytm", "bhim"])) {
    return `Tap Pay with UPI, review the order, then tap Pay ${money(plan.offer)}. Your phone will show installed UPI apps with the amount already added.`;
  }

  if (hasAny(text, ["change", "wrong number", "mistake", "cancel", "edit"])) {
    return "Before payment, you can go back and change the mobile number, operator, or plan. After payment, cancellation depends on whether recharge processing has started.";
  }

  if (hasAny(text, ["jio", "airtel", "vi", "operator", "network", "circle", "location", "state"])) {
    return "Jio, Airtel, and Vi are available. Select your operator before paying so the order summary and discount update correctly.";
  }

  if (hasAny(text, ["5g", "4g", "speed", "unlimited 5g"])) {
    return "The pack includes 2GB/day high-speed data. 5G availability depends on your operator, handset, SIM, and city coverage.";
  }

  if (hasAny(text, ["call", "calls", "sms", "roaming"])) {
    return "Unlimited voice calls are included. SMS and roaming benefits can depend on the operator rules for your circle.";
  }

  if (hasAny(text, ["invoice", "receipt", "sms", "message", "confirmation"])) {
    return `After payment, netbase should show your order ID and send confirmation to the mobile number. Your current order ID is ${orderId}.`;
  }

  if (hasAny(text, ["support", "agent", "human", "contact", "help", "care"])) {
    return "I can answer common questions instantly. For a live site, add WhatsApp or phone support here for delayed recharge, failed payment, or refund cases.";
  }

  if (hasAny(text, ["safe", "secure", "privacy", "number", "details"])) {
    return "Use the mobile number only for recharge processing and order updates. Payment should be verified through a UPI/payment gateway before recharge is processed.";
  }

  if (hasAny(text, ["free", "included", "extra", "complimentary"])) {
    return "Yes, the 22 OTT apps are shown as free complimentary benefits with the selected netbase recharge pack.";
  }

  if (hasAny(text, ["hello", "hi", "hey", "namaste"])) {
    return `${getDayGreeting()}! Ask me about recharge activation, data benefits, OTT apps, UPI payment, or refunds.`;
  }

  return `I can help with activation time, 2GB/day data, unlimited calls, 22 OTT apps, UPI payment, discounts, and refunds. Your current selection is ${selectedPack} for ${money(plan.offer)}.`;
}

function openChat() {
  supportChat.hidden = false;
  chatLauncher.hidden = true;
  chatLauncher.setAttribute("aria-expanded", "true");

  if (!state.chatStarted) {
    state.chatStarted = true;
    addChatMessage("netbase AI", getGreeting());
  }

  setTimeout(() => chatInput.focus(), 0);
}

function closeChat() {
  supportChat.hidden = true;
  chatLauncher.hidden = false;
  chatLauncher.setAttribute("aria-expanded", "false");
}

function sendChatQuestion(question) {
  const cleanQuestion = question.trim();

  if (!cleanQuestion) return;

  addChatMessage("You", cleanQuestion, "user");
  chatInput.value = "";

  setTimeout(() => {
    addChatMessage("netbase AI", getBotReply(cleanQuestion));
  }, 260);
}

function appendTextWithEmail(node, text) {
  if (!text.includes(contactEmail)) {
    node.textContent = text;
    return;
  }

  const [before, after] = text.split(contactEmail);
  const emailLink = document.createElement("a");

  emailLink.href = `mailto:${contactEmail}`;
  emailLink.textContent = contactEmail;

  node.append(before, emailLink, after);
}

function renderInfoSection(section) {
  const sectionNode = document.createElement("section");
  const heading = document.createElement("h3");

  heading.textContent = section.heading;
  sectionNode.append(heading);

  if (section.paragraphs) {
    section.paragraphs.forEach((paragraphText) => {
      const paragraph = document.createElement("p");
      appendTextWithEmail(paragraph, paragraphText);
      sectionNode.append(paragraph);
    });
  }

  if (section.items) {
    const list = document.createElement("ul");

    section.items.forEach((itemText) => {
      const item = document.createElement("li");
      appendTextWithEmail(item, itemText);
      list.append(item);
    });

    sectionNode.append(list);
  }

  return sectionNode;
}

function openInfoModal(key) {
  const page = infoPages[key];

  if (!page) return;

  infoModalTitle.textContent = page.title;
  infoModalEyebrow.textContent = page.eyebrow;
  infoModalBody.replaceChildren(...page.sections.map(renderInfoSection));
  infoModal.hidden = false;
  document.body.style.overflow = "hidden";
  setTimeout(() => infoModal.querySelector("[data-close-info]").focus(), 0);
}

function closeInfoModal() {
  infoModal.hidden = true;
  document.body.style.overflow = "";
}

function getOttShortName(name) {
  if (name.includes("+")) return name.replace(/[^A-Z+]/g, "").slice(0, 3);

  const compact = name.replace(/[^a-z0-9]/gi, "");

  if (compact.length <= 5) return compact.toUpperCase().slice(0, 3);

  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
}

function renderOttApps() {
  const nodes = ottApps.map((appName) => {
    const item = document.createElement("span");
    item.dataset.short = getOttShortName(appName);
    item.textContent = appName;
    return item;
  });

  ottFullGrid.replaceChildren(...nodes);
}

function openOttModal() {
  renderOttApps();
  ottModal.hidden = false;
  document.body.style.overflow = "hidden";
  setTimeout(() => ottModal.querySelector("[data-close-ott]").focus(), 0);
}

function closeOttModal() {
  ottModal.hidden = true;
  document.body.style.overflow = "";
}

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.operator = button.dataset.operator;
    setActive(operatorButtons, "operator", state.operator);
    refreshPlanSavings();
    refreshSummary();
  });
});

planButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.plan = button.dataset.plan;
    setActive(planButtons, "plan", state.plan);
    refreshSummary();
  });
});

mobileInput.addEventListener("input", () => {
  mobileInput.value = mobileInput.value.replace(/\D/g, "").slice(0, 10);
  if (mobileError.textContent) validateMobile();
});

rechargeForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!validateMobile()) {
    mobileInput.focus();
    return;
  }

  showOrderPage();
});

backToRecharge.addEventListener("click", showRechargePage);

openUpiApps.addEventListener("click", () => {
  window.location.href = createUpiUrl("any");
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    upiModal.hidden = true;
    document.body.style.overflow = "";
  });
});

upiAppButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const appName = button.textContent.trim().replace(/\s+/g, " ");
    const upiUrl = createUpiUrl(button.dataset.upiApp);

    paymentStatus.classList.add("active");
    paymentStatus.innerHTML = `<span></span>Opening ${appName} with ${money(getSelection().plan.offer)}`;
    window.location.href = upiUrl;
  });
});

chatLauncher.addEventListener("click", openChat);
chatClose.addEventListener("click", closeChat);

quickReplyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    sendChatQuestion(button.dataset.chatQuestion);
  });
});

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  sendChatQuestion(chatInput.value);
});

infoButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openInfoModal(button.dataset.infoModal);
  });
});

closeInfoButtons.forEach((button) => {
  button.addEventListener("click", closeInfoModal);
});

showOttApps.addEventListener("click", openOttModal);

closeOttButtons.forEach((button) => {
  button.addEventListener("click", closeOttModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !upiModal.hidden) {
    upiModal.hidden = true;
    document.body.style.overflow = "";
  }

  if (event.key === "Escape" && !ottModal.hidden) {
    closeOttModal();
  }

  if (event.key === "Escape" && !infoModal.hidden) {
    closeInfoModal();
  }

  if (event.key === "Escape" && !supportChat.hidden) {
    closeChat();
  }
});

refreshPlanSavings();
refreshSummary();

if (window.lucide) {
  window.lucide.createIcons();
}
