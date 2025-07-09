class AccessibilityWidget extends HTMLElement {
  private fontSize: number = 100;
  private imagesHidden: boolean = false;

  connectedCallback(): void {
    this.render();
    this.setupEventListeners();
    this.loadGoogleTranslate();
  }

  render(): void {
    this.innerHTML = `
      <div id="accessibility-toggle" class="accessibility-toggle">
        <button class="toggle-button">☰</button>
      </div>
      <div id="accessibility-menu" class="accessibility-menu invisible opacity-0">
        <div class="menu-header">
          <h2 data-i18n="menuTitle">Menu Aksesibilitas</h2>
          <button class="close-btn">×</button>
        </div>
        <div class="section">
          <label data-i18n="languageLabel">Pilih Bahasa</label>
          <div id="google_translate_element" class="translate-box"></div>
        </div>
        <div class="section">
          <label for="accessibility-profile">Pilih Profil Aksesibilitas</label>
          <select id="accessibility-profile">
            <option value="">Pilih Profil Aksesibilitas</option>
            <option value="buta-warna">Buta Warna</option>
            <option value="disleksia">Disleksia</option>
            <option value="gangguan-penglihatan">Gangguan Penglihatan</option>
            <option value="kognitif">Kognitif & Pembelajaran</option>
            <option value="epilepsi">Kejang & Epilepsi</option>
            <option value="adhd">ADHD</option>
          </select>
        </div>
        <div class="section">
          <label for="widget-position">Posisi Widget</label>
          <select id="widget-position">
            <option value="kiri-bawah">Kiri Bawah</option>
            <option value="kanan-bawah" selected>Kanam Bawah</option>
            <option value="kiri-atas">Kiri Atas</option>
            <option value="kanan-atas">Kanan Atas</option>
            <option value="kiri-tengah">Kiri Tengah</option>
            <option value="kanan-tengah">Kanan Tengah</option>
            <option value="bawah-tengah">Bawah Tengah</option>
            <option value="atas-tengah">Atas Tengah</option>
          </select>
        </div>
        <div class="section">
          <p data-i18n="fontSizeLabel">Sesuaikan Ukuran Font</p>
          <div class="font-controls">
            <button class="btn decrease-font">-</button>
            <span id="fontSizeDisplay">100%</span>
            <button class="btn increase-font">+</button>
          </div>
        </div>
        <div class="section">
          <p data-i18n="adjustContent">Penyesuaian Konten</p>
          <div class="grid-buttons">
            ${this.generateButtons([
              ["highlight-title", "🔠", "title"],
              ["highlight-links", "🔗", "links"],
              ["dyslexia-font", "🧠", "dyslexia"],
              ["letter-spacing", "↔️", "spacing"],
              ["line-height", "📏", "lineHeight"],
              ["font-weight", "🅱️", "bold"],
            ])}
          </div>
        </div>
        <div class="section">
          <p data-i18n="adjustColor">Penyesuaian Warna</p>
          <div class="grid-buttons">
            ${this.generateButtons([
              ["dark-contrast", "🌑", "dark"],
              ["light-contrast", "🌕", "light"],
              ["high-contrast", "🔳", "contrast"],
              ["high-saturation", "🎨", "saturateHigh"],
              ["low-saturation", "🌫️", "saturateLow"],
              ["monochrome", "⚫", "mono"],
            ])}
          </div>
        </div>
        <div class="section">
          <p data-i18n="tools">Alat</p>
          <div class="grid-buttons">
            <button class="btn" onclick="alert('Gunakan pembaca layar browser')">🔊 <span data-i18n="reader">Pembaca Layar</span></button>
            <button class="btn toggle-images">🖼️ <span data-i18n="hideImages">Sembunyikan Gambar</span></button>
            <button class="btn toggle-class" data-class="reading-guide">📘 <span data-i18n="guide">Panduan Membaca</span></button>
            <button class="btn toggle-class" data-class="reading-mask">🕶️ <span data-i18n="mask">Masker Membaca</span></button>
            <button class="btn disable-animations">⛔ <span data-i18n="stopAnim">Nonaktifkan Animasi</span></button>
            <button class="btn toggle-class" data-class="big-cursor">🖱️ <span data-i18n="cursor">Kursor Besar</span></button>
          </div>
        </div>
        <div class="section text-center">
          <button class="reset-btn" data-i18n="reset">Atur Ulang Pengaturan</button>
        </div>
      </div>
    `;
  }

  generateButtons(buttons: [string, string, string][]): string {
    const labels: Record<string, string> = {
      title: "Sorot Judul",
      links: "Sorot Tautan",
      dyslexia: "Font Disleksia",
      spacing: "Spasi Huruf",
      lineHeight: "Jarak Baris",
      bold: "Teks Tebal",
      dark: "Kontras Gelap",
      light: "Kontras Terang",
      contrast: "Kontras Tinggi",
      saturateHigh: "Saturasi Tinggi",
      saturateLow: "Saturasi Rendah",
      mono: "Mode Monokrom",
    };

    return buttons
      .map(
        ([cls, icon, key]) => `
        <button class="btn toggle-class" data-class="${cls}">
          ${icon} <span data-i18n="${key}">${labels[key]}</span>
        </button>
      `
      )
      .join("");
  }

  setupEventListeners(): void {
    const $ = (selector: string) => this.querySelector(selector);
    const $$ = (selector: string) => this.querySelectorAll(selector);

    const toggleBtn = $(".toggle-button");
    const closeBtn = $(".close-btn");
    const incFont = $(".increase-font");
    const decFont = $(".decrease-font");
    const resetBtn = $(".reset-btn");
    const imgToggle = $(".toggle-images");
    const animDisable = $(".disable-animations");
    const profileSelect = $("#accessibility-profile") as HTMLSelectElement | null;
    const positionSelect = $("#widget-position") as HTMLSelectElement | null;

    toggleBtn?.addEventListener("click", () => this.toggleMenu());
    closeBtn?.addEventListener("click", () => this.toggleMenu());
    incFont?.addEventListener("click", () => this.adjustFontSize(10));
    decFont?.addEventListener("click", () => this.adjustFontSize(-10));
    resetBtn?.addEventListener("click", () => this.resetAccessibility());
    imgToggle?.addEventListener("click", () => this.toggleImages());
    animDisable?.addEventListener("click", () => this.disableAnimations());

    $$(".toggle-class").forEach((btn) => {
      btn.addEventListener("click", () => {
        const className = (btn as HTMLElement).dataset.class;
        if (className) {
          const isActive = document.body.classList.toggle(className);
          btn.classList.toggle("active", isActive);
        }
      });
    });

    profileSelect?.addEventListener("change", (e: Event) => {
      const value = (e.target as HTMLSelectElement).value;
      const resetClasses = [
        "highlight-title", "highlight-links", "dyslexia-font", "letter-spacing",
        "line-height", "font-weight", "dark-contrast", "light-contrast",
        "high-contrast", "high-saturation", "low-saturation", "monochrome",
        "reading-guide", "reading-mask", "big-cursor"
      ];
      document.body.classList.remove(...resetClasses);
      document.documentElement.classList.remove(
        ...Array.from(document.documentElement.classList).filter((cls) => cls.startsWith("font-scale-"))
      );
      document.documentElement.classList.add("font-scale-100");

      switch (value) {
        case "buta-warna":
          document.body.classList.add("monochrome");
          break;
        case "disleksia":
          document.body.classList.add("dyslexia-font", "letter-spacing", "line-height");
          break;
        case "gangguan-penglihatan":
          document.body.classList.add("font-weight", "highlight-links");
          document.documentElement.classList.add("font-scale-150");
          break;
        case "kognitif":
          document.body.classList.add("reading-guide", "highlight-title");
          break;
        case "epilepsi":
          this.disableAnimations();
          break;
        case "adhd":
          document.body.classList.add("reading-mask", "big-cursor");
          break;
      }
    });

    positionSelect?.addEventListener("change", (e: Event) => {
      const value = (e.target as HTMLSelectElement).value;
      const widget = $("#accessibility-toggle") as HTMLElement;
      const menu = $("#accessibility-menu") as HTMLElement;
      if (!widget || !menu) return;

      const positions: Record<string, Partial<CSSStyleDeclaration>> = {
        "kiri-bawah": { bottom: "20px", left: "20px" },
        "kanan-bawah": { bottom: "20px", right: "20px" },
        "kiri-atas": { top: "20px", left: "20px" },
        "kanan-atas": { top: "20px", right: "20px" },
        "kiri-tengah": { top: "50%", left: "20px", transform: "translateY(-50%)" },
        "kanan-tengah": { top: "50%", right: "20px", transform: "translateY(-50%)" },
        "bawah-tengah": { bottom: "20px", left: "50%", transform: "translateX(-50%)" },
        "atas-tengah": { top: "20px", left: "50%", transform: "translateX(-50%)" }
      };

      Object.assign(widget.style, {
        top: "", bottom: "", left: "", right: "", transform: "",
        ...positions[value]
      });

      menu.classList.remove("open");
      widget.classList.remove("menu-open");
    });
  }

  toggleMenu(): void {
    const menu = this.querySelector("#accessibility-menu");
    const toggle = this.querySelector(".accessibility-toggle");
    const isOpen = menu?.classList.toggle("open");
    toggle?.classList.toggle("menu-open", isOpen ?? false);
  }

  adjustFontSize(change: number): void {
    this.fontSize = Math.min(200, Math.max(50, this.fontSize + change));
    document.documentElement.classList.remove(
      ...Array.from(document.documentElement.classList).filter((cls) => cls.startsWith("font-scale-"))
    );
    document.documentElement.classList.add(`font-scale-${this.fontSize}`);
    const display = this.querySelector("#fontSizeDisplay");
    if (display) display.textContent = `${this.fontSize}%`;
  }

  toggleImages(): void {
    this.imagesHidden = !this.imagesHidden;
    document.querySelectorAll("img").forEach((img) => {
      (img as HTMLImageElement).style.display = this.imagesHidden ? "none" : "";
    });
  }

  disableAnimations(): void {
    document.querySelectorAll<HTMLElement>("*").forEach((el) => {
      el.style.animation = "none";
      el.style.transition = "none";
    });
  }

  resetAccessibility(): void {
    const resetClasses = [
      "highlight-title", "highlight-links", "dyslexia-font", "letter-spacing",
      "line-height", "font-weight", "dark-contrast", "light-contrast",
      "high-contrast", "high-saturation", "low-saturation", "monochrome",
      "reading-guide", "reading-mask", "big-cursor"
    ];
    document.body.classList.remove(...resetClasses);
    document.documentElement.classList.remove(
      ...Array.from(document.documentElement.classList).filter((cls) => cls.startsWith("font-scale-"))
    );
    document.documentElement.classList.add("font-scale-100");
    this.fontSize = 100;
    this.imagesHidden = false;
    document.querySelectorAll("img").forEach((img) => {
      (img as HTMLImageElement).style.display = "";
    });
    const fontDisplay = this.querySelector("#fontSizeDisplay");
    if (fontDisplay) fontDisplay.textContent = "100%";
    this.querySelectorAll(".toggle-class").forEach((btn) => {
      btn.classList.remove("active");
    });
  }

  loadGoogleTranslate(): void {
    if (!(window as any).googleTranslateElementInit) {
      (window as any).googleTranslateElementInit = () => {
        new (window as any).google.translate.TranslateElement(
          {
            pageLanguage: "id",
            includedLanguages: "id,en,ja,ko,nl,zh-CN,ru,fr,de,es,ar,hi,ms,th,vi,pt,it,pl,uk,tr",
            layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
          },
          "google_translate_element"
        );
      };

      const script = document.createElement("script");
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    }
  }
}

customElements.define("accessibility-widget", AccessibilityWidget);
