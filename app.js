const { products, fabrics, towelColors = [], scents = [] } = window.HOL_PRODUCTS;
const money = new Intl.NumberFormat("en-EG", { style: "currency", currency: "EGP", maximumFractionDigits: 0 });
const state = { basket: JSON.parse(localStorage.getItem("holBasket") || "[]") };

const catalog = document.querySelector("#catalog");
const basketDrawer = document.querySelector("#basketDrawer");
const basketItems = document.querySelector("#basketItems");
const basketCount = document.querySelector("#basketCount");
const subtotal = document.querySelector("#subtotal");
const toast = document.querySelector("#toast");
const orderReview = document.querySelector("#order-review");
const reviewItems = document.querySelector("#reviewItems");
const reviewSubtotal = document.querySelector("#reviewSubtotal");
const orderConfirmation = document.querySelector("#orderConfirmation");
const customerName = document.querySelector("#customerName");
const customerPhone = document.querySelector("#customerPhone");
const customerAddress = document.querySelector("#customerAddress");
const customerFields = document.querySelector("#customerFields");
const WHATSAPP_PHONE = "201004333340";
let pendingConfirmationNumber = "";

const savedCustomer = JSON.parse(localStorage.getItem("holCustomer") || "{}");
customerName.value = savedCustomer.name || "";
customerPhone.value = savedCustomer.phone || "";
customerAddress.value = savedCustomer.address || "";

const categoryCopy = {
  "Fitted Sheets": "Tailored Percale Fitted Sheet Sets Designed To Sit Smoothly On The Mattress And Keep The Bed Looking Fresh.",
  "Duvet Covers": "Calm Percale Duvet Cover Sets For A Soft, Breathable And Beautifully Layered Bed.",
  Pillowcases: "Crisp Percale Pillowcase Sets With A Clean Tailored Finish For Everyday Comfort.",
  "Flat Sheets": "Elegant Percale Flat Sheet Sets For A Boutique-Hotel Fold And A Light Breathable Layer.",
  Towels: "Plush 600 Gsm Egyptian Cotton Essentials For A Spa-Like Daily Ritual.",
  "Summer Essentials": "Striped pool and beach towels for sunny days, resort weekends and relaxed summer lounging.",
  Pillows: "Soft, Medium And Firm Bed Pillows With A Clean Blended-Cotton Shell.",
  "Mattress Toppers": "Comfort Layers Designed To Refresh The Mattress And Elevate The Whole Bed.",
  Comforters: "White Comforters For Airy Layering, Warmth And A Soft Finished Bed.",
  "Home Fragrance": "Beautiful bedding deserves a beautiful scent. Discover warm, calm scents for every room."
};

const categoryHeroImages = {
  "Fitted Sheets": "assets/images/editorial/fitted-sheets.jpg",
  "Duvet Covers": "assets/images/editorial/duvet-covers.jpg",
  Pillowcases: "assets/images/editorial/pillowcases.jpg",
  "Flat Sheets": "assets/images/editorial/flat-sheets.jpg",
  Towels: "assets/images/editorial/towels.jpg",
  "Summer Essentials": "assets/images/editorial/summer-essentials.jpg",
  Pillows: "assets/images/editorial/pillows.jpg",
  "Mattress Toppers": "assets/images/editorial/mattress-toppers.jpg",
  Comforters: "assets/images/editorial/comforters.jpg",
  "Home Fragrance": "assets/images/editorial/home-fragrance.jpg"
};

const categoryOrder = [
  "Pillowcases",
  "Fitted Sheets",
  "Flat Sheets",
  "Duvet Covers",
  "Towels",
  "Summer Essentials",
  "Pillows",
  "Comforters",
  "Mattress Toppers",
  "Home Fragrance"
];

function sectionId(label) {
  return label.toLowerCase().replaceAll(" ", "-");
}

function imageFor(product, fabric = "percale", optionName = "", colorName = "") {
  if (product.fabricBased && fabric === "percale") {
    const option = fabrics.percale.options.find(item => item.name === optionName);
    const slug = option?.sourceSlug || optionName.toLowerCase().replaceAll(" ", "-");
    const images = {
      "fitted-sheet-set": option?.image,
      "duvet-cover-set": `assets/lifestyle/duvet-colors/duvet-cover-set-${slug}.jpg`,
      "pillowcase-set": `assets/lifestyle/pillowcase-colors/pillowcase-set-${slug}.jpg`,
      "flat-sheet-set": `assets/lifestyle/flat-colors/flat-sheet-set-${slug}.jpg`
    };
    if (images[product.id]) return images[product.id];
  }
  if (product.colorBased) {
    const colors = product.colors || towelColors;
    const color = colors.find(item => item.name === colorName) || colors[0];
    if (color?.image) return color.image;
    if (color?.name === "White") return product.image;
    return color?.swatch || product.image;
  }
  if (product.fragranceBased) return product.image;
  if (product.fabricBased) return imageFor(product, "percale", fabrics.percale.options[0].name);
  return product.image;
}

function formatPrice(value) {
  return money.format(value).replace("EGP", "EGP ");
}

function plainPrice(value) {
  return `${value.toLocaleString("en-EG")} EGP`;
}

function fallbackArt(label) {
  return `<div class="fallback-art"><div><p class="eyebrow">Home Of Linen</p><strong>${label}</strong><p>Product Image Unavailable For This Preview.</p></div></div>`;
}

function setImage(container, src, alt) {
  container.innerHTML = `<img src="${src}" alt="${alt}" loading="lazy">`;
  const img = container.querySelector("img");
  img.addEventListener("error", () => {
    container.innerHTML = fallbackArt(alt);
  }, { once: true });
}

function productPrice(product, selections) {
  if (product.noPrice) return null;
  if (product.fabricBased) {
    const setPrice = product.sizes[selections.sizeIndex][selections.fabric];
    return selections.bundleType === "single" ? Math.max(0, setPrice - (product.singleDiscount || 0)) : setPrice;
  }
  if (product.matrix) {
    const variant = product.matrix.variants[selections.variantIndex];
    return variant.prices[selections.matrixSize];
  }
  return product.variants[selections.variantIndex].price;
}

function productDescriptor(product, selections) {
  if (product.fabricBased) {
    const size = product.sizes[selections.sizeIndex].label;
    const bundleLabel = product.setToggle && selections.bundleType === "single" ? "Single Item" : product.setToggle ? "Set With 2 Pillowcases" : "";
    return {
      fabric: fabrics[selections.fabric].label,
      option: selections.optionName,
      color: selections.optionName,
      size,
      bundle: bundleLabel,
      variant: [bundleLabel, fabrics[selections.fabric].label, size].filter(Boolean).join(" · ")
    };
  }
  if (product.matrix) {
    return {
      fabric: "",
      option: "",
      color: "White",
      size: selections.matrixSize,
      variant: `${product.matrix.variants[selections.variantIndex].label} · ${selections.matrixSize}`
    };
  }
  if (product.colorBased) {
    return {
      fabric: "",
      option: selections.colorName,
      color: selections.colorName,
      size: product.variants[selections.variantIndex].label,
      variant: product.variants[selections.variantIndex].label
    };
  }
  if (product.fragranceBased) {
    const scent = scents[selections.scentIndex] || scents[0];
    return {
      fabric: "",
      option: scent?.name || "",
      color: scent?.name || "",
      size: product.includes,
      variant: scent?.name || product.includes
    };
  }
  return {
    fabric: "",
    option: "",
    color: "White",
    size: product.variants[selections.variantIndex].label,
    variant: product.variants[selections.variantIndex].label
  };
}

function fabricDetailHtml() {
  return "";
}

function currentDescription(product, selections) {
  if (product.fragranceBased) {
    const scent = scents[selections.scentIndex] || scents[0];
    return `${product.description} Scent: ${scent.name}. ${scent.mood} Notes include ${scent.notes.join(", ")}.`;
  }
  if (product.matrix) {
    return product.matrix.variants[selections.variantIndex]?.description || product.description || "";
  }
  if (product.variants) {
    return product.variants[selections.variantIndex]?.description || product.description || "";
  }
  return product.description || "";
}

function renderCatalog() {
  const groups = [...new Set(products.map(p => p.category))]
    .sort((a, b) => categoryOrder.indexOf(a) - categoryOrder.indexOf(b));
  catalog.innerHTML = groups.map(group => `
    <section class="category category-${sectionId(group)}" id="${sectionId(group)}">
      <div class="category-head">
        <div>
          <p class="eyebrow">Home Of Linen</p>
          <h2>${group}</h2>
          <p>${categoryCopy[group] || ""}</p>
        </div>
        <img src="${categoryHeroImages[group]}" alt="${group} Lifestyle Image" loading="lazy">
      </div>
      <div class="grid">
        ${products.filter(p => p.category === group).map(cardTemplate).join("")}
      </div>
    </section>
  `).join("");
  products.forEach(activateCard);
}

function cardTemplate(product) {
  return `
    <article class="card ${product.noPrice ? "no-price-card" : ""}" data-product="${product.id}">
      <div class="image-wrap" data-image></div>
      <div class="mobile-controls" data-mobile-controls></div>
      <div class="card-body">
        <div>
          <p class="eyebrow">${product.category}</p>
          <h3>${product.name}</h3>
        </div>
        <p class="spec" data-spec>${product.includes}</p>
        <div data-controls></div>
        <div class="buy-row">
          <div>
            <div class="price" data-price></div>
            <div class="qty" aria-label="Quantity selector">
              <button type="button" data-qty-down aria-label="Decrease quantity">−</button>
              <span data-qty>1</span>
              <button type="button" data-qty-up aria-label="Increase quantity">+</button>
            </div>
          </div>
          <button class="add-button" type="button" data-add>${product.noPrice ? "Ask On WhatsApp" : "Add to Basket"}</button>
        </div>
        ${product.description ? `<p class="description" data-description>${product.description}</p>` : ""}
      </div>
    </article>
  `;
}

function activateCard(product) {
  const card = document.querySelector(`[data-product="${product.id}"]`);
  const image = card.querySelector("[data-image]");
  const controls = card.querySelector("[data-controls]");
  const mobileControls = card.querySelector("[data-mobile-controls]");
  const spec = card.querySelector("[data-spec]");
  const descriptionEl = card.querySelector("[data-description]");
  const priceEl = card.querySelector("[data-price]");
  const qtyEl = card.querySelector("[data-qty]");
  const selections = {
    fabric: "percale",
    optionName: fabrics.percale.options[0].name,
    colorName: (product.colors || towelColors)[0]?.name || "",
    scentIndex: 0,
    bundleType: product.setToggle ? "set" : "",
    sizeIndex: 0,
    variantIndex: 0,
    matrixSize: product.matrix ? Object.keys(product.matrix.variants[0].prices)[0] : "",
    qty: 1
  };

  function renderControls() {
    if (product.fabricBased) {
      const availableFabrics = Object.entries(fabrics).filter(([, f]) => f.enabled !== false);
      if (!availableFabrics.some(([key]) => key === selections.fabric)) {
        selections.fabric = availableFabrics[0][0];
        selections.optionName = fabrics[selections.fabric].options[0].name;
      }
      const fabric = fabrics[selections.fabric];
      controls.innerHTML = `
        ${product.setToggle ? `
          <div class="toggle bundle-toggle" role="tablist" aria-label="Set or single item">
            <button type="button" class="${selections.bundleType === "set" ? "active" : ""}" data-bundle="set">Set</button>
            <button type="button" class="${selections.bundleType === "single" ? "active" : ""}" data-bundle="single">Single Item</button>
          </div>
        ` : ``}
        ${availableFabrics.length > 1 ? `
          <div class="toggle" role="tablist" aria-label="Fabric">
            ${availableFabrics.map(([key, f]) => `<button type="button" class="${key === selections.fabric ? "active" : ""}" data-fabric="${key}">${f.label}</button>`).join("")}
          </div>
        ` : ``}
        <div class="swatches" aria-label="${fabric.label} colours and patterns">
          ${fabric.options.map((opt, i) => `
            <button type="button" class="swatch-choice ${opt.name === selections.optionName ? "active" : ""}" data-option="${i}" aria-label="${opt.name}" title="${opt.name}">
              <span class="swatch" style="background:${opt.value}"></span>
              <span class="swatch-label">${opt.name}</span>
            </button>
          `).join("")}
        </div>
        ${fabricDetailHtml(selections.fabric, selections.optionName)}
        <div class="selectors">
          <label>${product.sizeLabel || "Size"}
            <select data-size>
              ${product.sizes.map((s, i) => `<option value="${i}" ${i === selections.sizeIndex ? "selected" : ""}>${s.label}</option>`).join("")}
            </select>
          </label>
        </div>
      `;
      mobileControls.innerHTML = controls.innerHTML;
      controls.querySelectorAll("[data-bundle]").forEach(button => button.addEventListener("click", () => {
        selections.bundleType = button.dataset.bundle;
        renderControls();
        update();
      }));
      controls.querySelectorAll("[data-fabric]").forEach(button => button.addEventListener("click", () => {
        selections.fabric = button.dataset.fabric;
        selections.optionName = fabrics[selections.fabric].options[0].name;
        renderControls();
        update();
      }));
      controls.querySelectorAll("[data-option]").forEach(button => button.addEventListener("click", () => {
        selections.optionName = fabrics[selections.fabric].options[Number(button.dataset.option)].name;
        renderControls();
        update();
      }));
      controls.querySelector("[data-size]").addEventListener("change", e => {
        selections.sizeIndex = Number(e.target.value);
        update();
      });
      mobileControls.querySelectorAll("[data-fabric]").forEach(button => button.addEventListener("click", () => {
        selections.fabric = button.dataset.fabric;
        selections.optionName = fabrics[selections.fabric].options[0].name;
        renderControls();
        update();
      }));
      mobileControls.querySelectorAll("[data-bundle]").forEach(button => button.addEventListener("click", () => {
        selections.bundleType = button.dataset.bundle;
        renderControls();
        update();
      }));
      mobileControls.querySelectorAll("[data-option]").forEach(button => button.addEventListener("click", () => {
        selections.optionName = fabrics[selections.fabric].options[Number(button.dataset.option)].name;
        renderControls();
        update();
      }));
      mobileControls.querySelector("[data-size]").addEventListener("change", e => {
        selections.sizeIndex = Number(e.target.value);
        update();
      });
    } else if (product.colorBased) {
      const colors = product.colors || towelColors;
      controls.innerHTML = `
        <div class="swatches" aria-label="${product.name} colours">
          ${colors.map((opt, i) => `
            <button type="button" class="swatch-choice ${opt.name === selections.colorName ? "active" : ""}" data-towel-option="${i}" aria-label="${opt.name}" title="${opt.name}">
              <span class="swatch towel-swatch" style="${opt.swatch ? `background-image:url('${opt.swatch}')` : `background:${opt.value}`}"></span>
              <span class="swatch-label">${opt.name}</span>
            </button>
          `).join("")}
        </div>
        <div class="selectors">
          <label>${product.sizeLabel || "Size"}
            <select data-variant>
              ${product.variants.map((v, i) => `<option value="${i}" ${i === selections.variantIndex ? "selected" : ""}>${v.label}</option>`).join("")}
            </select>
          </label>
        </div>
      `;
      mobileControls.innerHTML = controls.innerHTML;
      controls.querySelectorAll("[data-towel-option]").forEach(button => button.addEventListener("click", () => {
        selections.colorName = colors[Number(button.dataset.towelOption)].name;
        renderControls();
        update();
      }));
      controls.querySelector("[data-variant]").addEventListener("change", e => {
        selections.variantIndex = Number(e.target.value);
        update();
      });
      mobileControls.querySelectorAll("[data-towel-option]").forEach(button => button.addEventListener("click", () => {
        selections.colorName = colors[Number(button.dataset.towelOption)].name;
        renderControls();
        update();
      }));
      mobileControls.querySelector("[data-variant]").addEventListener("change", e => {
        selections.variantIndex = Number(e.target.value);
        update();
      });
    } else if (product.fragranceBased) {
      const fragranceScents = product.variants?.length ? product.variants : scents;
      controls.innerHTML = `
        <div class="selectors">
          <label>Scent
            <select data-scent>
              ${fragranceScents.map((s, i) => `<option value="${i}" ${i === selections.scentIndex ? "selected" : ""}>${s.name || s.label}</option>`).join("")}
            </select>
          </label>
        </div>
        <div class="fragrance-notes">
          ${(fragranceScents[selections.scentIndex]?.notes || []).map(note => `<span>${note}</span>`).join("")}
        </div>
        <p class="fabric-note">${fragranceScents[selections.scentIndex]?.mood || ""}</p>
      `;
      mobileControls.innerHTML = controls.innerHTML;
      controls.querySelector("[data-scent]").addEventListener("change", e => {
        selections.scentIndex = Number(e.target.value);
        renderControls();
        update();
      });
      mobileControls.querySelector("[data-scent]").addEventListener("change", e => {
        selections.scentIndex = Number(e.target.value);
        renderControls();
        update();
      });
    } else if (product.matrix) {
      const currentVariant = product.matrix.variants[selections.variantIndex];
      controls.innerHTML = `
        <div class="selectors">
          <label>${product.matrix.variantLabel}
            <select data-variant>
              ${product.matrix.variants.map((v, i) => `<option value="${i}" ${i === selections.variantIndex ? "selected" : ""}>${v.label}</option>`).join("")}
            </select>
          </label>
          <label>${product.matrix.sizeLabel}
            <select data-matrix-size>
              ${Object.keys(currentVariant.prices).map(s => `<option value="${s}" ${s === selections.matrixSize ? "selected" : ""}>${s}</option>`).join("")}
            </select>
          </label>
        </div>
      `;
      mobileControls.innerHTML = controls.innerHTML;
      controls.querySelector("[data-variant]").addEventListener("change", e => {
        selections.variantIndex = Number(e.target.value);
        const prices = product.matrix.variants[selections.variantIndex].prices;
        if (!prices[selections.matrixSize]) selections.matrixSize = Object.keys(prices)[0];
        renderControls();
        update();
      });
      controls.querySelector("[data-matrix-size]").addEventListener("change", e => {
        selections.matrixSize = e.target.value;
        update();
      });
      mobileControls.querySelector("[data-variant]").addEventListener("change", e => {
        selections.variantIndex = Number(e.target.value);
        const prices = product.matrix.variants[selections.variantIndex].prices;
        if (!prices[selections.matrixSize]) selections.matrixSize = Object.keys(prices)[0];
        renderControls();
        update();
      });
      mobileControls.querySelector("[data-matrix-size]").addEventListener("change", e => {
        selections.matrixSize = e.target.value;
        update();
      });
    } else {
      controls.innerHTML = `
        <div class="selectors">
          <label>Variant
            <select data-variant>
              ${product.variants.map((v, i) => `<option value="${i}" ${i === selections.variantIndex ? "selected" : ""}>${v.label}</option>`).join("")}
            </select>
          </label>
        </div>
      `;
      mobileControls.innerHTML = controls.innerHTML;
      controls.querySelector("[data-variant]").addEventListener("change", e => {
        selections.variantIndex = Number(e.target.value);
        update();
      });
      mobileControls.querySelector("[data-variant]").addEventListener("change", e => {
        selections.variantIndex = Number(e.target.value);
        update();
      });
    }
  }

  function update() {
    const img = imageFor(product, selections.fabric, selections.optionName, selections.colorName);
    setImage(image, img, `${product.name} ${product.fabricBased ? fabrics[selections.fabric].label : selections.colorName}`);
    const scent = scents[selections.scentIndex] || scents[0];
    const bundleSpec = product.setToggle && selections.bundleType === "single" ? "Single Item" : product.includes;
    spec.textContent = product.fabricBased ? `${bundleSpec} · ${fabrics[selections.fabric].spec}` : product.colorBased ? `${product.includes} · ${selections.colorName}` : product.fragranceBased ? `${product.includes} · ${scent.name}` : product.includes;
    if (descriptionEl) descriptionEl.textContent = currentDescription(product, selections);
    const price = productPrice(product, selections);
    priceEl.textContent = price === null ? "" : formatPrice(price);
    qtyEl.textContent = selections.qty;
  }

  card.querySelector("[data-qty-down]").addEventListener("click", () => {
    selections.qty = Math.max(1, selections.qty - 1);
    update();
  });
  card.querySelector("[data-qty-up]").addEventListener("click", () => {
    selections.qty += 1;
    update();
  });
  card.querySelector("[data-add]").addEventListener("click", () => {
    if (product.noPrice) {
      openProductInquiry(product, selections);
      return;
    }
    const descriptor = productDescriptor(product, selections);
    const item = {
      key: `${product.id}|${descriptor.variant}|${descriptor.option}|${descriptor.bundle || ""}`,
      productId: product.id,
      name: product.name,
      category: product.category,
      image: imageFor(product, selections.fabric, selections.optionName, selections.colorName),
      price: productPrice(product, selections),
      qty: selections.qty,
      ...descriptor
    };
    const existing = state.basket.find(i => i.key === item.key);
    if (existing) existing.qty += item.qty;
    else state.basket.push(item);
    saveBasket();
    showToast(`${product.name} added to basket`);
    selections.qty = 1;
    update();
  });

  renderControls();
  update();
}

function saveBasket() {
  localStorage.setItem("holBasket", JSON.stringify(state.basket));
  renderBasket();
}

function basketTotal() {
  return state.basket.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function recommendationsHtml() {
  return `
    <div class="cart-recommendations">
      <p class="eyebrow">You May Also Love</p>
      <div>
        <button type="button" data-inquiry-product="linen-pillow-mist">Linen Mist</button>
        <button type="button" data-inquiry-product="scented-candle">Candle</button>
        <button type="button" data-inquiry-product="reed-diffuser">Diffuser</button>
      </div>
    </div>
  `;
}

function renderBasket() {
  const count = state.basket.reduce((sum, item) => sum + item.qty, 0);
  basketCount.textContent = count;
  if (!state.basket.length) {
    basketItems.innerHTML = `<p class="spec">Your Basket Is Empty.</p>`;
    subtotal.textContent = formatPrice(0);
    renderOrderReview();
    return;
  }
  const total = basketTotal();
  const groups = [...new Set(state.basket.map(item => item.category || "Products"))];
  basketItems.innerHTML = groups.map(group => `
    <section class="basket-group">
      <h3>${group}</h3>
      ${state.basket.map((item, index) => ({ item, index })).filter(({ item }) => (item.category || "Products") === group).map(({ item, index }) => `
        <div class="basket-line">
          <img src="${item.image}" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'basket-thumb-fallback'}))">
          <div>
            <h4>${item.name}</h4>
            <p>${[item.fabric, item.option, item.variant].filter(Boolean).join(" · ")}</p>
            <div class="line-actions">
              <div class="qty">
                <button type="button" data-line-down="${index}" aria-label="Decrease ${item.name}">−</button>
                <span>${item.qty}</span>
                <button type="button" data-line-up="${index}" aria-label="Increase ${item.name}">+</button>
              </div>
              <strong>${formatPrice(item.price * item.qty)}</strong>
            </div>
            <button class="remove" type="button" data-remove="${index}">Remove</button>
          </div>
        </div>
      `).join("")}
    </section>
  `).join("") + recommendationsHtml();
  subtotal.textContent = formatPrice(total);
  renderOrderReview();
  basketItems.querySelectorAll("[data-line-down]").forEach(button => button.addEventListener("click", () => {
    const item = state.basket[Number(button.dataset.lineDown)];
    item.qty = Math.max(1, item.qty - 1);
    saveBasket();
  }));
  basketItems.querySelectorAll("[data-line-up]").forEach(button => button.addEventListener("click", () => {
    state.basket[Number(button.dataset.lineUp)].qty += 1;
    saveBasket();
  }));
  basketItems.querySelectorAll("[data-remove]").forEach(button => button.addEventListener("click", () => {
    state.basket.splice(Number(button.dataset.remove), 1);
    saveBasket();
  }));
  basketItems.querySelectorAll("[data-inquiry-product]").forEach(button => button.addEventListener("click", () => {
    const product = products.find(item => item.id === button.dataset.inquiryProduct);
    if (product) openProductInquiry(product, { scentIndex: 0 });
  }));
}

function reviewLineHtml(item) {
  return `
    <div class="review-line">
      <img src="${item.image}" alt="" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'basket-thumb-fallback'}))">
      <div>
        <h4>${item.name}</h4>
        <p>${[item.category, item.color || item.option, item.size || item.variant].filter(Boolean).join(" · ")}</p>
        <div class="review-line-meta">
          <span>Qty ${item.qty}</span>
          <span>${formatPrice(item.price)} Each</span>
          <strong>${formatPrice(item.price * item.qty)}</strong>
        </div>
      </div>
    </div>
  `;
}

function renderOrderReview() {
  if (!reviewItems || !reviewSubtotal) return;
  if (!state.basket.length) {
    reviewItems.innerHTML = `<p class="spec">Your Basket Is Empty.</p>`;
    reviewSubtotal.textContent = formatPrice(0);
    if (!pendingConfirmationNumber) orderConfirmation?.classList.add("hidden");
    return;
  }
  const groups = [...new Set(state.basket.map(item => item.category || "Products"))];
  reviewItems.innerHTML = groups.map(group => `
    <section class="review-group">
      <h4>${group}</h4>
      ${state.basket.filter(item => (item.category || "Products") === group).map(reviewLineHtml).join("")}
    </section>
  `).join("");
  reviewSubtotal.textContent = formatPrice(basketTotal());
}

function customerDetails() {
  return {
    name: customerName.value.trim(),
    phone: customerPhone.value.trim(),
    address: customerAddress.value.trim()
  };
}

function saveCustomerDetails() {
  localStorage.setItem("holCustomer", JSON.stringify(customerDetails()));
}

function validateCustomer(customer) {
  const nameParts = customer.name.split(/\s+/).filter(Boolean);
  if (nameParts.length < 2) return "Please enter your first and last name.";
  if (!/^[+\d\s()-]{8,}$/.test(customer.phone)) return "Please enter a valid mobile number.";
  if (customer.address.length < 18 || !/\d/.test(customer.address)) return "Please enter a complete delivery address with building or street number.";
  return "";
}

function orderNumber() {
  const stamp = new Date();
  const date = stamp.toISOString().slice(0, 10).replaceAll("-", "");
  const random = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `HOL-${date}-${random}`;
}

function orderLine(item, index) {
  const product = products.find(candidate => candidate.id === item.productId);
  const category = item.category || product?.category || "";
  const color = item.color || item.option || "White";
  return [
    `${index + 1}. ${item.name}`,
    `Category: ${category}`,
    `Color: ${color}`,
    `Size: ${item.size || item.variant}`,
    `Quantity: ${item.qty}`,
    `Unit Price: ${plainPrice(item.price)}`,
    `Line Total: ${plainPrice(item.price * item.qty)}`
  ].join("\n");
}

function buildWhatsAppMessage() {
  const customer = customerDetails();
  const total = basketTotal();
  const confirmation = pendingConfirmationNumber || orderNumber();
  return [
    "🛒 Home of Linen - New Order",
    "",
    `Order Confirmation Number: ${confirmation}`,
    "",
    "Customer Information",
    "",
    `Name: ${customer.name}`,
    `Phone: ${customer.phone}`,
    `Address: ${customer.address}`,
    "",
    "Order Details",
    "",
    state.basket.map(orderLine).join("\n\n"),
    "",
    `Grand Total: ${plainPrice(total)}`,
    "",
    "Thank you for choosing Home of Linen. We will confirm your order details shortly."
  ].join("\n");
}

function openProductInquiry(product, selections = {}) {
  const scent = scents[selections.scentIndex || 0]?.name || "";
  const message = encodeURIComponent([
    "Hello Home of Linen,",
    "",
    `I would like to ask about: ${product.name}`,
    scent ? `Scent: ${scent}` : "",
    "",
    "Please send me the available price and details."
  ].filter(Boolean).join("\n"));
  window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${message}`, "_blank", "noopener");
}

function openWhatsAppOrder() {
  if (!state.basket.length) {
    showToast("Please add at least one item to the basket.");
    return;
  }
  pendingConfirmationNumber = "";
  orderConfirmation.classList.add("hidden");
  renderOrderReview();
  closeDrawer();
  orderReview.classList.remove("hidden");
  history.replaceState(null, "", "#order-review");
  const headerHeight = document.querySelector(".site-header").getBoundingClientRect().height;
  const top = orderReview.getBoundingClientRect().top + window.scrollY - headerHeight - 14;
  window.scrollTo({ top, behavior: "smooth" });
}

function confirmWhatsAppOrder() {
  const customer = customerDetails();
  if (!state.basket.length) {
    showToast("Your basket is empty.");
    return;
  }
  if (!customer.name || !customer.phone || !customer.address) {
    showToast("Please add your name, phone, and address.");
    customerName.focus();
    return;
  }
  const validationMessage = validateCustomer(customer);
  if (validationMessage) {
    showToast(validationMessage);
    return;
  }
  saveCustomerDetails();
  pendingConfirmationNumber = orderNumber();
  const message = encodeURIComponent(buildWhatsAppMessage());
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${message}`;
  orderConfirmation.innerHTML = `
    <strong>Thank you for your order.</strong>
    <span>Your confirmation number is ${pendingConfirmationNumber}. WhatsApp will open now with your order ready to send.</span>
  `;
  orderConfirmation.classList.remove("hidden");
  window.open(whatsappUrl, "_blank", "noopener");
  state.basket = [];
  saveBasket();
  showToast(`Thank you. Your confirmation number is ${pendingConfirmationNumber}.`);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}

document.querySelector("#openBasket").addEventListener("click", () => {
  basketDrawer.classList.add("open");
  basketDrawer.setAttribute("aria-hidden", "false");
});
document.querySelectorAll(".nav a, .hero-hotspot").forEach(link => {
  link.addEventListener("click", event => {
    const targetId = link.getAttribute("href")?.slice(1);
    const target = targetId ? document.getElementById(targetId) : null;
    if (!target) return;
    event.preventDefault();
    const headerHeight = document.querySelector(".site-header").getBoundingClientRect().height;
    const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 10;
    window.scrollTo({ top, behavior: "smooth" });
  });
});
document.querySelector("#closeBasket").addEventListener("click", closeDrawer);
basketDrawer.addEventListener("click", e => {
  if (e.target === basketDrawer) closeDrawer();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeDrawer();
});
document.querySelector("#checkout").addEventListener("click", openWhatsAppOrder);
document.querySelector("#confirmOrder").addEventListener("click", confirmWhatsAppOrder);
document.querySelector("#editBasket").addEventListener("click", () => {
  basketDrawer.classList.add("open");
  basketDrawer.setAttribute("aria-hidden", "false");
});
[customerName, customerPhone, customerAddress].forEach(field => {
  field.addEventListener("input", saveCustomerDetails);
});

function closeDrawer() {
  basketDrawer.classList.remove("open");
  basketDrawer.setAttribute("aria-hidden", "true");
}

renderCatalog();
renderBasket();
